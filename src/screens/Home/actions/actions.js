import get from 'lodash/get';
import actionCreator from '../../../utils/actionCreator';
import {
    SET_CURRENT_DEFINITIONS, ON_SUBMIT_DEFINITION, SET_IS_DEFINITION_INPUT_FORM_LOADING,
} from './actionTypes';

const homeActionCreator = actionCreator('home');
const delay = ms => new Promise(res => setTimeout(res, ms));

export const setCurrentDefinitions = (currentDefinitions) => ({
    type: SET_CURRENT_DEFINITIONS,
    payload: {
        currentDefinitions
    }
});

export function onSubmitDefinition(word,definition){
    return async (dispatch, getState) =>{
        const currentDefinitions = get(getState(), 'home.currentDefinitions', []);
        dispatch(setIsDefinitionInputFormLoading(true));
        await delay(2000);
        dispatch(setCurrentDefinitions([{word,definition}, ...currentDefinitions]));
        dispatch(setIsDefinitionInputFormLoading(false));
    };
}

export const setIsDefinitionInputFormLoading = (isDefinitionInputFormLoading) =>({
    type: SET_IS_DEFINITION_INPUT_FORM_LOADING,
    payload: {
        isDefinitionInputFormLoading
    }
})
