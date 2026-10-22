import ScreenFrame from '../ui/ScreenFrame.jsx';
import ActionButton from '../ui/ActionButton.jsx';
import { PROFILES } from '../../data/profiles.js';

export default function DossierScreen({ name, registration, profileId, onReveal, onDownload, saving, notice }) {
  const profile = PROFILES[profileId];
  return (
    <ScreenFrame screenCode="DOSSIÊ EMITIDO" step="ETAPA 04 / 04" className="inner-screen dossier-screen">
      <div className="section-label"><span className="signal-dot" /> ANÁLISE CONCLUÍDA</div>
      <div className="dossier-sheet">
        <div className="dossier-head"><div>O RESTABELECIMENTO<br /><strong>ARQUIVO 264</strong></div><span className="stamp">CONFIDENCIAL</span></div>
        <div className="dossier-divider" />
        <p className="dossier-overline">RELATÓRIO COMPORTAMENTAL // {registration}</p>
        <div className="dossier-name"><span>SUJEITO IDENTIFICADO</span><strong>{name}</strong></div>
        <div className="dossier-profile">
          <span>CLASSIFICAÇÃO DE IDENTIDADE</span>
          <div className="dossier-profile-title"><span className="dossier-symbol">{profile.symbol}</span><h1>{profile.name}</h1></div>
          <p>{profile.keywords.join(' · ')}</p>
        </div>
        <div className="risk-label"><span>◈ ALERTA DO SISTEMA</span><strong>{profile.alert}</strong><small>NÍVEL DE RISCO: {profile.risk}</small></div>
        <section className="dossier-analysis"><h2>ANÁLISE DO SUJEITO</h2><p>{profile.summary}</p></section>
        <div className="dossier-traits"><div><span>FORÇA PREDOMINANTE</span><strong>{profile.strength}</strong></div><div><span>PONTO DE ATENÇÃO</span><strong>{profile.caution}</strong></div></div>
        <div className="dossier-bottom"><span>{profile.fileCode} // CLASSIFICADO</span><span>✧ BADDIES ✧</span></div>
      </div>
      <div className="dossier-actions">
        <ActionButton onClick={onReveal}>ENCERRAR ANÁLISE <span aria-hidden="true">↗</span></ActionButton>
        <button type="button" className="outline-button" disabled={saving} onClick={onDownload}>
          {saving ? 'PREPARANDO IMAGEM...' : '↓ SALVAR / COMPARTILHAR CARD'}
        </button>
        {notice && <p className="export-notice" role="status">{notice}</p>}
      </div>
    </ScreenFrame>
  );
}
