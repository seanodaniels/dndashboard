import React, {Component} from 'react';
import MonsterList from './MonsterList.jsx';
import MonsterDisplay from './MonsterDisplay.jsx';

class MonsterMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  completeItem = (url) => {
    this.setState({
      monsterUrl: url,
    });
  }


  render() {
    // DnDashboard
    return (<div id="Monsters">
      <div className="monsters-list">
        <MonsterList/>
      </div>
      <div className="monster-display">
        <MonsterDisplay setMonsterUrl={this.state.monsterUrl}/>
      </div>
    </div>)
  }
}

export default MonsterMain;
