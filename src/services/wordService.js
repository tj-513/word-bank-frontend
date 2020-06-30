import api from '../config/api';
import get from 'lodash/get';

export const addWord = async (word, definition) => {
    try{
        const response = await api.post('/words', {word,definition});
        console.log('thing');
        if(!response.data){
            return {error: true, message:'no data received'};
        }
        return response.data;
    }catch(e){
        return {error:true, message: e}
    }
};


export const getAllWords = async () => {
    try{
        const response = await api.get('/words/all');
        if(!response.data){
            return {error: true, message:'no data received'};
        }
        return response.data;
    }catch(e){
        return {error:true, message: get(e, 'response.data', 'an error occurred')}
    }
};

