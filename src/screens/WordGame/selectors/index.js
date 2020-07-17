import { createSelector } from 'reselect';

const getWords = (state) => state.game.gameData;
const getCurrentIndex = (state) => state.game.currentIndex;

export const getWordsForQuestionIndex = createSelector( getWords, getCurrentIndex, (words, index)=>{
    return words[index];
});