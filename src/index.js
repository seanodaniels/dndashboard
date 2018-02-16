import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import store from './store';
import configureStore from './store';
import Main from './components/Main.jsx';
import './App.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'));


  // Imlement Thunk and call from the API!
