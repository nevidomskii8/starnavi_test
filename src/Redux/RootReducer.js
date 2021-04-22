import { combineReducers } from "@reduxjs/toolkit";
import stateReducer from "./reducer/stateReducer";

export default combineReducers({
  state: stateReducer,
});
