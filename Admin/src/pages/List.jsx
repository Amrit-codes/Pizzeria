import { useEffect, useState } from 'react';
import axios from 'axios'
import { MdDelete } from 'react-icons/md'


function List() {

    const [list, setlist] = useState([])

    const url = 'https://localhost:5000'

    const fetchlist = async () => {

        const response = await axios.get(`${url}/api/pizza/list`) 

        if (response.data.success) {
            setlist(response.data.data)
        }

        else {
            alert(response.data.message)
        }
    }

    useEffect(() => {
        fetchlist()
    }, [])


    const remove_item = async (itemId) => {

        // console.log(itemId)

        const response = await axios.post(`${url}/api/pizza/remove`, { Id: itemId })

        await fetchlist()
        if (response.data.success) {
            alert(response.data.message)
        }
        else {
            alert(response.data.message)
        }

    }

    return (

        <div>

            <div className="container">

                <table className='table table-dark table-striped'>

                    <thead>

                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>
                        {

                            list.map((item, index) => {

                                return (

                                    <tr key={index}>

                                        <td><img src={`${url}/images/+ item.image`} className='item-image' alt="" /></td>

                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <MdDelete className='delete_icon' onClick={() => remove_item(item.id)} />
                                        </td>



                                    </tr>

                                )

                            })

                        }
                    </tbody>


                </table>

            </div>

        </div>


    )

}

export default List;