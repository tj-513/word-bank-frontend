import get from 'lodash/get';
import { ToastAndroid } from 'react-native';
import {
  SET_CURRENT_DEFINITIONS,
  SET_IS_DEFINITION_INPUT_FORM_LOADING,
  SET_IS_RECENTLY_ADDED_WORDS_LOADING,
} from './actionTypes';

import * as wordServices from '../../../services/wordService';

export const setRecentlyAddedWords = (recentlyAddedWords) => ({
  type: SET_CURRENT_DEFINITIONS,
  payload: {
    recentlyAddedWords,
  },
});

export function onSubmitDefinition(word, definition, sampleSentence) {
  return async (dispatch, getState) => {
    const recentlyAddedWords = get(getState(), 'home.recentlyAddedWords', []);
    dispatch(setIsDefinitionInputFormLoading(true));

    const response = await wordServices.addWord(
      word,
      definition,
      sampleSentence
    );
    if (response.error) {
      ToastAndroid.show('Adding word failed, please try again', 500);
      dispatch(setIsDefinitionInputFormLoading(false));
      return;
    }

    dispatch(setRecentlyAddedWords([response.data, ...recentlyAddedWords]));
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

export const setIsRecentlyAddedWordsLoading = (
  isRecentlyAddedWordsLoading
) => ({
  type: SET_IS_RECENTLY_ADDED_WORDS_LOADING,
  payload: {
    isRecentlyAddedWordsLoading,
  },
});

export function fetchRecentlyAddedWords() {
  return async (dispatch, getState) => {
    dispatch(setIsRecentlyAddedWordsLoading(true));
    const response = await wordServices.getWords({
      sortBy: 'dateCreated',
      sortOrder: 'desc',
      page: 1,
      pageSize: 10,
    });
    if (response.error) {
      ToastAndroid.show('Could not fetch recent words', 500);
      dispatch(setIsRecentlyAddedWordsLoading(false));

      return;
    }
    dispatch(setRecentlyAddedWords(response.data));
    dispatch(setIsRecentlyAddedWordsLoading(false));
  };
}
