import * as actionTypes from '../actions/actionTypes';

const wordGameReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_GAME_DATA:
      return { ...state, gameData: payload.gameData };
    case actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING:
      return { ...state, isInitialDataLoading: payload.isInitialDataLoading };
    case actionTypes.SET_IS_INITIAL_GAME_DATA_LOADING_ERROR:
      return { ...state, isInitialDataLoadingError: payload.isInitialDataLoadingError };
    case actionTypes.SET_CURRENT_STAGE:
      return { ...state, currentStage: payload.currentStage };
  
      default:
      return state;
  }
};

export default wordGameReducer;
