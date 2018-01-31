import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './App.css';

// Components
import Main from './components/Main.jsx';

// React-Router dependencies
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
