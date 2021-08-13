import { createSlice } from "@reduxjs/toolkit";

interface State {
    userInfo: any;
}

const initialState = { userInfo: 'loading' } as State;

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state:any) => state.userInfo.userInfo;

export default userSlice.reducer;