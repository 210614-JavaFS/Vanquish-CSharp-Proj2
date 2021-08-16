import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Order from "../../../models/Order";
import { apiGetAllOrders } from "../../../remote/adminApi";
import { apiUpdateUserOrder } from "../../../remote/userApi";

import expandIcon from "../../../css/icons/expand-arrows-alt-solid.svg";
import UserDetailsModal from "./UserDetailsModal";

export default function Login(): JSX.Element { 

    const user = useSelector(selectUser);

    const [orders, setOrder] = useState<Order[]>([]);

    async function retrieveAllOrders() {

        let orderObject:any = await apiGetAllOrders();

        if (orderObject.length !== 0) {
            console.log("I got all Orders");
            console.log(orderObject);
            setOrder(orderObject);
        } else {
            console.log("I haven't got any orders");
        }

    }
    useEffect(() => {
        retrieveAllOrders();
      }, []); 

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="row ">
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <h1 className="font-caps">Order History Page</h1>
                            </div>
                        </div>
                    </div>

                    <div className="row modal-content padding-top-sm transparent-nav">
                        <div className="justify-content-center modal-title cousine-font">
                            <span>User:</span>
                            <span className="padding-left-sm">{user.username}</span><br/>
                        </div>
                        <div className="justify-content-center modal-body">

                            <table className="table">
                                <thead>
                                    <tr className="font-caps font-size-sm ">
                                        <th className="col-sm-1">Order ID</th>
                                        <th className="col-sm-1">Status</th>
                                        <th className="col-sm-1">USD Amount</th>
                                        <th className="col-sm-2">Native Currency</th>
                                        <th className="col-sm-2">Native Amount</th>
                                        <th className="col-sm-2">User</th>
                                        <th className="col-sm-3">Book's Name</th>
                                        <th className="col-sm-2"></th>
                                    </tr>
                                </thead>
                                <tbody className="black-txt cousine-font">
                                    {orders.map( (order, index) => 
                                            <tr key={index}>
                                                <td>{order.orderId}</td>
                                                <td>{order.invoice?.invoiceStatus}</td>
                                                <td>{order.invoice?.usdAmount}</td>
                                                <td>{order.invoice?.nativeCurrency}</td>
                                                <td>{order.invoice?.nativeAmount}</td>
                                                <td>{order.user?.username} 
                                                    <img 
                                                        className="expand-icon" 
                                                        src={expandIcon} 
                                                        width={15} 
                                                        height={15} 
                                                        data-bs-toggle="modal"
                                                        data-bs-target={`#modal${index}`}
                                                        alt="expand"
                                                        />
                                                </td>
                                                <td>{order.book?.bookName}</td>
                                                {
                                                    (order.invoice?.invoiceStatus !== "cancelled" && order.invoice?.invoiceStatus !== "approved") ? 
                                                        <td><button 
                                                                className="bttn-slant bttn-md bttn-success bttn-no-outline"
                                                                onClick={()=> apiUpdateUserOrder(order.invoice?.invoiceID, "approved")}
                                                            >Approve</button>
                                                        </td>
                                                    : null
                                                }
                                                {
                                                    (order.invoice?.invoiceStatus !== "cancelled" && order.invoice?.invoiceStatus !== "rejected")? 
                                                        <td><button 
                                                                className="bttn-slant bttn-md bttn-danger bttn-no-outline"
                                                                onClick={()=> apiUpdateUserOrder(order.invoice?.invoiceID, "rejected")}
                                                            >Reject</button>
                                                        </td>
                                                    : null
                                                }
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                            {orders.map( (order, index) => 
                                <UserDetailsModal index={index} order={order}/>   
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}