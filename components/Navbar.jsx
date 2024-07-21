import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import {CgShoppingCart} from 'react-icons/cg'
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
    const [showCart, setShowCart] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const cart = useSelector((state) => state.cart)
    const sumOfCartItems = () => {
    return cart?.reduce((accumulator, item) => accumulator + item.quantity, 0)
    }
    return (
      <nav>
        <Link href='/'>
            <Image 
              src={`https://res.cloudinary.com/dpq667pa4/image/upload/v1685566053/habeshan-clothes/Artboard_eslkyb.png`} 
              width={140} height={45} alt='logo' />
        </Link>
        <ul className='nav-links'>
          <Link href='/female'><li>Female</li></Link>
          <Link href='/male'><li>Male</li></Link>
          <Link href='/kids'><li>Kids</li></Link>
          <Link href='/wedding'><li>Wedding</li></Link>
          <Link href='/family'><li>Family</li></Link>
          <Link href='/products'><li>All Products</li></Link>
        </ul>
        {showCart ?
        <Link href='/cart'>
          <button className='cart' onClick={() => setShowCart(false)}>   
            <CgShoppingCart size={22} />
            <span className='cart-item-qty'>{sumOfCartItems()}</span> 
          </button>
        </Link> 
        : 
        <button className='cart' onClick={() => setShowCart(true)}> 
          <CgShoppingCart size={22} />
          <span className='cart-item-qty'>{sumOfCartItems()}</span>
        </button> 
        }
        <div className='navbar-smallscreen'>
          <RiMenu3Line color='black' fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className='navbar-smallscreen_overlay'>
              <Link href='/'>
                <Image className='logo-small' src={`https://res.cloudinary.com/dpq667pa4/image/upload/v1685566053/habeshan-clothes/Artboard_eslkyb.png`} width={140} height={25} alt='logo' />
              </Link>
              <RiCloseLine  color='black' fontSize={27} className='close_icon' onClick={() => setToggleMenu(false)} />
              <ul className='navbar-smallscreen_links'>
                <Link href='/cart'>
                    <button className='cart-small-screen' onClick={() => setShowCart(false)}>   
                      <CgShoppingCart size={22} />
                      <span className='cart-item-qty'>{sumOfCartItems()}</span> 
                    </button>
                </Link> 
                <Link href='/female'><li>Female</li></Link>
                <Link href='/male'><li>Male</li></Link>
                <Link href='/kids'><li>Kids</li></Link>
                <Link href='/wedding'><li>Wedding</li></Link>
                <Link href='/family'><li>Family</li></Link>
                <Link href='/products'><li>All Products</li></Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    )
}
export default Navbar