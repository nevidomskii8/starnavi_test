import { createSelector } from "reselect";
import { RootState } from "../createStore";

// export const getStateData = createSelector(
//   (state) => state.state.data,
//   (data) => data
// );

// export const getStateSelect = createSelector(
//   (state) => state.state.stateSelect,
//   (stateSelect) => stateSelect
// );
// export const getStateHovers = createSelector(
//   (state) => state.state.hovers,
//   (hovers) => hovers
// );

export const getStateData = (state: RootState) => state.state.data;
