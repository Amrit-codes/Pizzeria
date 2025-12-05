import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

export default function Pizzameals() {

    const { pizza_meals, addToCart, removeCart, mealsItems } = useContext(StoreContext)

    return (

        // <div className="container-fluid pt-4 bg-dark text-white " >

        //     <h3 className="text-center text-uppercase">OUR POPULAR MEALS</h3>

        //     <div className="row g-4">

        //         {

        //             pizza_meals.map((meals, index) => {

        //                 return (

        //                     <div className="col-md-4 p-4 rounded border border-white h-100" key={index} >

        //                         <div className=" shadow-sm rounded h-auto ">

        //                             <img src={meals.image} className=' rounded pizza-img' alt="" />

        //                             <div className="">

        //                                 <p className='fs-4 fw-2 text-center'>{meals.name}</p>

        //                                 <p className=' d-flex justify-content-evenly fw-bold'>
        //                                     <span> <FaIndianRupeeSign className='' /> {meals.price} </span>

        //                                     {

        //                                         !mealsItems[meals.id] ? <FaCartPlus className=" fs-2 add-to-cart-icon" onClick={() => addToCart(meals.id)} /> :
        //                                             <div>

        //                                                 <IoIosRemoveCircle className=" fs-2 text-danger meal-icons-remove"
        //                                                     onClick={() => removeCart(meals.id)} />

        //                                                 {

        //                                                     mealsItems[meals.id]
        //                                                 }

        //                                                 <IoIosAddCircle className=" fs-2 text-success meal-icons-add" onClick={() => addToCart(meals.id)} />


        //                                             </div>

        //                                     }

        //                                 </p>

        //                                 <p className='card-text'>
        //                                     {meals.description}
        //                                 </p>

        //                                 <div>



        //                                 </div>


        //                             </div>
        //                         </div>


        //                     </div>
        //                 )
        //             }
        //             )


        //         }

        //     </div>
        // </div> 

        <div className="container-fluid bg-dark text-white p-5">
            <h3 className="text-center text-uppercase mb-4 display-6">🍕 Our Popular Meals</h3>

            <div className="row g-4">
                {
                    pizza_meals.map((meals, index) => (

                        <div className="col-md-6 col-lg-4" key={index}>

                            <div className="card h-100 bg-secondary text-white shadow-lg border-0 rounded-4">
                                <img
                                    src={meals.image}
                                    className="card-img-top rounded-top-4"
                                    style={{ height: '220px', objectFit: 'cover' }}
                                    alt={meals.name}
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <h5 className="card-title text-center fw-bold">{meals.name}</h5>
                                    <p className="card-text text-light small">{meals.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-auto">
                                        <span className="fw-bold">
                                            <FaIndianRupeeSign className="me-1" />
                                            {meals.price}
                                        </span>

                                        {!mealsItems[meals.id] ? (
                                            <FaCartPlus
                                                className="fs-4 text-white hover-scale"
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => addToCart(meals.id)}
                                            />
                                        ) : (
                                            <div className="d-flex align-items-center gap-2">
                                                <IoIosRemoveCircle
                                                    className="fs-4 text-danger"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => removeCart(meals.id)}
                                                />
                                                <span className="fw-bold">{mealsItems[meals.id]}</span>
                                                <IoIosAddCircle
                                                    className="fs-4 text-success"
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => addToCart(meals.id)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>


    )

}