import { assets } from '../assets/assets.jsx'

import { GiFullPizza } from 'react-icons/gi'

import './AboutBanner.css'

import About from '../pages/About'

function AboutBanner() {

    return (

        <div className='about-banner container-fluid py-5 '>

            <div className='row g-3'>

                <div className=" banner-img col-lg-6 rounded "> 

                    <img src={assets.cafechairs} alt="" className=' img-fluid ' />

                </div>

                <div className='col-lg-6 right bg-dark text-white'>

                    <h1 className='mb-4 mark' >
                        Welcome to  <GiFullPizza />
                        <span>Pizza</span> restaurant

                    </h1>

                    <p><span className=' d-block h3 strong' >Crafted with Passion, Baked to Perfection</span>At our pizza outlet, every bite tells a story of authentic flavors and handcrafted goodness. We use only the freshest, locally-sourced ingredients and slow-rise dough that's made in-house daily. From our classic Margherita to our bold signature creations, our pizzas deliver a crisp, golden crust with the perfect balance of melted cheese and rich, savory toppings.</p>

                    <p><span className='d-block h3 strong' >A Slice Above the Rest</span> What sets us apart is our obsession with quality and taste. Our chefs bring culinary artistry into every pizza, combining traditional techniques with innovative recipes. Whether you're a fan of fiery spice, loaded cheese, or vegan delights, there’s a flavor crafted just for you. Each pizza is stone-baked for that unbeatable aroma and satisfying crunch.</p>

                    <p><span className='d-block h3 strong'>More Than a Pizza Place . It’s an Experience</span>

                        Our outlet isn’t just about food  it’s where friends gather, families laugh, and good times are shared. With a cozy, vibrant ambiance, friendly staff, and a welcoming vibe, we’re your go-to hangout spot. Come in for the pizza, stay for the warmth  and leave with a full heart and a happy belly.
                    </p>

                </div>

            </div>

        </div>

    )

}

export default AboutBanner