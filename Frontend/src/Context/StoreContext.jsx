import { createContext, useState } from 'react'
import { pizza_meals } from '../assets/assets.jsx'

// Functions to add n remove items from cart have been defined in context so that they can be accessed anywhere, 
// in any of the Component. 

// ----created the context-----

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    var contextvalue = {
        pizza_meals
    }

    const [mealsItems, setMealItems] = useState([]
    );

    const addToCart = (itemId) => {

        if (!mealsItems[itemId]) {
            setMealItems((prev) => ({ ...prev, [itemId]: 1 })) 
            console.log(mealsItems)
        }

        else {
            setMealItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
            
        }

        // If the item is not in the cart, add it with quantity 1
        // If it is already in the cart, increase its quantity by 1

    }

    const removeCart = (itemId) => {
        setMealItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getAmount = () => {

        let totalAmount = 0
        for (const item in mealsItems) {

            if (mealsItems[item] > 0) {  
                let iteminfo = pizza_meals.find((product) => product.id == item)
                totalAmount = totalAmount + iteminfo.price * mealsItems[item] 
            }

        }

        return totalAmount

    // This function calculates the total amount of all items in the cart by multiplying the price of each item by its quantity and summing them up.

    }



    contextvalue = {
        pizza_meals,
        mealsItems,
        setMealItems,
        addToCart,
        removeCart,
        getAmount

    }



    return (

        <StoreContext.Provider value={contextvalue}>

                {/* // The context value is passed to the Provider so that it can be accessed in any component that consumes this context. */}

            {props.children}

        </StoreContext.Provider>

    )
}

export default StoreContextProvider
