import * as a from "../constants/actionTypes";


export function setPagesReducer(
  state = null,
  { type, current, next, previous }
) {
  switch (type) {
    case a.SET_PAGES:
      return {
        ...state,
        currentPage: current,
        nextPage: next,
        previousPage: previous
      };

    default:
      return state;
  }
}
