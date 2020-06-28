import * as actionTypes from '../actions/actionTypes';

const homeReducer= (state = {}, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_CURRENT_DEFINITIONS:
            return {...state, currentDefinitions: payload.currentDefinitions};
        case actionTypes.SET_IS_DEFINITION_INPUT_FORM_LOADING:
            return {...state, isDefinitionInputFormLoading: payload.isDefinitionInputFormLoading};
        
        default:
            return state;
    }
}

export default homeReducer;