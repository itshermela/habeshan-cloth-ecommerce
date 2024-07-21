import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    addToCart: (state, action) => {
    const productExists = state.cart?.find((product) => product.id === action.payload.id)
    if(productExists) {
    productExists.quantity++
    } else {
    state.cart.push({
        ...action.payload, quantity: 1
    })
    }
    toast.success(`added to the cart.`);
    },
    incrementQuantity: (state, action) => {
    const product = state.cart?.find((item) => item.id === action.payload.id)
    product.quantity++
    },
    decrementQuantity: (state, action) => {
    const product = state.cart?.find((item) => item.id === action.payload.id)
    if (product.quantity === 1) {
    const index = state.cart.findIndex((item) => item.id === action.payload.id)
    state.cart.splice(index, 1)
    } else {
    product.quantity--
    }
    },
    removeFromCart: (state, action) => {
    const index = state.cart?.findIndex((item) => item.id === action.payload.id)
    state.cart.splice(index, 1)
    }
    }
})

export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
} = cartSlice.actions


export default cartSlice.reducer