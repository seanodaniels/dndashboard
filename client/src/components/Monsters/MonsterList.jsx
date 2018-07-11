import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
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

  componentWillMount() {
    // Go get all the monsters from API, chunk 'em in state.monsters.
    // Execution handled in the action.
    this.props.fetchData("http://www.dnd5eapi.co/api/monsters/");
  }

  componentWillReceiveProps(nextProps) {
    // If we have landed here from a user designated URL,
    // then pull the appropriate monster and display it.
    if (this.props.match.path === '/monsters/:id') {
        if (this.props.monsters.length <= 0 && nextProps.monsters.length > 0) {
          let foundMonsterName = nextProps.monsters.find(monster => { return monster.name === this.props.match.params.id});
          if (foundMonsterName) {
            this.props.singleFetchData(foundMonsterName.url);
          } else {
            // 
          }
        }
    }
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
                {/* <a onClick={e => this.handlerChoose(el.url)}>{el.name}</a> */}
                <Link onClick={e => this.handlerChoose(el.url)} to={`/monsters/${el.name}`}>{el.name}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList);
