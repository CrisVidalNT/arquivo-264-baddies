import BrandLogo from './BrandLogo.jsx';

export default function ScreenFrame({ children, screenCode, step, className = '' }) {
  return (
    <section className={`screen-frame ${className}`}>
      <header className="frame-header">
        <div className="brand-signature"><BrandLogo size="tiny" /><span>apresenta</span></div>
        <div className="frame-right"><span className="signal-dot" /><span>{screenCode}</span></div>
      </header>
      <div className="frame-rule" aria-hidden="true" />
      <main className="frame-main">{children}</main>
      <footer className="frame-footer">
        <span>REGISTRO CONFIDENCIAL <b>//</b> BADDIES</span>
        <span>{step || 'ACESSO RESTRITO'}</span>
      </footer>
    </section>
  );
}
