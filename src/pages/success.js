import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { runConfetti } from '../../lib/utils'
import { removeFromCart } from '../../redux/cartSlice'


const successPay = () => {
    const cartList = useSelector((state) => state.cart)
    const dispatch = useDispatch()
 
    useEffect(() => {
        {dispatch(removeFromCart(cartList))}
        localStorage.clear();
        runConfetti();
    }, []);

    return (
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill size={80} />
            </p>
            
            <h1>Thank you for your order!</h1>
            <p>Check your email inbox for the receipt</p>
            <p className='description'>
                If you have any questions, please email 
                <a href="herm:habeshamarket@example.com">
                    habeshamarket@example.com
                </a>
            </p>
            <Link href="/products">
                <button className='btn' type="button" width="300px">
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}

export default successPay