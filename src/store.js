import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import routerReducer from './reducers/index'

// Import data
import monsterList from './data/monsterList';

// Create object for the default data
const defaultState = {
  monsterList, // es6 stuff
};




const store = createStore(routerReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
