// import {
//   MONSTERS_IS_FETCHING,
//   MONSTERS_FETCHING_ERROR,
//   MONSTERS_FETCH_SUCCESS
// } from '../constants/action-types.js';
//

export function monstersIsFetching(bool) {
  return {
    type: "MONSTERS_IS_FETCHING",
    isFetching: bool,
  };
};

export function monstersFetchingError(bool) {
  return {
    type: "MONSTERS_FETCHING_ERROR",
    fetchingError: bool,
  };
};

export function monstersFetchSuccess(monsters) {
  return {
    type: "MONSTERS_FETCH_SUCCESS",
    monsters: monsters,
  };
};

export function monstersFetchData(url) {
    // Thunk - allows us to return a function instead of an object.
    return (dispatch) => {
        dispatch(monstersIsFetching(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(monstersIsFetching(false));
                return response;
            })
            .then((response) => response.json())
            .then((monsters) => dispatch(monstersFetchSuccess(monsters)))
            .catch(() => dispatch(monstersFetchingError(true)));
    };
};

export function singleMonsterIsFetching(bool) {
  return {
    type: "SINGLE_MONSTER_IS_FETCHING",
    isFetching: bool,
  };
};

export function singleMonsterFetchingError(bool) {
  return {
    type: "SINGLE_MONSTER_FETCHING_ERROR",
    fetchingError: bool,
  };
};

export function singleMonsterFetchSuccess(singleMonster) {
  return {
    type: "SINGLE_MONSTER_FETCH_SUCCESS",
    singleMonster: singleMonster,
  };
};

export function singleMonsterFetchData(url) {
    // Thunk - allows us to return a function instead of an object.
    return (dispatch) => {
        dispatch(singleMonsterIsFetching(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(singleMonsterIsFetching(false));
                return response;
            })
            .then((response) => response.json())
            .then((singleMonster) => dispatch(singleMonsterFetchSuccess(singleMonster)))
            .catch(() => dispatch(singleMonsterFetchingError(true)));
    };
};
