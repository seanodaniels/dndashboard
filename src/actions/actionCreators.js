// Get selected Monster

 export function getMonster(url) {
   // put api call here - to individual monster

   fetch('http://www.dnd5eapi.co/api/monsters/2') // for testing
   // should be fetch(url)
   .then( results => {
     return results.json();
   }).then(data => {
     // let monster = data.results;
     return {
       type: 'GET_MONSTER',
       monster: data.results,
     }
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

   console.log("Fire getMonsterList()");


 }
