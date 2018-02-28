import React, { Component } from "react";
import { connect } from "react-redux";
import { monstersFetchData, singleMonsterFetchData } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return {
    monsters: state.monsters,
    monstersIsFetching: state.monstersIsFetching,
    monstersFetchingError: state.monstersFetchingError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(monstersFetchData(url)),
    singleFetchData: (url) => dispatch(singleMonsterFetchData(url))
  };
};

class MonsterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thing: 'thing',
      monstersList: [],
    };
  };

  componentDidMount() {
    this.props.fetchData('http://www.dnd5eapi.co/api/monsters/');
  }

  handlerChoose(url) {
    this.props.singleFetchData(url);
  };

  render() {

        if (this.props.monstersFetchingError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.monstersIsFetching) {
            return <p>Loading…</p>;
        }

        return (

            <ul className="nav">
                {/* {this.props.monsters.map((item) => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))} */}
                {this.props.monsters.map((el, index) => (
                  <li className="list-group-item" key={index}>
                    <a onClick={(e) => (this.handlerChoose(el.url))}>{el.name}</a>
                  </li>
                ))}
            </ul>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList)
