import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import monsterList from './monsterList';



const rootReducer = combineReducers({
  routing: routerReducer,
  monsterList,
});

export default rootReducer;
