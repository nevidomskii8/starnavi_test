import { createReducer } from "@reduxjs/toolkit";
import { fetchState, setSelect } from "../action/stateAction";

const initialState = {
    loading: false,
    data: [],
    stateSelect: 5
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
    }
}
    
);

export default stateReducer;