import { NavLink } from 'react-router-dom'
import { FaPizzaSlice } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';

function Navbar() {

    const location = useLocation();

    const isOrderpage = location.pathname === '/Order';

    return (

        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 w-100 py-4 mb-4 px-5 z-1 " data-bs-theme="dark">
                <div className=" container-fluid d-flex justify-content-between ">
                    <div>

                        <NavLink className=" d-flex align-items-center  navbar-brand logo gap-2 " href="#">
                            <FaPizzaSlice className="fs-4" />
                            <div className='logo-text '>
                                <span>
                                    delicious
                                </span>
                                pizza
                            </div>
                        </NavLink>

                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        {
                            isOrderpage ? (<NavLink className="nav-link" to="/Home">Logout</NavLink>) :

                                (
                                    <div className="navbar-nav ms-auto ">

                                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        <NavLink className="nav-link" to="/Menu">Menu</NavLink>
                                        <NavLink className="nav-link" to="/Services">Services</NavLink>
                                        <NavLink className="nav-link" aria-disabled="true" to="/Contact">Contact</NavLink>
                                        <NavLink className="nav-link" aria-disabled="true" to="/Cart">Cart</NavLink>

                                        <NavLink className="nav-link" aria-disabled="true" to="/Login">Login</NavLink>

                                    </div>
                                )

                        }

                    </div>
                </div>
            </nav>

        </div>

    )

}

export default Navbar