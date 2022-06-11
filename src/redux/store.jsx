import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "./products/reducer"

const roorReducer = combineReducers({ecommerceData : productReducer})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(
    roorReducer,
    composeEnhancer(applyMiddleware(thunk))
)