import { createSelector } from "reselect";
import createStore from "../createStore";

export const getStateData = createSelector(
    state => state.state.data,
    data => data
  );

export const getStateSelect = createSelector(
    state => state.state.stateSelect,
    stateSelect => stateSelect
)