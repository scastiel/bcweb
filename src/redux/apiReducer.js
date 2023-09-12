import { API_PENDING, API_SUCCESS, API_ERROR } from "./actions";

const initialState = { 
    loading: false,
    data: '',
    error: '',
};

const apiReducer = (state=initialState, action) => {
    switch(action.type){
        case API_PENDING:
            return {
                ...state,
                loading: true,
            };
        case API_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case API_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default apiReducer