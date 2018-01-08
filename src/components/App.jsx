import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Main from './Main.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      default: '',
    }
  }


  render() {
    return (

      <div></div>

    )
  }
}

function mapStateToProps(state) {
  return {
    monsterList: state.monsterList,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
