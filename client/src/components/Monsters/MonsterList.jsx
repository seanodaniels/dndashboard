import React, { Component } from "react";
import { connect } from "react-redux";
import {
  monstersFetchData,
  singleMonsterFetchData
} from "../../actions/index.js";

var _ = require("lodash");

const mapStateToProps = state => {
  return {
    monsters: state.monsters,
    monstersIsFetching: state.monstersIsFetching,
    monstersFetchingError: state.monstersFetchingError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(monstersFetchData(url)),
    singleFetchData: url => dispatch(singleMonsterFetchData(url))
  };
};

class MonsterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    // Go get all the monsters from API, chunk 'em in state.monsters.
    // Execution handled in the action.
    this.props.fetchData("http://www.dnd5eapi.co/api/monsters/");
  }

  handlerChoose(url) {
    this.props.singleFetchData(url);
  }

  render() {
    if (this.props.monstersFetchingError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.monstersIsFetching) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <h2>Monsters</h2>

        <input className="list-filter" placeholder="search" value={this.state.query || ''} onChange={ (event) => { this.setState({ query: event.target.value})}} />
        <ul className="nav">
          {
            this.props.monsters
            .filter(
              (monster) => _.toLower(monster.name)
              .includes(_.toLower(this.state.query || ''))
            )
            .map((el, index) => (
              <li className="list-group-item" key={index}>
                <a onClick={e => this.handlerChoose(el.url)}>{el.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);
