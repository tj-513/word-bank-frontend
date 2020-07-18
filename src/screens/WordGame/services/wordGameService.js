import api from '../../../config/api';
import get from 'lodash/get';

export const getWordsForGame = async () => {
  try {
    const result = await api.get('/wordGame/questions');
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

export const sendGameResultsToServer = async (resultObj) => {
  try {
    const result = await api.patch('/wordGame/results', resultObj);
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



