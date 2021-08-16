import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import Order from "../../../models/Order";
import { apiGetOrderHistory } from "../../../remote/userApi";

type OrderHistory = { }
export default function OrderHistory(): JSX.Element {
    const user = useSelector(selectUser);

    const [orders, setOrder] = useState<Order[]>([]);

    async function retrieveOrderHistory() {

        let orderObject:any = await apiGetOrderHistory(user.userId);

        if (orderObject.length !== 0) {
            console.log("I got current Order");
            console.log(orderObject);
            setOrder(orderObject);
        } else {
            console.log("I haven't got current user");
        }

    }
    useEffect(() => {
        retrieveOrderHistory();
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
                                    {orders.map( order => 
                                        
                                        <tr>
                                            <td>{order.orderId}</td>
                                            <td>{order.invoice?.invoiceStatus}</td>
                                            <td>{order.invoice?.usdAmount}</td>
                                            <td>{order.invoice?.nativeCurrency}</td>
                                            <td>{order.invoice?.nativeAmount}</td>
                                            <td>{order.user?.username}</td>
                                            <td>{order.book?.bookName}</td>
                                            <td><button className="bttn-slant bttn-md bttn-danger bttn-no-outline">Cancel</button></td>
                                        </tr>
                                        
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

