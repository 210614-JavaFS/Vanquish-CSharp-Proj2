import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { CurrencyConverter } from '../components/CurrencyConverter'

export const SideNav = () => {
    return (
        <div>
            <div className="">
                <div className="">
                    SideNav
                </div>
                <br></br>

                <div className="flexcol">
                    <ul className="margintop flexcol">
                        <label style={{ fontSize: ".9rem" }}>Option 1</label>
                        <Link to="/currency" >
                            <il> <button style={{ borderRadius: "50px", width: "10rem" }} className="btn btn-primary">Currency Conv</button></il>
                        </Link>

                        <br></br>
                        <label style={{ fontSize: ".9rem" }}>Option 2</label>
                        <Link to="/test" >   <il><button style={{ borderRadius: "50px", width: "10rem" }} className="btn btn-primary">Option 2</button></il></Link>

                        <br></br>
                        <label style={{ fontSize: ".9rem" }}>Option 3</label>
                        <il><button style={{ borderRadius: "50px", width: "10rem" }} className="btn btn-primary">Option 3</button></il>
                        <br></br>
                        <label style={{ fontSize: ".9rem" }}>Option 4</label>
                        <il><button style={{ borderRadius: "50px", width: "10rem" }} className="btn btn-primary">Option 4</button></il>
                        <br></br>
                        <label style={{ fontSize: ".9rem" }}>Option 5</label>
                        <il><button style={{ borderRadius: "50px", width: "10rem" }} className="btn btn-primary">Option 5</button></il>



                    </ul>
                </div>

            </div>

        </div >
    )
}
