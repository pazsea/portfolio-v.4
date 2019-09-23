import * as a from "../constants/actionTypes";

const INITIAL_STATE = {
  informationOpen: false
};

const toggleInfo = state => ({
  ...state,
  informationOpen: !state.informationOpen
});

function toggleInformationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.TOGGLE_INFORMATION: {
      return toggleInfo(state);
    }
    default:
      return state;
  }
}

export default toggleInformationReducer;
