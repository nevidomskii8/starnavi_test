import { createReducer } from "@reduxjs/toolkit";
import { fetchState, setHover, setSelect } from "../action/stateAction";

const initialState = {
    loading: false,
    data: [],
    stateSelect: null,
    hovers: []
};

const stateReducer = createReducer(initialState, {
    [fetchState.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
    },
    [fetchState.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [fetchState.pending]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    [setSelect.type]: (state, action) => {
        state.stateSelect = action.payload
    },
    [setHover.type]: (state, action) => {
        state.hovers = state.hovers.length === 5 
        ? [...state.hovers.slice(1), action.payload]
        : [...state.hovers, action.payload]
    }
}
    
);

export default stateReducer;