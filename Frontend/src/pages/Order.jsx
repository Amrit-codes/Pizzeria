import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext.jsx'
import { LuIndianRupee } from 'react-icons/lu'



    function Order() {

        const { getAmount } = useContext(StoreContext)

        return (
            <div style={{ marginTop: "100px" }} className='container order'>

                <div className="row ">
                    <div className="col-lg-6">
                        <p className='fs-4 fw-4 my-2' >
                            Delievery Information
                        </p>

                        <form action="">

                            <div className="my-3">

                                <input type="text" placeholder='First Name' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="text" placeholder='Last Name' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="email" placeholder='Email' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="text" placeholder='Street' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="text" placeholder='City' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="text" placeholder='State' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="number" placeholder='Zip Code' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="text" placeholder='Country' className='form-control' />

                            </div>

                            <div className="my-3">

                                <input type="number" placeholder='Phone' className='form-control' />

                            </div>

                            <p className='text-success fw-bold '>Amount : <LuIndianRupee />{getAmount()}</p>

                            <div className="">
                                <button className="btn btn-success">Proceed to Pay</button>
                            </div>

                        </form>

                    </div>

                    <div className="col-lg-6">

                       <img  className='mt-4 rounded ' src="delievery image.avif" alt="" />

                    </div>


                </div>

            </div >
        )
    }

export default Order







