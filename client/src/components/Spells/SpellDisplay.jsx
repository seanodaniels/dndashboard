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
              <p><strong>{spell._id}</strong><br />{spell.Description}</p>
            </div>
          ))
        }

      </div>
    );

  }
}


// export default SpellDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(SpellDisplay);
