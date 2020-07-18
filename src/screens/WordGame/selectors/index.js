import { createSelector } from 'reselect';

const getWords = (state) => state.game.gameData;
const getCurrentIndex = (state) => state.game.currentIndex;
const getResult = (state) => state.game.result;

export const getGameWordCount = createSelector(getWords, (words)=>words.length);

export const getWordsForQuestionIndex = createSelector(
  getWords,
  getCurrentIndex,
  (words, index) => {
    return words[index];
  }
);

export const getResultForView = createSelector(
  getWords,
  getResult,
  (words, result) => {
    const correct = result.filter((result) => result.correct).length;
    const total = result.length;

    const wrong = [];
    for (let i = 0; i < total; i += 1) {
      if (!result[i].correct) {
          wrong.push(words[i]);
      }
    }

    return { correct, total, wrong };
  }
);
