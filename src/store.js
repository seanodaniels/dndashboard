import { createStore } from 'redux';

// import root reducer
import reducer from './reducers/index'

// Import data
import monsterList from './data/monsterList';

// Create object for the default data
const defaultState = {
  monsterList,
};

const store = createStore(reducer, defaultState);

export default store;
