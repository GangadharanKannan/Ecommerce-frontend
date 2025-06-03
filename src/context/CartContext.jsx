import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    // Calculate total whenever cart changes
    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        setTotal(newTotal)
    }, [cart])

    // Add to Cart
    const addCart = (newData) => {
        // Check if item already exists in cart
        const existingItem = cart.find(item => item.id === newData.id)
        if (existingItem) {
            // If exists, increase quantity
            setCart(cart.map(item => 
                item.id === newData.id 
                ? {...item, quantity: item.quantity + 1}
                : item
            ))
        } else {
            // If new item, add with quantity 1
            setCart(prev => [...prev, {...newData, quantity: 1}])
        }
    }

    // Remove from Cart
    const deleteCart = (data) => {
        setCart(cart.filter(item => data.id !== item.id))
    }

    // Increase Quantity
    const increaseQuantity = (itemId) => {
        setCart(cart.map(item => 
            item.id === itemId 
            ? {...item, quantity: item.quantity + 1}
            : item
        ))
    }

    // Decrease Quantity
    const decreaseQuantity = (itemId) => {
        setCart(cart.map(item => 
            item.id === itemId && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item
        ))
    }

    return (
        <CartContext.Provider value={{
            cart, 
            total,
            addCart, 
            deleteCart,
            increaseQuantity,
            decreaseQuantity
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider