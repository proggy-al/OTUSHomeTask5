import { configureStore } from '@reduxjs/toolkit';
import avtoReducer from './avtoReducer';

const store = configureStore ({
    reducer:avtoReducer
})

export default store;