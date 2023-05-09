import { configureStore } from '@reduxjs/toolkit'
import * as middlewares from "../middlewares";
import * as reducers from '../reducers';
import * as sagas from '../sagas';
import { sagaMiddleware } from "../middlewares";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from 'redux-persist'
import {combineReducers} from "redux";

// pass middleware to an array
const middleware = Object.values(middlewares);

// persist the store
const persistConfig = {
  key: 'dev-30',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers(reducers))

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // connect middleware to the store
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: { warnAfter: 512 },
  }).concat(middleware),
});

export const persistedStore = persistStore(store);

Object.values(sagas).every((saga) => sagaMiddleware.run(saga));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch