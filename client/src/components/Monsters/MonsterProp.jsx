import React, { Component } from 'react';

class MonsterProp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uniqueKey: '',
    }

  }
  componentWillMount() {
    // check for Unique Key property and set uniqueKey accordingly
    if (this.props.propKey === undefined) {
      this.setState({uniqueKey: 'default'});
    } else {
      this.setState({uniqueKey: this.props.propKey});
    }
  }

  render() {

    if (this.props.value) {

      switch (this.props.type) {

        case "a":
          // console.log(this.props.linkTarget);
          if (this.props.linkTarget === undefined) {
            return (
              <a className={`monster-${this.state.uniqueKey}`} href={`${this.props.value}`}>
                {this.props.name}</a>
            )
          } else {
            return (
              <a className={`monster-${this.state.uniqueKey}`} target={`${this.props.linkTarget}`} href={`${this.props.value}`}>
                {this.props.name}</a>
            )
          }

        case "tr":
          return (
            <tr className={`monster-${this.state.uniqueKey}`}>
              <td className="key">{this.props.name}</td>
              <td className="value">{this.props.value}</td>
            </tr>
          )

        case "abilityBonus":
          let abilityValue = this.props.value;
          let abilitySign = (abilityValue < 0) ? "-" : "+";
          return (
            <span className="ability-bonus">({abilitySign}{Math.floor((abilityValue - 10)/2)})</span>
          )

        default:
        return (
          <div className={`monster-${this.state.uniqueKey}`}>
            <span className="key">{this.props.name}</span>
            <span className="value">{this.props.value}</span>
          </div>
        )

      }
    }

    else return (null);
  }
}

export default MonsterProp;
