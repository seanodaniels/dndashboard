import React, { Component } from 'react';
import MonsterList from './MonsterList.jsx';
import MonsterDisplay from './MonsterDisplay.jsx';

class Monsters extends Component {

  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div id="Monsters">
        <ul id="nav-secondary" className="nav clearfix">
          <li>Monsters Page</li>
        </ul>

        <div className="monsters-list">
          {this.props.monsterList.results.map((monster, index) =>
            <div key={index}>{monster.name}</div>
          )}
          {/* <MonsterList monsterList={this.props.monsterList}/> */}
        </div>
        <div className="monster-display">
          {/* <MonsterDisplay setMonsterUrl={this.state.monsterUrl} /> */}
        </div>



      </div>
    )
  }
}
export default Monsters;
