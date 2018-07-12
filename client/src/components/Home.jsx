import React, { Component } from 'react';

class Home extends Component {

  render() {
    // DnDashboard
    return (
      <div id="home">
      <div class="home-block">
        <h2><a href="/monsters">Monsters</a></h2>

        <p>D&amp;D 5e SRD content provided by <a href="http://www.dnd5eapi.co/" rel="noopener noreferrer"  target="_blank">http://www.dnd5eapi.co/</a> with statblock styles by <a href="https://codepen.io/retractedhack/pen/gPLpWe" rel="noopener noreferrer" target="_blank">Chad Carteret</a> based on <a href="https://valloric.github.io/statblock5e/" rel="noopener noreferrer" target="_blank">Valloric's Statblock5e</a></p>

      </div>

      <div class="home-block">
        <h2><a href="/monsters">Spells</a></h2>

        <p>A list of D&amp;D spells. Data provided by <a href="https://github.com/thebombzen/grimoire/" rel="noopener noreferrer" target="_blank">thebombzen</a> and converted into a MongoDB.</p>

      </div>

      
      
      </div>
    )
  }
}

export default Home;
