import { QUESTIONS } from '../data/questions.js';
import { PROFILE_IDS } from '../data/profiles.js';

/**
 * answers: array of indexes 0..3 in the same order as QUESTIONS.
 * One point per answer. Tie-breaker: the most recent choice among the tied profiles.
 */
export function calculateResult(answers) {
  if (!Array.isArray(answers) || answers.length !== QUESTIONS.length ||
    answers.some((value) => !Number.isInteger(value) || value < 0 || value > 3)) {
    throw new Error('A avaliação precisa das oito respostas válidas.');
  }

  const scores = Object.fromEntries(PROFILE_IDS.map((id) => [id, 0]));
  const choices = answers.map((index, i) => QUESTIONS[i].options[index].profileId);
  choices.forEach((id) => { scores[id] += 1; });

  const largest = Math.max(...Object.values(scores));
  const tied = PROFILE_IDS.filter((id) => scores[id] === largest);
  const winnerId = [...choices].reverse().find((id) => tied.includes(id));
  return { winnerId, scores, tied, isTie: tied.length > 1 };
}
