import api from '../config/api';
import get from 'lodash/get';

export const addWord = async (word, definition, sampleSentence) => {
  try {
    const result = await api.post('/words', {
      word,
      definition,
      sampleSentence,
    });
    const data = get(result, 'data.response.data', null);
    if (!data) {
      return { error: true, message: 'no data received' };
    }
    return result.data.response;
  } catch (e) {
    return { error: true, message: e };
  }
};

export const getAllWords = async () => {
  try {
    const result = await api.get('/words/all');
    const data = get(result, 'data.response.data', null);
    if (!data) {
      return { error: true, message: 'no data received' };
    }
    return result.data.response;
  } catch (e) {
    return {
      error: true,
      message: get(e, 'response.data', 'an error occurred'),
    };
  }
};

export const getWords = async ({sortBy, sortOrder, page, pageSize}) => {
  try {
    const result = await api.get('/words', {sortBy, sortOrder, page, pageSize});
    const data = get(result, 'data.response.data', null);
    if (!data) {
      return { error: true, message: 'no data received' };
    }
    return result.data.response;
  } catch (e) {
    return {
      error: true,
      message: get(e, 'response.data', 'an error occurred'),
    };
  }
}
