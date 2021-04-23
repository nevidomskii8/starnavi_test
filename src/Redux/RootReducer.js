import { combineReducers } from '@reduxjs/toolkit';
import stateSlice from "./reducer/stateReducer";

export default combineReducers({
  state: stateSlice,
});
