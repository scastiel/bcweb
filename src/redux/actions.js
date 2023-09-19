/* import axios from "axios";
const API_URL = "https://demo-btw.monkey-soft.fr/"; */
import storeAndPersistor from './store';
const { persistor } = storeAndPersistor;

//action's type for login
export const ADD_TOKEN = "ADD_TOKEN";
export const ADD_REFRESH_TOKEN = "ADD_REFRESH_TOKEN";
export const TOGGLE_IS_LOGGED = "TOGGLE_IS_LOGGED";
export const SIGNOUT = "SIGNOUT";

//action's type FOR api
export const API_PENDING = "API_PENDING";
export const API_SUCCESS = "API_SUCCESS";
export const API_ERROR = "API_ERROR";


//action creators for login
export const addToken = (token) => {
  return {
    type: ADD_TOKEN,
    payload: token,
  };
};

export const addRefreshToken = (refreshToken) => {
  return {
    type: ADD_REFRESH_TOKEN,
    payload: refreshToken,
  };
};

export const toggleIsLogged = (isLogged) => {
  return {
    type: TOGGLE_IS_LOGGED,
    payload: isLogged,
  };
};

export const signout = () => {
  persistor.purge();
  return {
    type: SIGNOUT,
  }
}

// action creators for API

export const fetchData = () => ({
  type: API_PENDING,
});

export const fetchSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: API_ERROR,
  payload: error,
});