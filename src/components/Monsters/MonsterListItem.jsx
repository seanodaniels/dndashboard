import React, { Component } from 'react';

class MonsterListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      monsterList: {},
    }
  }

  render() {
    return (
      <div>
        {/* {this.props.monsterList.results.map((monster, index) => <div key={index}>{monster.name}</div>)} */}
        <li><a href={this.props.monster.url} target="_blank">{this.props.monster.name}</a></li>
      </div>
    )
  }
}
export default MonsterListItem;
