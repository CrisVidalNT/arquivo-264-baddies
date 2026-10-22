import { PROFILES } from '../data/profiles.js';

/**
 * Card vertical 1080 x 1920; gerado 100% no navegador.
 * Não envia nome, respostas nem resultado a nenhum serviço.
 */
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Não foi possível carregar ${url}`));
    image.src = url;
  });
}

function roundedRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
}

function centered(ctx, text, x, y, font, color) {
  ctx.textAlign = 'center';
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function drawWrapped(ctx, text, x, y, maxWidth, lineHeight, font, color) {
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.fillStyle = color;
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(next).width > maxWidth) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  lines.forEach((content, index) => ctx.fillText(content, x, y + index * lineHeight, maxWidth));
  return lines.length * lineHeight;
}

function toBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('Exportação indisponível')), 'image/png');
  });
}

export async function createStory({ name, registration, profileId }) {
  const profile = PROFILES[profileId];
  if (!profile) throw new Error('Perfil não encontrado');
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas não disponível');
  const W = canvas.width, H = canvas.height;
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#091b2e'); bg.addColorStop(.5, '#213b58'); bg.addColorStop(1, '#0c1e31');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

  // Ice-blue glows and restrained glass-fragment lines.
  const halo = ctx.createRadialGradient(540, 780, 50, 540, 780, 610);
  halo.addColorStop(0, 'rgba(135,206,239,.38)'); halo.addColorStop(1, 'rgba(135,206,239,0)');
  ctx.fillStyle = halo; ctx.fillRect(0, 140, W, 1300);
  ctx.save(); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(193,231,247,.13)';
  for (let n = 0; n < 19; n++) {
    const x = (n * 139) % W;
    const y = (n * 271) % H;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (n % 2 ? -110 : 100), y + 115); ctx.stroke();
  }
  ctx.restore();

  // Surrounding dossier border.
  roundedRect(ctx, 68, 65, 944, 1790, 30, 'rgba(255,255,255,.025)', 'rgba(187,226,244,.38)');
  const [logo, eye] = await Promise.all([
    loadImage('/assets/logo-baddies-azul.png'),
    loadImage('/assets/olho-azul-baddies.webp'),
  ]);
  ctx.drawImage(logo, 355, 95, 370, 148);
  centered(ctx, 'APRESENTA', 540, 265, '500 24px Georgia, serif', '#adcddd');
  centered(ctx, 'ARQUIVO 264', 540, 385, '70px Georgia, serif', '#f2fbff');
  centered(ctx, 'REGISTRO COMPORTAMENTAL CONFIDENCIAL', 540, 443, '23px monospace', '#9bcbe6');
  ctx.drawImage(eye, 92, 430, 896, 568);
  ctx.strokeStyle = 'rgba(185,224,241,.4)';
  ctx.beginPath(); ctx.moveTo(196, 1010); ctx.lineTo(884, 1010); ctx.stroke();
  centered(ctx, 'SUJEITO IDENTIFICADO', 540, 1070, '24px monospace', '#9ebdd2');
  // Ajusta o nome a uma linha para não colidir com o número do registro.
  const displayName = name.toLocaleUpperCase('pt-BR');
  let nameFontSize = 53;
  while (nameFontSize > 27) {
    ctx.font = `bold ${nameFontSize}px Georgia, serif`;
    if (ctx.measureText(displayName).width <= 770) break;
    nameFontSize -= 2;
  }
  centered(ctx, displayName, 540, 1137, `bold ${nameFontSize}px Georgia, serif`, '#f2faff');
  centered(ctx, `REGISTRO ${registration}`, 540, 1208, '21px monospace', '#a4bfd5');
  centered(ctx, 'PERFIL IDENTIFICADO', 540, 1292, '25px monospace', '#acd2e8');
  const titleFontSize = profile.name.length > 12 ? 72 : 90;
  centered(ctx, profile.name.toLocaleUpperCase('pt-BR'), 540, 1394, `bold ${titleFontSize}px Georgia, serif`, '#d7efff');
  centered(ctx, profile.keywords.join('  ·  '), 540, 1460, '24px Georgia, serif', '#c3dce9');
  roundedRect(ctx, 180, 1507, 720, 83, 14, 'rgba(122,181,212,.14)', 'rgba(165,222,245,.3)');
  centered(ctx, `CLASSIFICAÇÃO: ${profile.risk}`, 540, 1559, 'bold 27px monospace', '#d9f5ff');
  drawWrapped(ctx, `“${profile.tagline}”`, 540, 1661, 750, 46, 'italic 36px Georgia, serif', '#f4fbff');
  ctx.beginPath(); ctx.moveTo(260, 1770); ctx.lineTo(820, 1770); ctx.stroke();
  centered(ctx, 'CLUBE DAS BADDIES  ✦  ARQUIVO 264', 540, 1810, '21px monospace', '#a8c9dd');
  return await toBlob(canvas);
}

export async function exportStory(data) {
  const blob = await createStory(data);
  const filename = `arquivo-264-${data.profileId}.png`;
  const file = new File([blob], filename, { type: 'image/png' });

  // On supported mobile devices, Share Sheet lets users save to Photos or share to Stories.
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Meu resultado — Arquivo 264' });
      return 'Card compartilhado ou salvo pelo dispositivo.';
    } catch (error) {
      if (error.name === 'AbortError') return 'Compartilhamento cancelado.';
      // Fallback to download if the native sheet fails.
    }
  }

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  return 'Card gerado em PNG (1080 × 1920). Confira seus downloads.';
}
