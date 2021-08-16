
export default function AboutUs(): JSX.Element {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-3 sm-3"></div>
                <div className="col-md-6 md-6">
                    <div className="modal-content extra-box-space transparent-nav">

                        <div className="d-flex justify-content-center modal-header">
                            <h1 className="font-caps">About Us</h1>
                        </div>
                        
                        <div className="justify-content-center padding-top-sm">
                            <h3>Our Team Members</h3>
                            <ul>
                                <li>Jack Phan</li>
                                <li>Billy Toledo</li>
                                <li>Ling </li>
                                <li>Munib Khan</li>
                                <li>Lou Estimar</li>
                            </ul>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="col-sm-3 sm-3"></div>
            </div>
        </div>
    )
}