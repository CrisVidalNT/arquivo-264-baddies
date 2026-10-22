import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateResult } from '../src/lib/scoring.js';
import { QUESTIONS } from '../src/data/questions.js';
import { PROFILE_IDS } from '../src/data/profiles.js';

function answersFor(profileId) {
  return QUESTIONS.map((q) => q.options.findIndex((opt) => opt.profileId === profileId));
}

test('existem exatamente oito questões, com quatro alternativas', () => {
  assert.equal(QUESTIONS.length, 8);
  for (const q of QUESTIONS) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options.map((opt) => opt.profileId)).size, 4);
  }
});

test('todas as classificações são alcançáveis', () => {
  for (const id of PROFILE_IDS) {
    const result = calculateResult(answersFor(id));
    assert.equal(result.winnerId, id);
    assert.equal(result.scores[id], 8);
  }
});

test('cada perfil aparece duas vezes em cada letra de alternativa', () => {
  for (let option = 0; option < 4; option++) {
    for (const id of PROFILE_IDS) {
      assert.equal(QUESTIONS.filter((q) => q.options[option].profileId === id).length, 2);
    }
  }
});

test('empate é resolvido pela última resposta entre os empatados', () => {
  // Escolher A em todas as perguntas dá 2 pontos a cada perfil.
  // A última escolha da questão 8 é Estrategista e deve vencer o empate.
  const result = calculateResult([0, 0, 0, 0, 0, 0, 0, 0]);
  assert.equal(result.isTie, true);
  assert.equal(result.tied.length, 4);
  assert.deepEqual(Object.values(result.scores), [2, 2, 2, 2]);
  assert.equal(result.winnerId, 'estrategista');
});

test('respostas incompletas ou inválidas são rejeitadas', () => {
  assert.throws(() => calculateResult([0]));
  assert.throws(() => calculateResult([0, 0, 0, 0, 0, 0, 0, 4]));
});


test('empate quádruplo selecionando somente A é resolvido a favor da Estrategista', () => {
  const result = calculateResult(Array(8).fill(0));
  assert.equal(result.isTie, true);
  assert.equal(result.tied.length, 4);
  assert.equal(result.winnerId, 'estrategista');
});
