import { createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers/index';
import thunk from 'redux-thunk';



// const store = function configureStore(initialState) {
//

// Add in support for Chrome Redux Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(combineReducers, initialState, composeEnhancers(applyMiddleware(thunk)));
}
