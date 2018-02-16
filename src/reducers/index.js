import { combineReducers } from 'redux';
import { monsters, monstersIsFetching, monstersFetchingError } from './monsters.jsx';

export default combineReducers({
  monsters, monstersIsFetching, monstersFetchingError
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
