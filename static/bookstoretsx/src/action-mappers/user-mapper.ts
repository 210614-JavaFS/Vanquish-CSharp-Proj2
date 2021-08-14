import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import User from "../models/User";
import { apiRegisterUser } from "../remote/userApi";
import { RootState } from "../store";

//NOTE. Action Types
export enum UserActionTypes {
    GET_FULFILLED = 'user/fulfilled',
    GET_REJECTED = 'user/rejected',
    GET_PENDING = 'user/pending',
    GET_SKIPPED = 'user/skipped'
}

export type UserActionSuccessful = {
    type: UserActionTypes.GET_FULFILLED,
    payload: User,
}

export type UserActionPOSTSuccessful = {
    type: UserActionTypes.GET_FULFILLED
}

export type UserActionUnsuccessful = {
    type: UserActionTypes.GET_REJECTED,

}
export type UserActionPending = {
    type: UserActionTypes.GET_PENDING,
    
}
export type UserActionSkipped = {
    type: UserActionTypes.GET_SKIPPED,

}

//NOTE. Action Creator
export type UserAction = 
    UserActionSuccessful | 
    UserActionPOSTSuccessful | 
    UserActionUnsuccessful | 
    UserActionPending | 
    UserActionSkipped;
//NOTE. Action Creator messages
export const getUserSuccessful : ActionCreator<UserActionSuccessful> = (user:User) => {
    return {
        type: UserActionTypes.GET_FULFILLED,
        payload: user,
    }
}

export const sendUserSuccessful : ActionCreator<UserActionPOSTSuccessful> = () => {
    return { 
        type: UserActionTypes.GET_FULFILLED
    }
}

export const getUserUnsuccessful : ActionCreator<UserActionUnsuccessful> = () => {
    return {
        type: UserActionTypes.GET_REJECTED,
    }
}
export const getUserPending : ActionCreator<UserActionPending> = () => {
    return {
        type: UserActionTypes.GET_PENDING,
    }
}

export const getUserSkipped : ActionCreator<UserActionSkipped> = () => {
    return {
        type: UserActionTypes.GET_SKIPPED,
    }
}

//TODO
//NOTE. Define Action
// export const registerUser: ActionCreator<ThunkAction<void, RootState, unknown, UserAction>> =
// () => async(dispatch,getState): Promise<UserAction> => {
//     const {user} = getState();

//     dispatch(getUserPending());

//     try {
//         const response = await apiRegisterUser(user);

//         if ('payload' in response) {
//             return dispatch(getUserSuccessful(user));
//         }

//         return dispatch(getUserUnsuccessful());

//     } catch (error) {
//         console.log(error);
//         return dispatch(getUserUnsuccessful());
//     }

// }