import {ActionTypes} from "../action-types"
const initState = {
    data: null,
    loading: false,
    error:null,
    searchText: "",
    searchMedia: 'song'
};
export const itunesReducer = (state=initState, action) => {
    // console.log(state, action);
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
                data:  action.payload
            }
        case ActionTypes.FETCH_DATA_FAILURE:            
            return {
                ...state,
                loading: false,
                error:action.error
            }
        case ActionTypes.SET_INPUT_MEDIA:            
            return {
                ...state,
                searchMedia:action.payload               
            }
        case ActionTypes.SET_INPUT_TEXT:            
            return {
                ...state,
                searchText:action.payload                
            }
                
              
        default:
            return state;
    }
    
}