import ScreenFrame from '../ui/ScreenFrame.jsx';
import ActionButton from '../ui/ActionButton.jsx';
import { PROFILES } from '../../data/profiles.js';

export default function TransmissionScreen({ profileId, name, onDownload, onDossier, onRestart, saving, notice }) {
  const profile = PROFILES[profileId];
  return (
    <ScreenFrame screenCode="SINAL INVADIDO" step="TRANSMISSÃO INTERCEPTADA" className="inner-screen transmission-screen">
      <div className="transmission-box">
        <div className="transmission-alert"><span className="glitch-indicator">◉</span> CONEXÃO NÃO AUTORIZADA <span>/// 264</span></div>
        <h1 className="glitch-title" data-text="ACESSO INTERCEPTADO">ACESSO<br />INTERCEPTADO</h1>
        <div className="frequency-bars" aria-hidden="true">{Array.from({ length: 28 }, (_, i) => <span key={i} style={{ '--i': i, height: `${8 + (i * 23 % 32)}px` }} />)}</div>
        <p className="transmission-intro">{name}, eles acham que conhecem você.</p>
        <p className="transmission-intro">Mas o arquivo não conta toda a verdade.</p>
        <blockquote>“{profile.message}”</blockquote>
        <div className="transmission-last"><p>O arquivo foi encerrado.</p><strong>Sua história está<br />apenas começando.</strong></div>
        <div className="transmission-signoff">— MENSAGEM DE ORIGEM DESCONHECIDA —</div>
      </div>
      <div className="dossier-actions">
        <ActionButton onClick={onDownload} disabled={saving}>{saving ? 'PREPARANDO IMAGEM...' : '↓ SALVAR / COMPARTILHAR'}</ActionButton>
        <button type="button" className="outline-button" onClick={onDossier}>← VER MEU DOSSIÊ</button>
        <button type="button" className="text-link restart-link" onClick={onRestart}>REINICIAR EXPERIÊNCIA</button>
        {notice && <p className="export-notice" role="status">{notice}</p>}
      </div>
    </ScreenFrame>
  );
}
