import {combineReducers} from 'redux';
import homeReducer from '../screens/Home/reducers/reducer';
import wordCollectionReducer from '../screens/WordCollection/reducers/reducer';

const rootReducer = combineReducers({
    home: homeReducer,
    wordCollection: wordCollectionReducer,
});

export default rootReducer;
