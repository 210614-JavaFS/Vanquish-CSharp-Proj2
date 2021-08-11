import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import userInfoReducer from '../features/userSlice';

export const reducerController = combineReducers({
    userInfo: userInfoReducer,
    user: userReducer
});

export default reducerController;