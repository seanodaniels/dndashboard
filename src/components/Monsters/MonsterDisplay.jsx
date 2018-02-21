import React, {Component} from 'react';
import {connect} from 'react-redux';
import MonsterProp from "./MonsterProp.jsx";

const mapStateToProps = (state) => {
  return {singleMonster: state.singleMonster, singleMonsterIsFetching: state.singleMonsterIsFetching, singleMonsterFetchingError: state.singleMonsterFetchingError};
};

class MonsterDisplayComp extends Component {

  render() {

    if (this.props.singleMonsterFetchingError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.singleMonsterIsFetching) {
      return <p>Loading…</p>;
    }

    return (<div id="MonsterDisplay">
      <h1>{this.props.singleMonster.name}</h1>

      <p>
        <MonsterProp propKey="monsterUrl" type="a" linkTarget="_blank" name={this.props.singleMonster.url} value={this.props.singleMonster.url}/>
      </p>

      <table className="monster-table">
        <tbody>

        <MonsterProp type="tr" name="Size" value={this.props.singleMonster.size}/>
        <MonsterProp type="tr" name="Type" value={this.props.singleMonster.type}/>
        <MonsterProp type="tr" name="Subtype" value={this.props.singleMonster.subtype}/>
        <MonsterProp type="tr" name="Alignment" value={this.props.singleMonster.alignment}/>
        <MonsterProp type="tr" name="AC" value={this.props.singleMonster.armor_class}/>
        <MonsterProp type="tr" name="Hit Points" value={this.props.singleMonster.hit_points}/>
        <MonsterProp type="tr" name="Hit Dice" value={this.props.singleMonster.hit_dice}/>
        <MonsterProp type="tr" name="Speed" value={this.props.singleMonster.speed}/>
        <MonsterProp type="tr" name="Str" value={this.props.singleMonster.strength}/>
        <MonsterProp type="tr" name="Dex" value={this.props.singleMonster.dexterity}/>
        <MonsterProp type="tr" name="Con" value={this.props.singleMonster.constitution}/>
        <MonsterProp type="tr" name="Int" value={this.props.singleMonster.intelligence}/>
        <MonsterProp type="tr" name="Wis" value={this.props.singleMonster.wisdom}/>
        <MonsterProp type="tr" name="Cha" value={this.props.singleMonster.charisma}/>
        <MonsterProp type="tr" name="Str Save" value={this.props.singleMonster.strength_save}/>
        <MonsterProp type="tr" name="Dex Save" value={this.props.singleMonster.dexterity_save}/>
        <MonsterProp type="tr" name="Con Save" value={this.props.singleMonster.constitution_save}/>
        <MonsterProp type="tr" name="Int Save" value={this.props.singleMonster.intelligence_save}/>
        <MonsterProp type="tr" name="Wis Save" value={this.props.singleMonster.wisdom_save}/>
        <MonsterProp type="tr" name="Cha Save" value={this.props.singleMonster.charisma_save}/>
        <MonsterProp type="tr" name="Athletics" value={this.props.singleMonster.athletics}/>
        <MonsterProp type="tr" name="Acrobatics" value={this.props.singleMonster.acrobatics}/>
        <MonsterProp type="tr" name="Sleight of Hand" value={this.props.singleMonster.sleight_of_hand}/>
        <MonsterProp type="tr" name="Stealth" value={this.props.singleMonster.stealth}/>
        <MonsterProp type="tr" name="initiative" value={this.props.singleMonster.initiative}/>
        <MonsterProp type="tr" name="Arcana" value={this.props.singleMonster.arcana}/>
        <MonsterProp type="tr" name="History" value={this.props.singleMonster.history}/>
        <MonsterProp type="tr" name="Investigation" value={this.props.singleMonster.investigation}/>
        <MonsterProp type="tr" name="Nature" value={this.props.singleMonster.nature}/>
        <MonsterProp type="tr" name="Religion" value={this.props.singleMonster.religion}/>
        <MonsterProp type="tr" name="Animal Handling" value={this.props.singleMonster.animal_handling}/>
        <MonsterProp type="tr" name="Insight" value={this.props.singleMonster.insight}/>
        <MonsterProp type="tr" name="Medicine" value={this.props.singleMonster.medicine}/>
        <MonsterProp type="tr" name="Perception" value={this.props.singleMonster.perception}/>
        <MonsterProp type="tr" name="Survival" value={this.props.singleMonster.survival}/>
        <MonsterProp type="tr" name="Deception" value={this.props.singleMonster.deception}/>
        <MonsterProp type="tr" name="Intimidation" value={this.props.singleMonster.intimidation}/>
        <MonsterProp type="tr" name="Performance" value={this.props.singleMonster.performance}/>
        <MonsterProp type="tr" name="Persuasion" value={this.props.singleMonster.persuasion}/>
        <MonsterProp type="tr" name="Damage Vulnerabilities" value={this.props.singleMonster.damage_vulnerabilities}/>
        <MonsterProp type="tr" name="Damage Resistances" value={this.props.singleMonster.damage_resistances}/>
        <MonsterProp type="tr" name="Damage Immunities" value={this.props.singleMonster.damage_immunities}/>
        <MonsterProp type="tr" name="Condition Immunities" value={this.props.singleMonster.condition_immunities}/>
        <MonsterProp type="tr" name="Senses" value={this.props.singleMonster.senses}/>
        <MonsterProp type="tr" name="Languages" value={this.props.singleMonster.languages}/>
        <MonsterProp type="tr" name="CR" value={this.props.singleMonster.challenge_rating}/>
      </tbody>
      </table>
    </div>);

  }
}

const MonsterDisplay = connect(mapStateToProps)(MonsterDisplayComp);

export default MonsterDisplay;
