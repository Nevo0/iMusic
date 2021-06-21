import {  applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {itunesReducer} from "./reducers/tunesReducer"



const rootReducer = combineReducers({
    tunes: itunesReducer    
});
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) );

export default store