import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


export const fetchState = createAsyncThunk('pictures/getState', async () => {
    const data = axios.get(` http://demo1030918.mockable.io`).then(
        res => res.data
    );
    return data;
})

export const setSelect = createAction('SET_SELECT');
export const setHover = createAction('SET_HOVER')