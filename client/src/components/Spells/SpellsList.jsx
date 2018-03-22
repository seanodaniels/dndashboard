import React, { Component } from "react";
import { connect } from "react-redux";
import { spellsFetchData } from '../../actions/index.js';

const mapStateToProps = (state) => {
  return {
    spells: state.spells,
    spellsIsFetching: state.spellsIsFetching,
    spellsFetchingError: state.spellsFetchingError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(spellsFetchData(url))
  };
};

class MonsterList extends Component {
  constructor(props) {
    super(props);
  };

  componentDidMount() {
    this.props.fetchData('/spells');
  }

  handlerChoose(url) {
    // this.props.singleFetchData(url);
  };

  render() {

        if (this.props.spellsFetchingError) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.spellsIsFetching) {
            return <p>Loading…</p>;
        }

        return (

            <ul className="nav">
                {/* {this.props.spells.map((item) => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))} */}
                {this.props.spells.map((el, index) => (
                  <li className="list-group-item" key={index}>
                    <a onClick={(e) => (this.handlerChoose(el.url))}>{el.name}</a>
                  </li>
                ))}
            </ul>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(MonsterList)
