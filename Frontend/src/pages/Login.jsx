import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

    const url = "http://localhost:5000"

    const [logindata, setLogindata] = useState({

        email: "",
        password: ""

    })
 
    const changeHandler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setLogindata(logindata => ({ ...logindata, [name]: value }))

    }

    const navigate = useNavigate()

    const submitHandler = async (event) => {
        event.preventDefault()
        const response = await axios.post(`${url}/api/user/login`, logindata)

        if (response.data.success) {

            alert(response.data.message)
            setLogindata({
                email: "",
                password: ""
            })

            navigate('/Order') // sir ne apne code ma yaha order kiya hai
        }
        else {
            alert(response.data.message)
        }

    }

    return (
        <div style={{ marginTop: "100px" }}>

            <div className="container mt-4 d-flex align-items-center">

                <div className="row">

                    <div className="col-md-6">
                        <img style={{ height: "60%" }} className='image-fluid' src={assets.Login_Image} alt="" />
                    </div>

                    <div className="col-md-6 mt-5">

                        <form onSubmit={submitHandler} >

                            <div class="mb-3">
                                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" onChange={changeHandler} id="exampleInputEmail1" value={logindata.email} name='email' aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" onChange={changeHandler} value={logindata.password} name='password' class="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>

                            <p>Don't have an account ? <NavLink to="/Register">Register</NavLink></p>

                        </form>

                    </div>

                </div>


            </div>


        </div>
    )
}

export default Login
