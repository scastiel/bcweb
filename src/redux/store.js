import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "./tokenReducer";
import apiReducer from "./apiReducer";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  persistReducer,
  persistStore,   
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage'

const appReducers = combineReducers({
  tokenReducer,
  apiReducer,
});


const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['tokenReducer'],
}

const persistedReducer = persistReducer(persistConfig, appReducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(thunk, logger),
});

const persistor = persistStore(store)

export default { store, persistor }
