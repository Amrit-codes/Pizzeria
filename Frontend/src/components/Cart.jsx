import { StoreContext } from "../Context/StoreContext"
import { useContext } from "react"
import { MdDelete } from "react-icons/md";
import { LuIndianRupee } from "react-icons/lu";
import { useNavigate } from 'react-router-dom'
import '../index.css'

export default function Cart() {

    const { pizza_meals, mealsItems, removeCart } = useContext(StoreContext)
    const { getAmount } = useContext(StoreContext)

    console.log(mealsItems);

    const navigate = useNavigate()

    return (

        <div style={{ marginTop: "150px" }} className="container">

            <div style={{ fontSize: "50px" }} className="d-flex justify-content-center mb-3">Billing Section</div>

            <table className="table table-dark table-striped ">

                <thead className="text-center">
                    <tr>
                        <td >Items</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Total</td>
                        <td>Remove</td>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {
                        pizza_meals.map((item, index) => {

                            if (mealsItems[item.id] > 0) {

                                return (

                                    <tr key={index}>
                                        <td>
                                            <img className="cart-img" src={item.image} alt="" />
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {mealsItems[item.id]}
                                        </td>
                                        <td>
                                            {item.price * mealsItems[item.id]}
                                        </td>

                                        <td>
                                            <MdDelete className="delete_meal" onClick={() => { removeCart(item.id) }} />
                                        </td>

                                    </tr>

                                )
                            }

                        }
                        )



                    }
                </tbody>

            </table>

            <div className="total-amount">

                <p className='text-success fw-bold mt-5'>Amount : <LuIndianRupee />{getAmount()}</p>

                <p><button onClick={() => { navigate('/login') }} className="btn btn-success">Proceed to checkout</button></p>

            </div>

        </div>

    )

}