import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "./tokenReducer";
import apiReducer from "./apiReducer";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistReducer} from "redux-persist";

const appReducers = combineReducers({
  tokenReducer,
  apiReducer,
});


const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['tokenReducer']
}



const rootReducer = (state, action) => appReducers(state, action);

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});


export default store;
