import React, { Component } from 'react';
import { Link } from 'react-router';
import MonsterList from './Monsters/MonsterList.jsx';

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



        {/* <Nav/> */}

        <div id="content-wrapper">

          {/* {JSON.stringify(this.props.monsterList)} */}
          {React.cloneElement(this.props.children, this.props)}
          

        </div>
      </div>
    )
  }
}
export default Main;
