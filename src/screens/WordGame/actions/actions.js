import get from 'lodash/get';
import {ToastAndroid} from 'react-native';
import * as actionTypes from './actionTypes';
import * as wordService from '../services/wordGameService';

// sync actions
const setIsInitialDataLoading = (isInitialDataLoading) => ({
  type: actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING,
  payload: { isInitialDataLoading },
});

const setIsInitialDataLoadingError = (isInitialDataLoadingError) => ({
  type: actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING_ERROR,
  payload: { isInitialDataLoadingError },
});

const setGameData = (gameData) => ({
  type: actionTypes.SET_GAME_DATA,
  payload: { gameData },
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// async actions
export function fetchInitialWordsForGame() {
  return async (dispatch) => {
    dispatch(setIsInitialDataLoading(true));
    dispatch(setIsInitialDataLoadingError(false));

    const response = await wordService.getWordsForGame();
    if (response.error) {
      dispatch(setIsInitialDataLoading(false));
      dispatch(setIsInitialDataLoadingError(true));
      return;
    }
    dispatch(setGameData(response.data));
    dispatch(setIsInitialDataLoading(false));
  };
}
// deleteWord
export function onDeleteWord({ _id }) {
  return async (dispatch, getState) => {
    dispatch(setIsFetchWordsLoading(true));

    const response = await wordService.deleteWord({_id});
    if (response.error) {
      ToastAndroid.show('Could not delete word', 500);
      dispatch(setIsFetchWordsLoading(false));
      return;
    }
    dispatch(fetchWords({}));
    dispatch(setIsFetchWordsLoading(false));
  };
}
