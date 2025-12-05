import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function AddPizza() {

    // Firstly data from the form incoming is beinng saved in the state variables and then they are passed to the formData object , which then is send to the backend using axios post method. 

    // We had to use AXIOS here 

    const [image, setimage] = useState(false)

    const url = "http://localhost:5000" 

    const [data, setData] = useState({

        name: "",
        price: "",
        description: ""

    })


    const changeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value 

        // [] is used to access the property of an object dynamically, allowing you to use a variable as the key. called as computed property value. 

        setData(data => ({ ...data, [name]: value }))   

    }

    const SubmitHandler = async (event) => {

        event.preventDefault();

        const formData = new FormData();

        formData.append("name", data.name)
        formData.append("price", data.price)
        formData.append("description", data.description)
        formData.append("image", image) 

        const response = await axios.post(`${url}/api/pizza/add`, formData)
        //const response = await axios.post("/api/pizza/add", formData)
        if (response.data.success) {

            alert("Product Added Successfully")

            setData(
                {
                    name: "",
                    price: "",
                    description: ""
                }
            )

            setimage(false)
        }

        else {

            alert("Error")

        }

    }

    // It is used to collect and format form field data (including files) so you can send it to a server, usually via an HTTP request.

    return (

        <div>

            <div className='bg-dark text-white text-center p-3 mt-3 '> 

                <h2>Add Product Details</h2>

            </div>

            <div className="container mt-4">

                <div className="row">

                    <div className="col-6 text-center border py-3 mx-auto">


                        <form action="" onSubmit={SubmitHandler} >

                            <div className='my-3'>
                                <input name='name' value={data.name} onChange={changeHandler} type="text" className=' w-80 px-4 py-2 form-control' placeholder='Product Name' />
                            </div>

                            <div className="my-3">
                                <input type="file" onChange={(e) => setimage(e.target.files[0])} className=' form-control py-2 w-80 text-center ' />
                            </div>

                            <div className="my-3">
                                <input type="number" onChange={changeHandler} value={data.price} className='px-4 form-control py-2 w-80' placeholder='Price' name='price' />
                            </div>


                            <div className="my-3 ">
                                <textarea className=' form-control px-4' value={data.description} onChange={changeHandler} name="description" rows="2" id="">

                                </textarea>
                            </div>

                            <div className='my-3'>
                                <button className=' px-4 py-2 btn btn-dark' >Submit</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    )
}


