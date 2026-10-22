import { QUESTIONS } from '../../data/questions.js';
import ActionButton from '../ui/ActionButton.jsx';
import ScreenFrame from '../ui/ScreenFrame.jsx';

const ABCD = ['A', 'B', 'C', 'D'];
export default function QuestionScreen({ index, selected, onSelect, onNext, onBack, registration }) {
  const question = QUESTIONS[index];
  const isLast = index === QUESTIONS.length - 1;
  return (
    <ScreenFrame screenCode="AVALIAÇÃO ATIVA" step="ETAPA 02 / 04" className="inner-screen question-screen">
      <div className="question-heading">
        <span className="section-label"><span className="signal-dot" /> AVALIAÇÃO COMPORTAMENTAL</span>
        <span className="index-label">{String(index + 1).padStart(2, '0')} <span>/ 08</span></span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Progresso da avaliação" aria-valuenow={index + 1} aria-valuemin={1} aria-valuemax={8}>
        <span style={{ width: `${((index + 1) / 8) * 100}%` }} />
      </div>
      {isLast && <div className="final-warning"><span>✧</span> O SISTEMA ACREDITA QUE JÁ CONHECE VOCÊ.<br /> RESTA APENAS UMA PERGUNTA.</div>}
      <div className="question-meta"><span>REGISTRO {registration}</span><span>{question.tag}</span></div>
      <h1 className="question-title">{question.text}</h1>
      <fieldset className="choice-list">
        <legend className="sr-only">Escolha uma alternativa</legend>
        {question.options.map((option, optionIndex) => (
          <label className={`choice ${selected === optionIndex ? 'choice--selected' : ''}`} key={optionIndex}>
            <input type="radio" name={`question-${question.id}`} value={optionIndex}
              checked={selected === optionIndex} onChange={() => onSelect(optionIndex)} />
            <span className="choice-letter">{ABCD[optionIndex]}</span>
            <span className="choice-text">{option.text}</span>
            <span className="choice-mark" aria-hidden="true">{selected === optionIndex ? '✧' : '↗'}</span>
          </label>
        ))}
      </fieldset>
      <div className="question-controls">
        <button type="button" onClick={onBack} className="text-link">← ANTERIOR</button>
        <ActionButton onClick={onNext} disabled={selected === null} className="question-next">
          {isLast ? 'ENCERRAR AVALIAÇÃO' : 'PRÓXIMA PERGUNTA'} <span aria-hidden="true">❯</span>
        </ActionButton>
      </div>
      <p className="question-note">Não existem respostas certas ou erradas. Apenas escolhas.</p>
    </ScreenFrame>
  );
}
