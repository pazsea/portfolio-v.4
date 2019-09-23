import { combineReducers } from "redux";
import toggleInformationReducer from "./toggleInformation";
import { setPagesReducer } from "./setPages";
import { setProjectIndexReducer } from "./setProjectIndex";

const rootReducer = combineReducers({
  toggleInfoState: toggleInformationReducer,
  pagesState: setPagesReducer,
  projectIndexState: setProjectIndexReducer
});

export default rootReducer;
