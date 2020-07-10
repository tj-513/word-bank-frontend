import * as actionTypes from '../actions/actionTypes';

const wordCollectionReducer = (state = {}, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_IS_WORDS_LOADING:
            return {...state, isWordsLoading: payload.isWordsLoading};
        case actionTypes.SET_IS_WORDS_LOADING_ERROR:
            return {...state, isWordsLoadingError: payload.isWordsLoadingError};
        case actionTypes.SET_WORDS:
            return {...state, words: payload.words};
        default:
            return state;
    }
}

export default wordCollectionReducer;