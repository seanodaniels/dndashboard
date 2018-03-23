import React, { Component } from "react";
import { connect } from "react-redux";
import { spellsFetchData } from "../../actions/index.js";

var _ = require('lodash');

const mapStateToProps = state => {
  return {
    spells: state.spells,
    spellsIsFetching: state.spellsIsFetching,
    spellsFetchingError: state.spellsFetchingError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpellsData: url => dispatch(spellsFetchData(url))
  };
};

class SpellsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: false
    }
  }

  componentDidMount() {
    this.props.fetchSpellsData("http://localhost:3001/api/spells");
  }

  render() {

    if (this.props.spellsFetchingError) {
        return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.spellsIsFetching) {
        return <p>Loading…</p>;
    }

    return (

      <div>
        <h2>Spells</h2>

        <input className="list-filter" placeholder="search" value={this.state.query || ''} onChange={ (event) => { this.setState( { query: event.target.value})}} />
        <ul className="nav">
          {
            this.props.spells
            .filter(
              (spell) => _.toLower(spell.Title)
              .includes(_.toLower(this.state.query || ''))
            )
            .map((spell, index) => (
            <li className="list-group-item" key={index}>
              <a href="">{spell.Title}</a>
            </li>
            ))
          }
        </ul>

      </div>

    );
  }
}

// export default SpellsMain;
export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);
