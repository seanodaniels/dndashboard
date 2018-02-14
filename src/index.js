import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './components/Main.jsx';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <Main />
    {/* <App /> */}
  </Provider>, document.getElementById('root'));
