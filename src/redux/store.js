import { createStore,applyMiddleware, combineReducers } from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import rootReducer from './reducers'
let store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store