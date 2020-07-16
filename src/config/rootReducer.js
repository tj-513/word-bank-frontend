import {combineReducers} from 'redux';
import homeReducer from '../screens/Home/reducers/reducer';
import wordCollectionReducer from '../screens/WordCollection/reducers/reducer';
import wordGameReducer from '../screens/WordGame/reducers/reducer';

const rootReducer = combineReducers({
    home: homeReducer,
    wordCollection: wordCollectionReducer,
    game: wordGameReducer,
});

export default rootReducer;
