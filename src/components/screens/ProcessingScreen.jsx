import ScreenFrame from '../ui/ScreenFrame.jsx';

export default function ProcessingScreen() {
  return (
    <ScreenFrame screenCode="ANALISANDO" step="ETAPA 03 / 04" className="inner-screen processing-screen">
      <div className="section-label"><span className="signal-dot" /> PROCESSAMENTO EM ANDAMENTO</div>
      <div className="processing-center">
        <div className="processing-eye" role="img" aria-label="Uma íris azul sendo analisada"><span className="processing-scan" aria-hidden="true" /></div>
        <div className="processing-rule" aria-hidden="true" />
        <h1 className="inner-title">Analisando<br /><em>suas escolhas...</em></h1>
        <p className="processing-caption">Toda decisão deixa um rastro.</p>
        <div className="processing-bar" aria-label="Análise em andamento"><span /></div>
        <div className="processing-steps" aria-live="polite">
          <span>IDENTIFICANDO PADRÕES</span><span>PROCESSANDO ESCOLHAS</span><span>GERANDO DOSSIÊ</span>
        </div>
        <p className="processing-alert">ATENÇÃO: CARACTERÍSTICAS NÃO PREVISTAS PELO SISTEMA.</p>
      </div>
    </ScreenFrame>
  );
}
