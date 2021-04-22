/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";

export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  });
};
