import React from 'react'
import '../css/footer.css'
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

import { NavLink } from 'react-router-dom'

function footer() {
    return (
        <div className='bg-dark py-4'>

            <div className="container-fluid bg-dark py-4 px-4 ">

                <div className="row">

                    <div className="col-md-3 text-white px-4 ">

                        <h6 className='mb-3' >ABOUT US</h6>

                        <p>At Pizza restaurant , we serve handcrafted pizzas made with fresh ingredients and a whole lot of love. Your perfect slice is just a click away!</p>

                    </div>

                    <div className="col-md-3 text-white services px-4">

                        <ul class="nav flex-column justify-content-start ">

                            <h6 className='mb-3 text-left' >SERVICES</h6>

                            <li class="nav-item">
                                <NavLink className="nav-link active" href="#">Cooked</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" href="#">Deliver</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" href="#">Quality Foods</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link " href="#">Mixed</NavLink>
                            </li>

                        </ul>


                    </div>


                    <div className="col-md-3 text-white services ">

                        <ul class="nav flex-column ">

                            <h6 className='mb-3' >HAVE A QUESTION ?</h6>

                            <li class="nav-item">

                                <div className='link-box '>
                                    <CiLocationOn className='footer-icons' />
                                    <p>203 Fake St.Mountain View,<br />
                                        San Francisco , California,<br />
                                        USA</p>
                                </div>
                            </li>


                            <li class="nav-item">
                                <div className='link-box'>
                                    <CiPhone className='footer-icons' />
                                    <p>+2 392 3929 210</p>

                                </div>
                            </li>
                            <li class="nav-item">
                                <div className='link-box'>

                                    <MdEmail className='footer-icons' />
                                    <p>info@pizzaoutletmangaer.com</p>

                                </div>
                            </li>


                        </ul>

                    </div>

                    <div className="blog">



                    </div>

                </div>

            </div>

            <div className="copyright text-white text-center">
                <p>Copyright @2025 All rights reserved | </p>
            </div>

        </div>
    )
}

export default footer





