'use client';
import { useState } from 'react';
import ActionButton from '../ui/ActionButton.jsx';
import ScreenFrame from '../ui/ScreenFrame.jsx';
import { sanitizeName } from '../../lib/identity.js';

export default function IdentityScreen({ onConfirm, onBack }) {
  const [name, setName] = useState('');
  const cleaned = sanitizeName(name);
  function submit(event) {
    event.preventDefault();
    if (cleaned) onConfirm(cleaned);
  }
  return (
    <ScreenFrame screenCode="IDENTIFICAÇÃO" step="ETAPA 01 / 04" className="inner-screen">
      <div className="section-label"><span className="signal-dot" /> FASE 01 — IDENTIFICAÇÃO</div>
      <div className="identity-emblem" aria-hidden="true"><span className="fingerprint-symbol">◉</span><span className="identity-ring" /></div>
      <h1 className="inner-title">Antes de começar,<br /><em>quem é você?</em></h1>
      <p className="inner-intro">Todo sujeito precisa de um registro. Informe como deseja ser identificada neste arquivo confidencial.</p>
      <form onSubmit={submit} className="identity-form">
        <label htmlFor="participant-name" className="field-label">NOME OU APELIDO DA PARTICIPANTE</label>
        <input id="participant-name" className="text-input" autoComplete="nickname"
          maxLength={32} value={name} onChange={(event) => setName(event.target.value)}
          placeholder="Digite seu nome..." required aria-describedby="name-help" />
        <p id="name-help" className="field-help">Você não precisa usar seu nome real. O registro existe apenas neste dispositivo.</p>
        <ActionButton type="submit" disabled={!cleaned}>GERAR REGISTRO <span aria-hidden="true">↗</span></ActionButton>
      </form>
      <button type="button" className="text-link" onClick={onBack}>← VOLTAR AO INÍCIO</button>
    </ScreenFrame>
  );
}
