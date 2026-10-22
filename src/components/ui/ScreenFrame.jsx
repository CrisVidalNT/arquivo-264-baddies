import BrandLogo from './BrandLogo.jsx';

export default function ScreenFrame({ children, screenCode, step, className = '' }) {
  return (
    <section className={`screen-frame ${className}`}>
      <header className="frame-header">
        <div className="brand-signature"><BrandLogo size="tiny" /><span>APRESENTA</span></div>
        <div className="frame-right"><span className="signal-dot" /><span>{screenCode}</span></div>
      </header>
      <div className="frame-rule" />
      <main className="frame-main">{children}</main>
      <footer className="frame-footer">
        <span>CLUBE DAS BADDIES <b>✦</b> ARQUIVO 264</span>
        <span>{step || 'ACESSO RESTRITO'}</span>
      </footer>
    </section>
  );
}
