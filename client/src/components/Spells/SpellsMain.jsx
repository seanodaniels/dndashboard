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

class SpellsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: [
        {
          animal: 'Heron, giant'
        }, {
          animal: 'Lizard'
        }, {
          animal: 'Blesbok'
        }, {
          animal: 'Ibex'
        }, {
          animal: 'Pigeon, wood'
        }, {
          animal: 'Ground monitor'
        }
      ],
      query: false
    }
  }

  componentDidMount() {
    this.props.fetchSpellsData("http://localhost:3001/api/spells");
  }

  render() {
    return (
      
      <div id="spells">
        <h2>Spells</h2>

        <input placeholder="search" value={this.state.query || ''} onChange={ (event) => { this.setState( { query: event.target.value})}} />

        <p>Query: {this.state.query}</p>

        {/* {this.props.spells.map((el, index) => (
          <li className="list-group-item" key={index}>
            <a href="#">{el.Title}</a>
          </li>
        ))} */}

        {
          this.props.spells
          .filter( 
            (spell) => _.toLower(spell.Title)
            .includes(_.toLower(this.state.query || '')))
            .map((spell, index) => (
            <li className="list-group-item" key={index}>
              <a href="">{spell.Title}</a>
            </li>
            )
          )
        }

      </div>

    );
  }
}

// export default SpellsMain;
export default connect(mapStateToProps, mapDispatchToProps)(SpellsMain);
