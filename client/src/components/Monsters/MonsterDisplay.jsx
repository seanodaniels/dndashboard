import React, { Component } from 'react';
import { connect } from 'react-redux';
import MonsterProp from "./MonsterProp.jsx";

const mapStateToProps = (state) => {
  return { singleMonster: state.singleMonster, singleMonsterIsFetching: state.singleMonsterIsFetching, singleMonsterFetchingError: state.singleMonsterFetchingError };
};

class MonsterDisplayComp extends Component {

  render() {

    if (this.props.singleMonsterFetchingError) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.singleMonsterIsFetching) {
      return <p>Loading…</p>;
    }

    return (
      <div id="MonsterDisplay">
      {this.props.singleMonster.name &&
        <div className="stat-block">
          <hr className="orange-border" />
          <div className="section-left">
            <div className="creature-heading">
              <h1>{this.props.singleMonster.name}</h1>
              <h2>{this.props.singleMonster.size} {this.props.singleMonster.type} {this.props.singleMonster.subtype}, {this.props.singleMonster.alignment}</h2>
            </div> {/* creature heading */}
            <svg height="5" width="100%" className="tapered-rule">
              <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
            <div className="top-stats">
              <div className="property-line first">
                <h4>Armor Class</h4>
                <p>{this.props.singleMonster.armor_class} (natural armor)</p>
              </div> {/* property line */}
              <div className="property-line">
                <h4>Hit Points</h4>
                <p>{this.props.singleMonster.hit_points} ({this.props.singleMonster.hit_dice} + { (this.props.singleMonster.hit_dice.split("d")[0] * Math.floor((this.props.singleMonster.constitution - 10)/2))})</p>
              </div> {/* property line */}
              <div className="property-line last">
                <h4>Speed</h4>
                <p>{this.props.singleMonster.speed}</p>
              </div> {/* property line */}
              <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
              </svg>
              <div className="abilities">
                <div className="ability-strength">
                  <h4>STR</h4>
                  <p>{this.props.singleMonster.strength} <MonsterProp type="abilityBonus" value={this.props.singleMonster.strength} /></p>
                </div> {/* ability strength */}
                <div className="ability-dexterity">
                  <h4>DEX</h4>
                  <p>{this.props.singleMonster.dexterity} <MonsterProp type="abilityBonus" value={this.props.singleMonster.dexterity} /></p>
                </div> {/* ability dexterity */}
                <div className="ability-constitution">
                  <h4>CON</h4>
                  <p>{this.props.singleMonster.constitution} <MonsterProp type="abilityBonus" value={this.props.singleMonster.constitution} /></p>
                </div> {/* ability constitution */}
                <div className="ability-intelligence">
                  <h4>INT</h4>
                  <p>{this.props.singleMonster.intelligence} <MonsterProp type="abilityBonus" value={this.props.singleMonster.intelligence} /></p>
                </div> {/* ability intelligence */}
                <div className="ability-wisdom">
                  <h4>WIS</h4>
                  <p>{this.props.singleMonster.wisdom} <MonsterProp type="abilityBonus" value={this.props.singleMonster.wisdom} /></p>
                </div> {/* ability wisdom */}
                <div className="ability-charisma">
                  <h4>CHA</h4>
                  <p>{this.props.singleMonster.charisma} <MonsterProp type="abilityBonus" value={this.props.singleMonster.charisma} /></p>
                </div> {/* ability charisma */}
              </div> {/* abilities */}
              <svg height="5" width="100%" className="tapered-rule">
                <polyline points="0,0 400,2.5 0,5"></polyline>
              </svg>
              {this.props.singleMonster.damage_immunities &&
                <div className="property-line">
                  <h4>Damage Immunities</h4>
                  <p>{this.props.singleMonster.damage_immunities}</p>
                </div>
              }
              {this.props.singleMonster.condition_immunities &&
                <div className="property-line">
                  <h4>Condition Immunities</h4>
                  <p>{this.props.singleMonster.condition_immunities}</p>
                </div>
              }
              {this.props.singleMonster.senses &&
                <div className="property-line">
                  <h4>Senses</h4>
                  <p>{this.props.singleMonster.senses}</p>
                </div>
              }
              {this.props.singleMonster.languages &&
                <div className="property-line">
                  <h4>Languages</h4>
                  <p>{this.props.singleMonster.languages}</p>
                </div>
              }
              {this.props.singleMonster.challenge_rating >=0 &&
                <div className="property-line last">
                  <h4>Challenge</h4>
                  <p>{this.props.singleMonster.challenge_rating}</p>
                </div>
              }
            </div> {/* top stats */}
            <svg height="5" width="100%" className="tapered-rule">
              <polyline points="0,0 400,2.5 0,5"></polyline>
            </svg>
            {this.props.singleMonster.special_abilities &&
              <div>{this.props.singleMonster.special_abilities.map(ability => {
                return <div key={ability.name} className="property-block">
                  <h4>{ability.name}</h4>
                  <p>{ability.desc}</p>
                </div>;
              })}</div>
            }

          </div> {/* section left */}
          <div className="section-right">
            {this.props.singleMonster.actions &&
              <div className="actions"><h3>Actions</h3>{this.props.singleMonster.actions.map(ability => {
                return <div key={ability.name}  className="property-block">
                  <h4>{ability.name}</h4>
                  <p>{ability.desc}</p>
                </div>;
              })}</div>
            }
            {this.props.singleMonster.legendary_actions &&
              <div className="actions"><h3>Legendary Actions</h3>{this.props.singleMonster.legendary_actions.map(ability => {
                return <div  key={ability.name} className="property-block">
                  <h4>{ability.name}</h4>
                  <p>{ability.desc}</p>
                </div>;
              })}</div>
            }
          </div> {/* section right */}
          <hr className="orange-border bottom" />
        </div>
      }
      </div>);

  }
}

const MonsterDisplay = connect(mapStateToProps)(MonsterDisplayComp);

export default MonsterDisplay;
