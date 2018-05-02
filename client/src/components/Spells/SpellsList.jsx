import React, { Component } from "react";
import { connect } from "react-redux";
import { spellsFetchData, currentSpell } from "../../actions/index.js";

var _ = require('lodash');

const mapStateToProps = state => {
  return {
    spells: state.spells,
    spellsIsFetching: state.spellsIsFetching,
    spellsFetchingError: state.spellsFetchingError,
    updateSpell: state.updateSpell
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSpellsData: url => dispatch(spellsFetchData(url)),
    changeCurrentSpell: id => dispatch(currentSpell(id))
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
    this.props.fetchSpellsData("http://localhost:5000/api/spells");
  }

  handlerChooseSpell(id) {
    this.props.changeCurrentSpell(id);
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
              <a onClick={e => this.handlerChooseSpell(spell._id)}>{spell.Title}</a>
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
