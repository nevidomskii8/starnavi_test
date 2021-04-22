import { createSelector } from "reselect";

export const getStateData = createSelector(
  (state) => state.state.data,
  (data) => data
);

export const getStateSelect = createSelector(
  (state) => state.state.stateSelect,
  (stateSelect) => stateSelect
);
export const getStateHovers = createSelector(
  (state) => state.state.hovers,
  (hovers) => hovers
);
