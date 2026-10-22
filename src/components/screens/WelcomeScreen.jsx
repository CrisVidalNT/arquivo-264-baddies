import EyeArtwork from '../ui/EyeArtwork.jsx';
import ActionButton from '../ui/ActionButton.jsx';
import ScreenFrame from '../ui/ScreenFrame.jsx';

export default function WelcomeScreen({ onStart }) {
  return (
    <ScreenFrame screenCode="SISTEMA ONLINE" className="welcome-screen">
      <div className="welcome-topline">O RESTABELECIMENTO <span>///</span> ACESSO CONFIDENCIAL</div>
      <div className="welcome-content">
        <div className="file-number">DOCUMENTO Nº 264 <span>✦</span> SIGILO ABSOLUTO</div>
        <h1 className="display-title">ARQUIVO <strong>264</strong></h1>
        <p className="kicker crossed">Não há nada a esconder.</p>
        <EyeArtwork />
        <div className="welcome-message">
          <p className="welcome-quote">Seus pensamentos<br />não estão seguros aqui.</p>
          <div className="decor-rule" />
          <p className="welcome-description">O sistema está pronto para analisar sua identidade.<br />Oito escolhas. Um único dossiê.</p>
        </div>
        <ActionButton onClick={onStart} className="welcome-action">INICIAR IDENTIFICAÇÃO <span aria-hidden="true">↗</span></ActionButton>
        <p className="fineprint">NENHUMA RESPOSTA É CERTA. NENHUMA ESCOLHA PASSARÁ DESPERCEBIDA.</p>
      </div>
    </ScreenFrame>
  );
}
