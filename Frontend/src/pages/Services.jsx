import { FaPizzaSlice } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

import '../pages/services.css'

import '../index.css'

import Footer from '../components/footer.jsx'

export default function Services() {

    return (

        <div>
            <div className="service ">
                <div className="service-content  animate__animated animate__fadeInUp ">
                    <p className="service-text ">SERVICES</p>
                    <p className="breadcrumb"> <NavLink to="/" className="link"> HOME &nbsp; </NavLink>  <span>/</span> <NavLink to="/Services" className="link" > &nbsp; SERVICES  </NavLink> </p>
                </div>
            </div>

            <section className="gallery py-4 bg-dark mt-0">

                <div className="container gallery1 py-4">

                    <div className="row py-4">
                        <div className="col"><img src="/bartender1.jpeg" alt="" /></div>
                        <div className="col"><img src="/bartender2.jpeg" alt="" /></div>
                        <div className="col"><img src="/bartender3.jpeg" alt="" /></div>
                        <div className="col"><img src="/bartender4.jpeg" alt="" /></div>
                    </div>

                </div>

                <div className="container ">

                    <div className="row ">
                        <div className="col-12 gallery2">



                        </div>
                    </div>

                </div>

            </section>

            <section className="service-list  ">



                <div className="service-list  animate__animated animate__fadeInUp ">



                    <div className="service-line text-center pt-4">

                        <h4>OUR SERVICES</h4>

                        <p className="">Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>

                    </div>


                    <div className="container">

                        <div className="row mt-4 ">

                            <div className="col-md-4  ">

                                <div className="d-flex justify-content-center w-100">
                                    <div className="icons">
                                        <FaPizzaSlice className="icon" />
                                    </div>
                                    ``
                                </div>
                                <p className="mt-4 text-center fw-bold lead "> HEALTHY FOODS</p>
                                <div className="media-body text-center px-2">
                                    <p className="text-center  ">We use fresh ingredients to cook our dishes, ensuring the food you get is healthy,hygeneic and nutrient-rich. </p>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className=" d-flex justify-content-center w-100">
                                    <div className="icons">
                                        <FaMotorcycle className="icon" />
                                    </div>
                                </div>
                                <p className="mt-4 text-center fw-bold lead " >FASTEST DELIEVERY</p>

                                <div className="media-body text-center ">
                                    <p className="text-center">We ensure you get your food deleivered at the earliest, thanks to our outlets present in every corner of the city. </p>

                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className=" d-flex justify-content-center w-100">
                                    <div className="icons">
                                        <FaMedal className="icon" />
                                    </div>

                                </div>
                                <p className="mt-4 text-center fw-bold lead " >ORIGINAL RECIPES</p>

                                <div className="media-body">
                                    <p className="text-center">We use original recipes to give you the most authentic taste and real taste.  </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            
            <Footer />

        </div>
    )

}
