import { combineReducers } from 'redux';
import {
  monsters, monstersIsFetching, monstersFetchingError,
  singleMonster, singleMonsterIsFetching, singleMonsterFetchingError,
 } from './monsters.jsx';

 import {
   spells, spellsIsFetching, spellsFetchingError, currentSpell
 } from './spells.jsx';

export default combineReducers({
  monsters, monstersIsFetching, monstersFetchingError,
  singleMonster, singleMonsterIsFetching, singleMonsterFetchingError,
  spells, spellsIsFetching, spellsFetchingError, currentSpell
});


/*
 * API Calls
 *

 export function getMonster(url) {
   fetch(url) // for testing
   // should be fetch(url)
   .then( results => {
     return results.json();
   }).then(data => {
     return data.results;
   });
 }


 export function getMonsterList() {
   fetch('http://www.dnd5eapi.co/api/monsters/')
   .then( results => {
     return results.json();
   }).then(data => {
     // let monsterListData = data.results;
     return {
       type: 'GET_MONSTER_LIST',
       monsterList: data.results,
     }
   });
 }
*/
