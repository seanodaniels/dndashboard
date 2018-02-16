import React, { Component } from 'react';
import MonsterList from './Monsters/MonsterList.jsx';
import MonsterDisplay from './Monsters/MonsterDisplay.jsx';
import Nav from './Nav.jsx'

class Main extends Component {

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
    return (
      <div id="DnDashboard">
        <header className="App-header">
          <h1>
            <span className="dnd-header">D&amp;D</span>ashboard</h1>
          <p>A Dungeons &amp; Dragons Online Tool</p>
        </header>

        <Nav/>

        <div id="content-wrapper">

          <div id="Monsters">
            <ul id="nav-secondary" className="nav clearfix">
              <li>Secondary Nav Placeholder</li>
            </ul>

            <div className="monsters-list">
                <MonsterList />
            </div>
            <div className="monster-display">
              <MonsterDisplay setMonsterUrl={this.state.monsterUrl} />
            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Main;
