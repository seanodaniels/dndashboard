export function monstersIsFetching(state = false, action) {
  switch (action.type) {
    case 'MONSTERS_IS_FETCHING' :
      return action.isFetching;

    default:
      return state;
  }
};

export const monstersFetchingError = (state = false, action) => {
  switch (action.type) {
    case 'MONSTERS_FETCHING_ERROR':
      return action.fetchingError;
    default:
      return state;
  }
};

export const monstersFetchingDone = (state = false, action) => {
  switch (action.type) {
    case 'MONSTERS_FETCHING_DONE':
      return action.fetchingDone;
    default:
      return state;
  }
};



export const monsters = (state = [], action) => {
    switch (action.type) {
        case 'MONSTERS_FETCH_SUCCESS':
            return action.monsters.results;

        default:
            return state;
    }
};

export function singleMonsterIsFetching(state = false, action) {
  switch (action.type) {
    case 'SINGLE_MONSTER_IS_FETCHING' :
      return action.isFetching;

    default:
      return state;
  }
};

export const singleMonsterFetchingError = (state = false, action) => {
  switch (action.type) {
    case 'SINGLE_MONSTER_FETCHING_ERROR':
      return action.fetchingError;
    default:
      return state;
  }
};


export const singleMonster = (state = {}, action) => {
    switch (action.type) {
        case 'SINGLE_MONSTER_FETCH_SUCCESS':
            return action.singleMonster; // monster object located at URL
        default:
            return state;
    }
};
