import { Redirect } from "react-router-dom";
import User from "../models/User";
import userClient from "./userClient"

// Register
export const apiRegisterUser = async (user: User):Promise<User[]> => {
    console.log("hit register route")
    const response = await userClient.post<User[]>('/register', user);

    console.log(`Register response status is ${response.status}`)
    if (response.status === 201) {
        console.log("successfully registered")
        window.location.reload();
        return response.data;
    } else {
        console.log("failed to register")
        return [];
    }

}

//login
export const apiLoginUser = async (user: User):Promise<User[]> => {
    const response = await userClient.post<User[]>('/login', user,
    {withCredentials: true}
    );

    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {

        window.location.reload();
        return response.data;
    } else {
        alert("Login is not successful");
        return [];
    }
}

//get Current User Information
export const apiGetCurrentUser = async ():Promise<User[]> => {
    const response = await userClient.get<User[]>('/getcurrentuser', {
        headers: {
            'Access-Control-Allow-Credentials':true
        }
    });

    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}

//Logout user
export const apiLogout = async ():Promise<unknown> => {
    const response = await userClient.get<unknown>('/logout', {withCredentials: true});
    console.log('Calling Logout');
    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {
        // window.location.reload();
        return response.data;
    } else {
        return [];
    }
}

// update User information
export const apiUpdateUser = async (user: User):Promise<User[]> => {
    console.log("hit updated route");
    
    const response = await userClient.put<User[]>('/profileUpdate', user, {withCredentials: true});

    console.log(`Update response status is ${response.status}`)
    if (response.status === 201) {
        console.log("successfully updated")
        // window.location.reload();
        return response.data;
    } else {
        console.log("failed to update")
        return [];
    }

}

