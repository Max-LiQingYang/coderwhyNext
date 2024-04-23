import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './modules/home';

const store = configureStore({
    // 组合 reducer
    reducer: {
        home: homeReducer,
    }
});

export default store;