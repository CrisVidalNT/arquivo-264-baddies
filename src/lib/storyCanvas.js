import { PROFILES } from '../data/profiles.js';

/**
 * Card de story (1080 × 1920), gerado no navegador.
 * Sem backend: nomes e respostas não são enviados a um servidor.
 */
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Não foi possível carregar ${url}`));
    image.src = url;
  });
}
function text(ctx, value, x, y, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.fillText(value, x, y);
}
function wrapped(ctx, value, x, y, maxWidth, lineHeight, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  const lines = [];
  let line = '';
  for (const word of value.split(/\s+/)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  lines.forEach((part, index) => ctx.fillText(part, x, y + index * lineHeight));
  return lines.length;
}
function drawCover(ctx, image, width, height) {
  const factor = Math.max(width / image.width, height / image.height);
  const cropW = width / factor;
  const cropH = height / factor;
  ctx.drawImage(image, (image.width - cropW)/2, (image.height - cropH)/2, cropW, cropH, 0, 0, width, height);
}
function toBlob(canvas) {
  return new Promise((resolve, reject) => canvas.toBlob(
    (blob) => blob ? resolve(blob) : reject(new Error('Exportação indisponível')), 'image/png'));
}
export async function createStory({ name, registration, profileId }) {
  const profile = PROFILES[profileId];
  if (!profile) throw new Error('Perfil não encontrado');
  const canvas = document.createElement('canvas');
  canvas.width = 1080; canvas.height = 1920;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas não disponível');
  const [background, logo] = await Promise.all([
    loadImage('/assets/capa-arquivo-264.webp'),
    loadImage('/assets/logo-baddies-azul.png'),
  ]);
  drawCover(ctx, background, 1080, 1920);
  const shadow = ctx.createLinearGradient(0, 0, 0, 1920);
  shadow.addColorStop(0, 'rgba(2,13,27,.32)');
  shadow.addColorStop(.26, 'rgba(3,17,35,.16)');
  shadow.addColorStop(.50, 'rgba(3,17,35,.12)');
  shadow.addColorStop(.62, 'rgba(2,13,27,.78)');
  shadow.addColorStop(1, 'rgba(2,12,24,.96)');
  ctx.fillStyle = shadow; ctx.fillRect(0, 0, 1080, 1920);

  // Marca e título no céu noturno: elementos separados, não embutidos na arte.
  ctx.drawImage(logo, 380, 76, 320, 127);
  text(ctx, 'a p r e s e n t a', 540, 241, '34px Georgia, serif', '#dbedfa');
  text(ctx, 'ARQUIVO', 540, 371, '95px Georgia, serif', '#e7f5ff');
  text(ctx, '2 6 4', 540, 483, '114px Georgia, serif', '#e7f5ff');

  // O olho da ilustração permanece visível entre o título e o dossiê.
  ctx.fillStyle = 'rgba(10,36,61,.59)';
  ctx.strokeStyle = 'rgba(218,243,255,.5)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(68, 1147, 944, 675, 20); ctx.fill(); ctx.stroke();
  ctx.strokeStyle = 'rgba(218,243,255,.3)';
  ctx.beginPath(); ctx.moveTo(170, 1241); ctx.lineTo(910, 1241); ctx.stroke();

  text(ctx, 'DOSSIÊ COMPORTAMENTAL CONFIDENCIAL', 540, 1209, '24px Georgia, serif', '#c5dfef');
  text(ctx, 'SUJEITO IDENTIFICADO', 540, 1300, '22px Georgia, serif', '#aacde3');
  const displayName = name.toLocaleUpperCase('pt-BR');
  let size = 53;
  while (size > 24) {
    ctx.font = `bold ${size}px Georgia, serif`;
    if (ctx.measureText(displayName).width < 840) break;
    size -= 2;
  }
  text(ctx, displayName, 540, 1370, `bold ${size}px Georgia, serif`, '#f3fbff');
  text(ctx, `REGISTRO ${registration}`, 540, 1425, '22px Georgia, serif', '#c2daeb');
  text(ctx, 'PERFIL IDENTIFICADO', 540, 1503, '22px Georgia, serif', '#b8d9ed');
  const titleSize = profile.name.length > 12 ? 65 : 77;
  text(ctx, profile.name.toLocaleUpperCase('pt-BR'), 540, 1583, `400 ${titleSize}px Georgia, serif`, '#f2faff');
  text(ctx, `CLASSIFICAÇÃO: ${profile.risk}`, 540, 1650, '25px Georgia, serif', '#c1e4f8');
  wrapped(ctx, `“${profile.tagline}”`, 540, 1720, 780, 46, 'italic 34px Georgia, serif', '#eef8ff');
  text(ctx, 'CLUBE DAS BADDIES  ✧  ARQUIVO 264', 540, 1868, '22px Georgia, serif', '#b9d4e7');
  return toBlob(canvas);
}

export async function exportStory(data) {
  const blob = await createStory(data);
  const filename = `arquivo-264-${data.profileId}.png`;
  const file = new File([blob], filename, { type: 'image/png' });
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], title: 'Meu resultado — Arquivo 264' });
      return 'Card compartilhado ou salvo pelo dispositivo.';
    } catch (error) {
      if (error.name === 'AbortError') return 'Compartilhamento cancelado.';
    }
  }
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  return 'Card gerado em PNG (1080 × 1920). Confira seus downloads.';
}
