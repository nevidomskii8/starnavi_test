import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchState = createAsyncThunk<any>(
  "pictures/getState",
  async () => {
    const response = await axios.get(`http://demo1030918.mockable.io`).then(res => res.data)
    console.log(response)
    return response;
  });

