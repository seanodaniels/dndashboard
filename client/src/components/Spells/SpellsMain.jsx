import React, {Component} from 'react';

class SpellsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spell: []
    }
  }

  componentDidMount() {
    fetch('/spells')
      .then(res => res.json())
      .then(spell => this.setState({ spell }));

  }

  render() {
    // DnDashboard
    return (
      <div id="spells">
        <h2>Spells</h2>

        {this.state.spell.map((data)  => (
          <div key={data._id}>{data.Title}</div>
        ))}


      </div>
    )
  }
}

export default SpellsMain;
