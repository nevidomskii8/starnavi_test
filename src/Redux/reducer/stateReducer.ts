import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchState } from "../action/stateAction";
import { RootState } from "../createStore";

interface interfaceState {
  loading: boolean;
  data: any[];
  stateSelect: string | null;
  hovers: string[];
  error: null | boolean;
}


const initialState: interfaceState = {
  loading: false,
  data: [],
  stateSelect: '',
  hovers: [],
  error: null
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setSelect: (state, action: PayloadAction<string | null>) => {
      state.stateSelect = action.payload
    },
    setHover: (state, action: PayloadAction<string>) => {
      state.hovers = state.hovers.length === 5
          ? [...state.hovers.slice(1), action.payload]
          : [...state.hovers, action.payload];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchState.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchState.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
})

export const { setSelect, setHover } = stateSlice.actions;
export const getStateData = (state: RootState) => state.state.data;
export const getStateSelect = (state: RootState) => state.state.stateSelect;
export const getStateHovers = (state: RootState) => state.state.hovers;

export default stateSlice.reducer;