import actionCreator from '../../../utils/actionCreator';
import {
    SET_CURRENT_DEFINITIONS, ON_SUBMIT_DEFINITION,
} from './actionTypes';

const homeActionCreator = actionCreator('home');

export default {
    setCurrentDefinitions: homeActionCreator(SET_CURRENT_DEFINITIONS, (currentDefinitions)=> ({currentDefinitions})),
    onSubmitDefinition: homeActionCreator(ON_SUBMIT_DEFINITION, (word, definition) => ({word, definition})),
    setIsDefinitionInputFormLoading: homeActionCreator(ON_SUBMIT_DEFINITION, (isDefinitionInputFormLoading) => ({isDefinitionInputFormLoading})),
}