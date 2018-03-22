import React, { Component } from "react";
import { connect } from "react-redux";
import { spellsFetchData } from "../../actions/index.js";

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
  }

  componentDidMount() {
    this.props.fetchSpellsData("http://localhost:3001/api/spells");
  }

  render() {
    return (
      
      <div id="spells">
        <h2>Spells</h2>

        {this.props.spells.map((el, index) => (
          <li className="list-group-item" key={index}>
            <a href="#">{el.Title}</a>
          </li>
        ))}
      </div>

    );
  }
}

// export default SpellsMain;
export default connect(mapStateToProps, mapDispatchToProps)(SpellsMain);
