import {ActionTypes} from "../action-types"
const initState = {
    data: [],
    loading: false,
    error:null
};
export const itunesReducer = (state=initState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_DATA_REQUSET:            
            return {
                ...state,
                loading: true,
                error:null
            }
        case ActionTypes.FETCH_DATA_SUCCESS:            
            return {
                ...state,
                loading: false,
                post: action.payload
            }
        case ActionTypes.FETCH_DATA_FAILURE:            
            return {
                ...state,
                loading: false,
                error:action.error
            }
                
              
        default:
            return state;
    }
    return state
}