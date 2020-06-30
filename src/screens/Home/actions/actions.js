import get from 'lodash/get';
import { ToastAndroid } from 'react-native';
import {
  SET_CURRENT_DEFINITIONS,
  SET_IS_DEFINITION_INPUT_FORM_LOADING,
} from './actionTypes';

import * as wordServices from '../../../services/wordService';

export const setCurrentDefinitions = (currentDefinitions) => ({
  type: SET_CURRENT_DEFINITIONS,
  payload: {
    currentDefinitions,
  },
});

export function onSubmitDefinition(word, definition, sampleSentence) {
  return async (dispatch, getState) => {
    const currentDefinitions = get(getState(), 'home.currentDefinitions', []);
    dispatch(setIsDefinitionInputFormLoading(true));

    const response = await wordServices.addWord(word, definition, sampleSentence);
    // const response = {}
    if (response.error) {
      ToastAndroid.show('Adding word failed, please try again', 500);
      dispatch(setIsDefinitionInputFormLoading(false));
      return;
    }

    dispatch(
      setCurrentDefinitions([response.data, ...currentDefinitions])
    );
    dispatch(setIsDefinitionInputFormLoading(false));
  };
}

export const setIsDefinitionInputFormLoading = (
  isDefinitionInputFormLoading
) => ({
  type: SET_IS_DEFINITION_INPUT_FORM_LOADING,
  payload: {
    isDefinitionInputFormLoading,
  },
});
