import { configureStore } from '@reduxjs/toolkit';
import langSlice from './slices/langSlice';

const store = configureStore({
    reducer: {
        langDirection : langSlice,
    },
});

export default store;