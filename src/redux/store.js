import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import tokenReducer from "./tokenReducer";
import apiReducer from "./apiReducer";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';


const appReducers = combineReducers({
  tokenReducer,
  apiReducer,
});

const rootReducer = (state, action) => appReducers(state, action);
const logger = createLogger();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export default store;
