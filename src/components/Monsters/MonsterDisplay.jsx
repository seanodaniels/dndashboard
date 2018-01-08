import React, { Component } from 'react';

class MonsterDisplay extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monster: 'hi',
      monsterUrl: '',
    }
  }


    componentDidMount() {
      let recievedMonsterUrl = this.props.setMonsterUrl;
      fetch(recievedMonsterUrl)
      .then( results => {
        return results.json();
      }).then(monsterData => {
        // Do stuff. For right now, just display monster name.
        this.setState({monster: monsterData.name});
        // console.log("state(1)", this.state.monsters);
      })
    }

  render() {
    return (
      <div id="monster-display">
        [monster here: {this.state.monster}]
      </div>
    )
  }
}
export default MonsterDisplay;
