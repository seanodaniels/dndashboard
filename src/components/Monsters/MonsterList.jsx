 import React, { Component } from 'react';

class MonsterList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monsterList: {},
    }
  }

  render() {
    return (
      <div>
        <h3>MonsterList.jsx</h3>
        {this.props.monsterList.results.map((monster, index) => <div key={index}>{monster.name}</div>)}
      </div>
    )
  }
}
export default MonsterList;
