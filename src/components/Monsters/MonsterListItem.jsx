import React, { Component } from "react";
import { connect } from "react-redux";
import { setMonsterUrl } from "../../actions/index";

const mapStateToProps = state => {
  return {
    monsterList: state.monsterList,
    chosenMonsterUrl: state.chosenMonsterUrl,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMonsterUrl: url => dispatch(setMonsterUrl(url)),
  };
};

class MonsterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thing: 'thing',
    };
  };

  handlerChoose(url) {
    // set chosenMonsterUrl via action
    console.log(url);
    this.props.setMonsterUrl(url);
  };

  render() {
    return (
      <ul className="nav">
        {this.props.monsterList.map((el, index) => (
          <li className="list-group-item" key={index}>
            <a onClick={(e) => (this.handlerChoose(el.url))}>{el.name}</a>
          </li>
        ))}
      </ul>
    )
  }
}

const MonsterListItem = connect(mapStateToProps, mapDispatchToProps)(MonsterList);

export default MonsterListItem;
