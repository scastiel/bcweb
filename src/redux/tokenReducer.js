import { ADD_TOKEN, ADD_REFRESH_TOKEN, TOGGLE_IS_LOGGED, SIGNOUT } from "./actions";

const initialState = { 
    token: "",
    refreshToken: "",
    isLogged: false,
};

const tokenReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case ADD_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.payload
            };
        case TOGGLE_IS_LOGGED:
            return {
                ...state,
                isLogged: !action.payload
            };
        case SIGNOUT:
            return {
                ...state,
                token: "", refreshToken:"", isLogged:false
            }
        default:
            return state;
    }
}

export default tokenReducer