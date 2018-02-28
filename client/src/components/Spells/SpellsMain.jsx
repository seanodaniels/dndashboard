import React, {Component} from 'react';

class SpellsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    // DnDashboard
    return (
      <div id="spells">
        <h2>Spells</h2>
        <p>{this.state.users.map((user)  => (
          <div key={user.id}>{user.username}</div>
        ))}</p>
      </div>
    )
  }
}

export default SpellsMain;
