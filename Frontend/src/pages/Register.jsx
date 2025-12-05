import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'


function Register() {

    const [data, setData] = useState({

        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()
    const url = "http://localhost:5000"

    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))

    }

    const onSubmitHandler = async (event) => {

        event.preventDefault();

        const response = await axios.post(`${url}/api/user/register`, data)

        if (response.data.message) {
            setData({
                name: "",
                email: "",
                password: ""
            })

            navigate('/login')
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div>

            <div style={{ marginTop: "150px" }} className="container ">

                <div className="row">

                    <div className="col-md-6">

                        <img className='img-fluid w-100' src={assets.Register_Image} alt="" />

                    </div>

                    <div className="col-md-6">

                        <form onSubmit={onSubmitHandler} >

                            <div className="mb-3">

                                <label for="exampleInputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" onChange={onChangeHandler} id="exampleInputName" name='name' value={data.name} aria-describedby="emailHelp" />

                            </div>
                            <div class="mb-3">

                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" value={data.email} name='email' onChange={onChangeHandler} id="exampleInputEmail1" aria-describedby="emailHelp" />

                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onChange={onChangeHandler} value={data.password} name='password' className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Save</button>



                        </form>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Register
