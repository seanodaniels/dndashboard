import { ADD_ARTICLE } from '../constants/action-types';
import { SET_MONSTER_URL } from '../constants/action-types';
import monsterList from '../data/monsterList';


const initialState = {
  articles: [
    {
      title: 'first article',
      id: 1
    },
    {
      title: 'second article',
      id: 2
    },
  ],
  monsterList: monsterList.results,
  chosenMonsterUrl: 'http://www.dnd5eapi.co/api/monsters/23',
}

// const rootReducer = combineReducers({
//   routing: routerReducer,
//   monsterList,
// });

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        // articles: state.articles.concat(action.payload),
        articles: [
          ...state.articles,
          action.payload
        ]
      }
      case SET_MONSTER_URL:
        return {
          ...state,
          // articles: state.articles.concat(action.payload),
          chosenMonsterUrl: action.payload,
        }
    default:
      return state;
  }
}

export default rootReducer;

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
