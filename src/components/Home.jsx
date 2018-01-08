import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: "Welcome to D&Dashboard!",
    }

  }


  render() {

    // DnDashboard
    return (
      <div id="Home">
        <p>Home Landing Page</p>
      </div>
    )
  }
}
export default Home;
