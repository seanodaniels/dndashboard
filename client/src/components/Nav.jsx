import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

  constructor(props) {

    super(props);

    this.state = {
      currentSelection: '',
    }
  }

  render() {
    return (
      <nav id="Nav" className="clearfix">
        <ul id="nav-primary" className="nav clearfix">
          <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/monsters" activeClassName="active">Monsters</NavLink></li>
          <li><NavLink to="/spells" activeClassName="active">Spells</NavLink></li>
        </ul>
      </nav>
    )
  }
}
export default Nav;
