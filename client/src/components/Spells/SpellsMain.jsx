import React, {Component} from 'react';
import SpellsList from './SpellsList.jsx';
import SpellDisplay from './SpellDisplay.jsx';

class SpellsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  completeItem = (url) => {
    this.setState({
      spellUrl: url,
    });
  }


  render() {
    // DnDashboard
    return (
      <div id="Spells">
        <div className="data-list spells-list">
          <SpellsList/>
        </div>
        <div className="data-display spell-display">
          <SpellDisplay setSpellUrl={this.state.spellUrl}/>
        </div>
      </div>
    )
  }
}

export default SpellsMain;
