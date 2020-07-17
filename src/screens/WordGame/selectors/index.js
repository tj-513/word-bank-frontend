import { createSelector } from 'reselect';

const getWords = (state) => state.game.gameData;
const getCurrentIndex = (state) => state.game.currentIndex;
const getResult = (state) => state.game.result;

export const getWordsForQuestionIndex = createSelector( getWords, getCurrentIndex, (words, index)=>{
    return words[index];
});

export const getResultForView = createSelector( getResult, (result)=>{

    const correct = result.filter(result=>result.correct).length;
    const total = result.length;
    return {correct, total};
});