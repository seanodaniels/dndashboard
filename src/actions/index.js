import { ADD_ARTICLE } from '../constants/action-types.js';
import { SET_MONSTER_URL } from '../constants/action-types.js';
import { SET_MONSTER } from '../constants/action-types.js';

export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article,
})

export const setMonsterUrl = url => ({
  type: "SET_MONSTER_URL",
  payload: url,
})

export const setMonster = url => ({
  type: "SET_MONSTER",
  payload: url,
})
