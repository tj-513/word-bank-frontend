import * as actionTypes from '../actions/actionTypes';

const homeReducer= (state = {}, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_CURRENT_DEFINITIONS:
            return {...state, recentlyAddedWords: payload.recentlyAddedWords};
        case actionTypes.SET_IS_DEFINITION_INPUT_FORM_LOADING:
            return {...state, isDefinitionInputFormLoading: payload.isDefinitionInputFormLoading};
        case actionTypes.SET_IS_RECENTLY_ADDED_WORDS_LOADING:
            return {...state, isRecentlyAddedWordsLoading: payload.isRecentlyAddedWordsLoading};
        default:
            return state;
    }
}

export default homeReducer;