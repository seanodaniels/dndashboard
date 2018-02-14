import React, { Component } from 'react';

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
        {/* <ul id="nav-primary" className="nav clearfix">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/monsters">Monsters</Link></li>
          <li><Link to="/spells">Spells</Link></li>
        </ul> */}
      </nav>
    )
  }
}
export default Nav;
