import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import logger from 'redux-logger'; 
import state from "./reducers";

const store = createStore(
    state, // Reducer
    composeWithDevTools(
        //middlewares
        applyMiddleware(reduxThunk, logger),
    )
);


export default store;

