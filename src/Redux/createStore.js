import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootReducer';

export default () => {
    return configureStore({
        reducer: rootReducer,
        devTools: true,
    })
};