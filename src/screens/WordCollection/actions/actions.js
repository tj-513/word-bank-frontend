import get from 'lodash/get';
import * as actionTypes from './actionTypes';
import * as wordService from '../../../services/wordService';

// sync actions
const setIsFetchWordsLoading = (isWordsLoading) => ({
  type: actionTypes.SET_IS_WORDS_LOADING,
  payload: { isWordsLoading },
});

const setIsFetchWordsLoadingError = (isWordsLoadingError) => ({
    type: actionTypes.SET_IS_WORDS_LOADING_ERROR,
    payload: { isWordsLoadingError },
  });

const setWords = (words) => ({
    type: actionTypes.SET_WORDS,
    payload: { words },
});


// async actions
export function fetchWords({
  sortBy = 'dateCreated',
  sortOrder = 'desc',
  page = 1,
  pageSize = 20,
}) {
  return async (dispatch, getState) => {
    dispatch(setIsFetchWordsLoading(true));
    dispatch(setIsFetchWordsLoadingError(false));
    dispatch(setWords([]));
    const currentWords = get(getState(), 'wordCollection.words', []);

    // const response = await wordService.getWords({
    //   sortBy,
    //   sortOrder,
    //   page,
    //   pageSize,
    // });

    const response = await wordService.getAllWords();
    if (response.error) {
      ToastAndroid.show('Could not fetch words', 500);
      dispatch(setIsFetchWordsLoading(false));
      dispatch(setIsFetchWordsLoadingError(true));
      return;
    }
    dispatch(setWords([...currentWords, ...response.data]));
    dispatch(setIsFetchWordsLoading(false));
  };
}
