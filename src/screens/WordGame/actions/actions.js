import * as actionTypes from './actionTypes';
import * as selectors from '../selectors';
import * as wordGameService from '../services/wordGameService';

//#region  store updates
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

const setCurrentIndex = (currentIndex) => ({
  type: actionTypes.SET_CURRENT_INDEX,
  payload: { currentIndex },
});

const setResult = (result) => ({
  type: actionTypes.SET_RESULT,
  payload: { result },
});

const setIsSendingResult = (isSendingResult) => ({
  type: actionTypes.SET_IS_SENDING_RESULT,
  payload: {isSendingResult}
});

const setIsSendingResultSuccess = (isSendingResultSuccess) => ({
  type: actionTypes.SET_IS_SENDING_RESULT_SUCCESS,
  payload: {isSendingResultSuccess}
});

//#endregion

//#region  handlers
export function onPressGameStart() {
  return async (dispatch) => {
    dispatch(setCurrentIndex(0));
    dispatch(setCurrentStage('IN_PROGRESS'));
  };
}

export function onPressOption(option) {
  return async (dispatch, getState) => {
    const { correct, _id } = selectors.getWordsForQuestionIndex(getState());
    const { currentIndex, result = [] } = getState().game;

    if (option === correct) {
      dispatch(setResult([...result, { _id, correct: true }]));
    } else {
      dispatch(setResult([...result, { _id, correct: false }]));
    }

    // received the answer of last question
    if(currentIndex === 9){
      dispatch(setCurrentStage('RESULT'));
      return;
    }
    dispatch(setCurrentIndex(currentIndex + 1));
  };
}

export function onPressRetry() {
  return (dispatch)=>{
    dispatch(setCurrentStage('LOADING'));
    dispatch(fetchInitialWordsForGame());
  }
}

//#endregion

//#region async network 
export function fetchInitialWordsForGame() {
  return async (dispatch) => {
    dispatch(setCurrentStage('LOADING'));
    dispatch(setIsInitialDataLoading(true));
    dispatch(setIsInitialDataLoadingError(false));
    
    //reset previous states
    dispatch(setGameData([]));
    dispatch(setResult([]));
    dispatch(setCurrentIndex(0));

    const response = await wordGameService.getWordsForGame();
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

export function sendGameResultToServer() {
  return async (dispatch, getState) => {
    dispatch(setIsSendingResult(true));
    const {result} = getState().game;
    const resultObj = {gameResult: result};
    const response = await wordGameService.sendGameResultsToServer(resultObj);

    dispatch(setIsSendingResult(false));

    if(response.error){
      dispatch(setIsSendingResultSuccess(false));
      return;
    }
    dispatch(setIsSendingResultSuccess(true));
  }
}

//#endregion 