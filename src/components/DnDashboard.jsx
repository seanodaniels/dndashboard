import React, {Component} from 'react';
import '../App.css';
import {IndexRoute, Route, Router, browserHistory} from 'react-router';
import Main from './Main.jsx';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Spells from './Spells/Spells.jsx';
import Monsters from './Monsters/Monsters.jsx';

const router = (
   <Router>
     <Route path="/" component={Main}>
     <IndexRoute component={Home} />
     <Route component={Monsters} />
     <Route component={Spells} />
   </Route>
   </Router>
 );



class DnDashboard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: "Welcome to D&Dashboard!"
    }

  }

  render() {

    // DnDashboard
    return (


    )
  }
}
export default DnDashboard;
