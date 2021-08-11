import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk, { ThunkDispatch } from "redux-thunk";
import logger from 'redux-logger'; 
import reducerController from "./reducers/reducerController";
import userReducer from "./reducers/UserReducer";


const store = createStore(
    reducerController, // Reducer
    composeWithDevTools(
        //middlewares
        applyMiddleware(reduxThunk, logger),
    )
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch & ThunkDispatch<RootState, void, AnyAction>;

export default store;
