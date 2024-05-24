import { combineReducers, configureStore } from '@reduxjs/toolkit';
import models from './models/models';

const combinedReducers = combineReducers({
  models
})

export const store = configureStore({
    reducer: combinedReducers,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = (typeof store)['dispatch'];