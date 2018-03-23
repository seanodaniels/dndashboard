export const MONSTERS_IS_FETCHING = "MONSTERS_IS_FETCHING";
export const MONSTERS_FETCHING_ERROR = "MONSTERS_FETCHING_ERROR";
export const MONSTERS_FETCH_SUCCESS = "MONSTERS_FETCH_SUCCESS";
export const SINGLE_MONSTER_IS_FETCHING = "SINGLE_MONSTER_IS_FETCHING";
export const SINGLE_MONSTER_FETCHING_ERROR = "SINGLE_MONSTER_FETCHING_ERROR";
export const SINGLE_MONSTER_FETCH_SUCCESS = "SINGLE_MONSTER_FETCH_SUCCESS";
export const SPELLS_IS_FETCHING = "SPELLS_IS_FETCHING";
export const SPELLS_FETCHING_ERROR = "SPELLS_FETCHING_ERROR";
export const SPELLS_FETCH_SUCCESS = "SPELLS_FETCH_SUCCESS";
export const UPDATE_SPELL = "UPDATE_SPELL";

export function monstersIsFetching(bool) {
  return {
    type: "MONSTERS_IS_FETCHING",
    isFetching: bool
  };
}

export function monstersFetchingError(bool) {
  return {
    type: "MONSTERS_FETCHING_ERROR",
    fetchingError: bool
  };
}

export function monstersFetchSuccess(monsters) {
  return {
    type: "MONSTERS_FETCH_SUCCESS",
    monsters: monsters
  };
}

export function monstersFetchData(url) {
  // Thunk - allows us to return a function instead of an object.
  return dispatch => {
    dispatch(monstersIsFetching(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(monstersIsFetching(false));
        return response;
      })
      .then(response => response.json())
      .then(monsters => {
        dispatch(monstersFetchSuccess(monsters));
        console.log(monsters);
      })

      .catch(() => dispatch(monstersFetchingError(true)));
  };
}

export function singleMonsterIsFetching(bool) {
  return {
    type: "SINGLE_MONSTER_IS_FETCHING",
    isFetching: bool
  };
}

export function singleMonsterFetchingError(bool) {
  return {
    type: "SINGLE_MONSTER_FETCHING_ERROR",
    fetchingError: bool
  };
}

export function singleMonsterFetchSuccess(singleMonster) {
  return {
    type: "SINGLE_MONSTER_FETCH_SUCCESS",
    singleMonster: singleMonster
  };
}

export function singleMonsterFetchData(url) {
  // Thunk - allows us to return a function instead of an object.
  return dispatch => {
    dispatch(singleMonsterIsFetching(true));

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(singleMonsterIsFetching(false));
        return response;
      })
      .then(response => response.json())
      .then(singleMonster => dispatch(singleMonsterFetchSuccess(singleMonster)))
      .catch(() => dispatch(singleMonsterFetchingError(true)));
  };
}

export function spellsIsFetching(bool) {
  return {
    type: "SPELLS_IS_FETCHING",
    isFetching: bool
  };
}

export function spellsFetchingError(bool) {
  return {
    type: "SPELLS_FETCHING_ERROR",
    fetchingError: bool
  };
}

export function spellsFetchSuccess(spells) {
  return {
    type: "SPELLS_FETCH_SUCCESS",
    spells: spells
  };
}

export function spellsFetchData(url) {
  return dispatch => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then(spells => {
        console.log(spells);
        dispatch(spellsFetchSuccess(spells));
      })
      .catch(() => dispatch(spellsFetchingError(true)));
  };
}

export function currentSpell(id) {
  return {
    type: "UPDATE_SPELL",
    currentSpell: id
  };
}
