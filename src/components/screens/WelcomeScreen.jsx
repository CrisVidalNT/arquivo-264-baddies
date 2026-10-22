import BrandLogo from '../ui/BrandLogo.jsx';
import ActionButton from '../ui/ActionButton.jsx';

/**
 * Tela de abertura: a arte sem texto fica como plano de fundo.
 * Todo o texto e o botão são HTML reais, acessíveis e responsivos.
 */
export default function WelcomeScreen({ onStart }) {
  return (
    <section className="screen-frame welcome-screen" aria-label="Abertura do Arquivo 264">
      <div className="welcome-backdrop" aria-hidden="true" />
      <main className="welcome-layout">
        <header className="welcome-brand">
          <BrandLogo size="large" />
          <span className="welcome-presents"><i />apresenta<i /></span>
        </header>

        <div className="welcome-titling">
          <h1 className="cover-title">ARQUIVO <span>264</span></h1>
        </div>

        <div className="welcome-eye-space" aria-hidden="true" />

        <div className="welcome-closing">
          <p className="welcome-quote">Seus pensamentos<br />não estão seguros aqui.</p>
          <div className="decor-rule" aria-hidden="true" />
          <p className="welcome-description">O sistema está pronto para<br />analisar sua identidade.</p>
          <ActionButton onClick={onStart} className="welcome-action">
            INICIAR IDENTIFICAÇÃO <span aria-hidden="true">❯</span>
          </ActionButton>
          <p className="welcome-signature">Registro confidencial <span>//</span> Baddies</p>
        </div>
      </main>
    </section>
  );
}
