import { CALL_API } from 'redux-api-middleware';

const REQUEST = '/user/REQUEST';
const RECEIVE = '/user/RECEIVE';
const FAILURE = '/user/FAILURE';

export function FetchMonsters() {
  return {
    [CALL_API]: {
      endpoint: `http://www.dnd5eapi.co/api/monsters/`,
      method: 'GET',
      types: [REQUEST, RECEIVE, FAILURE]
    }
  }
}
