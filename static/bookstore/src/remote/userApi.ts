import User from "../models/User";
import userClient from "./userClient"

// Register
export const apiRegisterUser = async (user: User):Promise<User[]> => {
    const response = await userClient.post<User[]>('/register', user);

    if (response.status === 201) {
        return response.data;
    } else {
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