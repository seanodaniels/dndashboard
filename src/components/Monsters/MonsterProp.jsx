import React, { Component } from 'react';

class MonsterProp extends Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (
      <div className={`monster-${this.props.name.toLowerCase()}`}>{this.props.value}</div>


    )
  }
}

export default MonsterProp;
