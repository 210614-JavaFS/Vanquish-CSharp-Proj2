import expandIcon from "../../../css/icons/expand-arrows-alt-solid.svg";
import Order from "../../../models/Order";


type Props = {
    index: number;
    order: Order;
}

const Modal: React.FunctionComponent<Props> = ({index, order}) => {

    return (
        <div className="modal fade" id={`modal${index}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog " role="document">
                <div className="modal-content modal-bg transparent-modal">
                    <div className="modal-header justify-content-center">
                        <h3 className="modal-title font-caps">User Details</h3>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body cousine-font">
                                <div className="row">
                                    <div className="col">
                                        <p>
                                            <span>First Name: </span>
                                            <span>{order.user?.firstName}</span>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <p>
                                            <span>Last Name: </span>
                                            <span>{order.user?.lastName}</span>
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    <span>Email: </span>
                                    <span>{order.user?.userEmail}</span>
                                </p>
                                <p>
                                    <span>Username: </span>
                                    <span>{order.user?.username}</span>
                                </p>
                                <p>
                                    <span>Address: </span>
                                    <span>{order.user?.address}</span>
                                </p>
                                <p>
                                    <span>User Type: </span>
                                    <span>{order.user?.userRole}</span>
                                </p>

                                <div className="modal-footer">
                                    <button type="button" className="bttn-fill bttn-sm bttn-danger bttn-no-outline" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;