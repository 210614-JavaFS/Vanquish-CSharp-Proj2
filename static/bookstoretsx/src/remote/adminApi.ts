import adminClient from "./adminClient";

//get Current User Information
export const apiGetAllOrders = async ():Promise<unknown[]> => {
    const response = await adminClient.get<unknown[]>('/allorder');

    console.log(response.status)
    // console.log(`Response status is: ${response.status}`)
    if (response.status === 200) {
        return response.data;
    } else {
        return [];
    }
}