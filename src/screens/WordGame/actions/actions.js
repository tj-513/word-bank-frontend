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


const setCurrentStage = (currentStage) => ({
  type: actionTypes.SET_CURRENT_STAGE,
  payload: { currentStage },
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
    dispatch(setCurrentStage('START'));
  };
}

