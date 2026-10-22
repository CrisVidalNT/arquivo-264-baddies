import ScreenFrame from '../ui/ScreenFrame.jsx';
import EyeArtwork from '../ui/EyeArtwork.jsx';

export default function ProcessingScreen() {
  return (
    <ScreenFrame screenCode="ANALISANDO" step="ETAPA 03 / 04" className="inner-screen processing-screen">
      <div className="section-label"><span className="signal-dot" /> PROCESSAMENTO EM ANDAMENTO</div>
      <div className="processing-center">
        <EyeArtwork small />
        <h1 className="inner-title">Analisando<br /><em>seu comportamento...</em></h1>
        <div className="processing-bar"><span /></div>
        <div className="processing-steps" aria-live="polite">
          <span>IDENTIFICANDO PADRÕES</span><span>PROCESSANDO ESCOLHAS</span><span>GERANDO DOSSIÊ</span>
        </div>
        <p className="processing-alert">ATENÇÃO: CARACTERÍSTICAS NÃO PREVISTAS PELO SISTEMA.</p>
      </div>
    </ScreenFrame>
  );
}
