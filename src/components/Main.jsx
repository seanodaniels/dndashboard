import React, {Component} from 'react';
import Home from './Home.jsx';
import MonsterMain from './Monsters/MonsterMain.jsx';
import SpellsMain from './Spells/SpellsMain.jsx';
import Nav from './Nav.jsx';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  completeItem = (url) => {
    this.setState({monsterUrl: url});
  }

  render() {
    // DnDashboard
    return (<Router>
      <div id="DnDashboard">
        <header className="App-header">
          <h1>
            <span className="dnd-header">D&amp;D</span>ashboard</h1>
          <p>A Dungeons &amp; Dragons Online Tool</p>
        </header>

        <Nav/>

        <div id="content-wrapper">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/monsters" component={MonsterMain}/>
            <Route path="/spells" component={SpellsMain}/>
          </Switch>
          {/* <MonsterMain /> */}

        </div>
      </div>
    </Router>)
  }
}

export default Main;
