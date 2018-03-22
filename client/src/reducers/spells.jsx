export function spellsIsFetching(state = false, action) {
  switch (action.type) {
    case "SPELLS_IS_FETCHING":
      return action.isFetching;

    default:
      return state;
  }
}

export const spellsFetchingError = (state = false, action) => {
  switch (action.type) {
    case "SPELLS_FETCHING_ERROR":
      return action.fetchingError;
    default:
      return state;
  }
};

export const spells = (state = [], action) => {
  switch (action.type) {
    case "SPELLS_FETCH_SUCCESS":
      return action.spells;
    default:
      return state;
  }
};
