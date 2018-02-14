import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    chosenMonsterUrl: state.chosenMonsterUrl,
  };
};

class MonsterDisplayComp extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render () {
    return (
      <div id="MonsterDisplay">
        <p>MonsterDisplay.jsx</p>
        {this.props.setMonsterUrl}

        <h2>This Monster URL</h2>
        <p>{this.props.chosenMonsterUrl}</p>
        <h2>This Monster Object</h2>
        <p>{this.props.chosenMonster}</p>
      </div>
    )
  }
}

const MonsterDisplay = connect(mapStateToProps)(MonsterDisplayComp);

export default MonsterDisplay;
