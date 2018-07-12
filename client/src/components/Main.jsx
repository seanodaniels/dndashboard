import React, {Component} from 'react';
import Home from './Home.jsx';
import MonsterMain from './Monsters/MonsterMain.jsx';
import SpellsMain from './Spells/SpellsMain.jsx';
import Nav from './Nav.jsx';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  //
  // callApi = async() => {
  //   const response = await fetch('/');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) throw Error(body.message);
  //
  //   return body;
  // }

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
          {/* <p>Status: {this.state.response}</p> */}
        </header>

        <Nav/>

        <div id="content-wrapper">

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/monsters/:id" component={MonsterMain}/>
            <Route exact path="/monsters" component={MonsterMain}/>
            <Route exact path="/spells/:id" component={SpellsMain}/>
            <Route path="/spells" component={SpellsMain}/>
          </Switch>
          {/* <MonsterMain /> */}

        </div>
      </div>
    </Router>)
  }
}

export default Main;
