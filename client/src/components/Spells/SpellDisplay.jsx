import React, {Component} from 'react';
import {connect} from 'react-redux';
import configureStore from '../../store';
import {
  currentSpell,
} from "../../actions/index.js";

const store = configureStore();

const mapStateToProps = state => {
  return {
    spells: state.spells,
    currentSpell: state.currentSpell
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentSpell: id => dispatch(currentSpell(id))
  };
};


var _ = require('lodash')

class SpellDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spells: [],
      spellId: ''
    };


  };


  render() {

    return (
      <div id="SpellDisplay">

        { this.props.spells
          .filter(
            (spell) => {
              return spell._id === this.props.currentSpell;
              // return false;
            }
          ).map((spell, index) => (
            <div id={spell._id} className="oinitial-hide" key={index}>
              <h1>{spell.Title}</h1>
              <p><em>Level {spell.Level} {spell.School} {spell.Ritual}</em></p>              
              <p><strong>Casting Time:</strong> {spell['Casting Time']}<br />
              <strong>Range:</strong> {spell.Range}<br />
              <strong>Components:</strong> {spell.Components}<br />
              <strong>Duration:</strong> {spell.Duration}</p>

              <p>{spell.Description}</p>
            </div>
          ))
        }

      </div>
    );

  }
}


// export default SpellDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(SpellDisplay);
