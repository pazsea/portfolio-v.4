import * as a from "../constants/actionTypes";

const initialState = {
  projectIndex: false
};

const setProj = (state, index) => ({
  ...state,
  projectIndex: index
});

export function setProjectIndexReducer(state = initialState, { type, index }) {
  switch (type) {
    case a.SET_PROJECT_INDEX:
      return setProj(state, index);

    default:
      return state;
  }
}
