import User from "../models/User";
import userClient from "./userClient"

// Register
export const apiRegisterUser = async (user: User):Promise<User[]> => {
    const response = await userClient.post<User[]>('/register', user);

    if (response.status === 201) {
        return response.data;
    }

    return [];
}

//login
export const apiLoginUser = async (user: User):Promise<User[]> => {
    const response = await userClient.post<User[]>('/login', user);

    // console.log(`Response status is: ${response.status}`)
    if (response.status === 201) {
        alert("Login is successful")
        return response.data;
    }

    alert("Login is not successful")
    return [];
}