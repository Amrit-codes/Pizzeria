import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid d-flex justify-content-between">
                    <NavLink className="navbar-brand" href="#">Admin</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> 
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-auto " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/dashboard">Dashboard</NavLink>

                        </div>



                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/addPizza">AddPizza</NavLink>

                        </div>

                        <div className="navbar-nav">
                            <NavLink className="nav-link active" aria-current="page" to="/List">List Items</NavLink>

                        </div>


                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar






