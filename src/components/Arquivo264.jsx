'use client';

import { useEffect, useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen.jsx';
import IdentityScreen from './screens/IdentityScreen.jsx';
import QuestionScreen from './screens/QuestionScreen.jsx';
import ProcessingScreen from './screens/ProcessingScreen.jsx';
import DossierScreen from './screens/DossierScreen.jsx';
import TransmissionScreen from './screens/TransmissionScreen.jsx';
import { QUESTIONS } from '../data/questions.js';
import { calculateResult } from '../lib/scoring.js';
import { generateRegistration } from '../lib/identity.js';
import { exportStory } from '../lib/storyCanvas.js';

export default function Arquivo264() {
  const [screen, setScreen] = useState('welcome');
  const [name, setName] = useState('');
  const [registration, setRegistration] = useState('');
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(null);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [screen, index]);

  useEffect(() => {
    if (screen !== 'processing') return;
    const timeout = setTimeout(() => setScreen('dossier'), 3700);
    return () => clearTimeout(timeout);
  }, [screen]);

  function identify(participantName) {
    setName(participantName);
    setRegistration(generateRegistration());
    setScreen('question');
  }

  function choose(optionIndex) {
    setAnswers((previous) => previous.map((value, i) => i === index ? optionIndex : value));
  }

  function nextQuestion() {
    if (answers[index] === null) return;
    if (index < QUESTIONS.length - 1) {
      setIndex((previous) => previous + 1);
      return;
    }
    const calculated = calculateResult(answers);
    setResult(calculated);
    setScreen('processing');
  }

  function previousQuestion() {
    if (index === 0) setScreen('identity');
    else setIndex((previous) => previous - 1);
  }

  function restart() {
    setScreen('welcome');
    setName('');
    setRegistration('');
    setAnswers(Array(QUESTIONS.length).fill(null));
    setIndex(0);
    setResult(null);
    setSaving(false);
    setNotice('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function saveStory() {
    if (!result || saving) return;
    setSaving(true);
    setNotice('');
    try {
      const message = await exportStory({ name, registration, profileId: result.winnerId });
      setNotice(message);
    } catch (error) {
      console.error('Não foi possível exportar o card:', error);
      setNotice('Não foi possível salvar a imagem. Tente novamente neste navegador.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="app-ambient">
      <div className="floating-mist mist-left" aria-hidden="true" />
      <div className="floating-mist mist-right" aria-hidden="true" />
      <div className="glass-etch glass-etch--left" aria-hidden="true" />
      <div className="glass-etch glass-etch--right" aria-hidden="true" />
      <div className="app-container">
        {screen === 'welcome' && <WelcomeScreen onStart={() => setScreen('identity')} />}
        {screen === 'identity' && <IdentityScreen onConfirm={identify} onBack={() => setScreen('welcome')} />}
        {screen === 'question' && <QuestionScreen index={index} selected={answers[index]}
          onSelect={choose} onNext={nextQuestion} onBack={previousQuestion} registration={registration} />}
        {screen === 'processing' && <ProcessingScreen />}
        {screen === 'dossier' && result && <DossierScreen name={name} registration={registration}
          profileId={result.winnerId} onReveal={() => { setNotice(''); setScreen('transmission'); }}
          onDownload={saveStory} saving={saving} notice={notice} />}
        {screen === 'transmission' && result && <TransmissionScreen name={name} profileId={result.winnerId}
          onDownload={saveStory} onDossier={() => { setNotice(''); setScreen('dossier'); }} onRestart={restart}
          saving={saving} notice={notice} />}
      </div>
      <div className="ambient-caption" aria-hidden="true">PALAVRAS TAMBÉM PODEM QUEBRAR <span>✧</span> SISTEMA // 264</div>
    </div>
  );
}
