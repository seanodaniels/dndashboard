import React, { Component } from 'react';
import { connect } from 'react-redux';
import MonsterProp from "./MonsterProp.jsx";

const mapStateToProps = (state) => {
  return {
    singleMonster: state.singleMonster,
    singleMonsterIsFetching: state.singleMonsterIsFetching,
    singleMonsterFetchingError: state.singleMonsterFetchingError,
  };
};

class MonsterDisplayComp extends Component {

  render () {

    if (this.props.singleMonsterFetchingError) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.singleMonsterIsFetching) {
        return <p>Loading…</p>;
    }

    return (
      <div id="MonsterDisplay">
        <p>MonsterDisplay.jsx</p>
        {this.props.setMonsterUrl}

        <h2>This Monster URL</h2>
        <p>{this.props.chosenMonsterUrl}</p>
        <h2>This Monster Object</h2>

        <MonsterProp name="Name" value={this.props.singleMonster.name} />

      </div>
    );

  }
}

const MonsterDisplay = connect(mapStateToProps)(MonsterDisplayComp);

export default MonsterDisplay;
