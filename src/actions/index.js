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
    monsters
  };
};

export function monstersFetchData(url) {

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
}
