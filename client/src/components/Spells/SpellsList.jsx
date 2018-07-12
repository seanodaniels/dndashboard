import React, { Component } from "react";
import { connect } from "react-redux";
import { spellsFetchData, currentSpell } from "../../actions/index.js";
import { Link } from 'react-router-dom';

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
      query: '',
      counter: 0
    }
  }

  componentDidMount() {
    this.props.fetchSpellsData("/api/spells");
  }

  componentWillUpdate(nextProps) {
    // If we have landed here from a user designated URL,
    // then pull the appropriate monster and display it.
    if (this.props.match.path === '/spells/:id') {
      if (this.props.spells.length <= 0 && nextProps.spells.length > 0) {
        let foundSpellName = nextProps.spells.find(spell => { return spell.Title === this.props.match.params.id });
        if (foundSpellName) {
          this.props.changeCurrentSpell(foundSpellName._id);
        } else {
          // 
        }
      }
    }
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
              <Link onClick={e => this.handlerChooseSpell(spell._id)} to={`/spells/${spell.Title}`}>{spell.Title}</Link>
            </li>
            ))
          }
        </ul>

      </div>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellsList);
