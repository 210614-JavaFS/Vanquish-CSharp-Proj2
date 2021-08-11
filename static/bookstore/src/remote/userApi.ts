import User from "../models/User";
import userClient from "./userClient"

// Register
export const apiRegisterUser = async (user: User):Promise<User[]> => {
    console.log("hit register route")
    const response = await userClient.post<User[]>('/register', user);

    console.log(`Register response status is ${response.status}`)
    if (response.status === 200) {
        console.log("successfully registered")
        return response.data;
    } else {
        console.log("failed to register")
        return [];
    }

}

//login
export const apiLoginUser = async (user: User):Promise<User[]> => {
    const response = await userClient.post<User[]>('/login', user);

    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {
        return response.data;
    } else {
        alert("Login is not successful");
        return [];
    }
}

//get Current User Information
export const apiGetCurrentUser = async ():Promise<User[]> => {
    const response = await userClient.get<User[]>('/getcurrentuser');

    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}
