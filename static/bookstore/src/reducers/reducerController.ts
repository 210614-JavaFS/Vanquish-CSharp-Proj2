import { combineReducers } from "redux";
import userReducer from "./UserReducer";

export const reducerController = combineReducers({

    user: userReducer
});

export default reducerController;