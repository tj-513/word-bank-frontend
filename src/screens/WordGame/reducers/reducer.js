import * as actionTypes from '../actions/actionTypes';

const wordGameReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_GAME_DATA:
      return { ...state, gameData: payload.gameData };
    case actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING:
      return { ...state, isInitialDataLoading: payload.isInitialDataLoading };
    case actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING_ERROR:
      return {
        ...state,
        isInitialDataLoadingError: payload.isInitialDataLoadingError,
      };
    case actionTypes.SET_CURRENT_STAGE:
      return { ...state, currentStage: payload.currentStage };
    case actionTypes.SET_CURRENT_INDEX:
      return { ...state, currentIndex: payload.currentIndex };
    case actionTypes.SET_RESULT:
      return { ...state, result: payload.result };
    case actionTypes.SET_IS_SENDING_RESULT:
      return { ...state, isSendingResult: payload.isSendingResult };
    case actionTypes.SET_IS_SENDING_RESULT_SUCCESS:
      return { ...state, isSendingResultSuccess: payload.isSendingResultSuccess };
    default:
      return state;
  }
};

export default wordGameReducer;
