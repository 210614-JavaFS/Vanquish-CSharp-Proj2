import { Reducer } from "redux";
import { UserAction } from "../action-mappers/user-mapper";
import User from "../models/User";

export type UserState = User[];
const userReducer: Reducer<UserState, UserAction> = (state = [], action) => {

    switch(action.type) {

        default:
            return state;
    }

}

export default userReducer;