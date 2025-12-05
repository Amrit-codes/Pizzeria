import { NavLink } from "react-router-dom";

import './Banner.css'

export default function Banner() {

    return (

        <div style={{ marginTop: "88px" }} className="banner container-fluid" >

            <div className="bannertext typewriter animate__animated animate__fadeInUp">

                <h1 className="heading">Welcome</h1>

                <h2 className="heading">We cooked your desired <br /><span className="pizza-recipe"> Pizza recipe   </span> </h2>

                <div className="mt-2">

                    <NavLink ><span className=" order badge text-bg-warning fs-6 p-3  ">Order Now</span></NavLink>

                </div>

            </div>

        </div>

    )

}