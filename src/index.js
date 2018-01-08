import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';

import './App.css';

// Components
import App from './components/App.jsx';
import Spells from './components/Spells/Spells.jsx';
import Monsters from './components/Monsters/Monsters.jsx';

// React-Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Monsters}></IndexRoute>
        <Route component={Monsters} />
        <Route component={Spells} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
