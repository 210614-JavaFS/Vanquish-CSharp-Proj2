import User from "../models/User";
import invoiceClient from "./invoiceClient";



//New Order Invoice
// export const apiNewInvoice = async (user: User):Promise<User[]> => {
//     const response = await invoiceClient.post<User[]>('/login', user,
//     {withCredentials: true}
//     );

//     console.log(response.status)
//     // console.log(`Response status is: ${response.status}`)
//     if (response.status === 200) {

//         window.location.reload();
//         return response.data;
//     } else {
//         alert("Login is not successful");
//         return [];
//     }
// }
