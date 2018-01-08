import React, { Component } from 'react';
import { Link } from 'react-router';
import MonsterListItem from './Monsters/MonsterListItem.jsx';
import Nav from './Nav.jsx'

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: "Welcome to D&Dashboard!",
    }

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

          {/* {JSON.stringify(this.props.monsterList)} */}
          {/* {React.cloneElement(this.props.children, this.props)} */}

          <div id="Monsters">
            <ul id="nav-secondary" className="nav clearfix">
              <li>Main.jsx</li>
            </ul>

            <div className="monsters-list">
              <ul className="nav">
                {this.props.monsterList.results.map((monster, index) =>
                  <MonsterListItem {...this.props}
                    key={index}
                    index={index}
                    monster={monster}
                  />
                )}
              </ul>
            </div>
            <div className="monster-display">
              {/* <MonsterDisplay setMonsterUrl={this.state.monsterUrl} /> */}
            </div>



          </div>




        </div>
      </div>
    )
  }
}
export default Main;
