import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai'
import {HiOutlineTrash} from 'react-icons/hi'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'

const Cart = () => {
  const cartList = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const totalPrice = () => {
  return cartList.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  )
  }
  return (
    <div className='cart-wrapper'>
      <h2>Shopping Cart</h2>
      <div className='cart-container'>
        <div className='cart-items'>
          {cartList?.length === 0 ? (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h1>Your shopping bag is empty</h1>
          </div>
          ) : (
          <>
            {cartList?.map((item) => (
            <div className='item-card' key={item.id}>
              <div className='item-image'>
                <Image 
                    src={item.image_url} 
                    width={400}
                    height={450}
                    alt='cart' />
              </div>
              <div className='item-details'>
                <div className='name-and-remove'>
                    <h3>{item.name}</h3>  
                    <button type='button' onClick={() => dispatch(removeFromCart(item))} className='remove-item'>
                      <HiOutlineTrash size={28} />  
                    </button>
                </div>
                <p className='item-tag'>Dress</p>
                <p className='delivery-est'>Delivery Estimation</p>
                <p className='delivery-days'>5 Working Days</p>
                <div className='price-and-qty'>
                    <span className='price'>${item.price * item.quantity}</span>  
                    <div>
                        <span className='minus' onClick={() => dispatch(decrementQuantity(item))}><AiOutlineMinus /></span>
                        <span className='num' onClick=''>{item.quantity}</span>
                        <span className='plus' onClick={() => dispatch(incrementQuantity(item))}><AiOutlinePlus /></span>
                    </div>
                </div>
              </div>
            </div>
            ))}
          </>
          )}
        </div>
        {cartList.length >= 1 && (
            <div className='order-summary'>
              <h3>Order Summary</h3>
              <div className='subtotal'>
                <p>Sub Total</p>
                <span>${totalPrice()}</span>
              </div>
              <div>
                <Link href={'/success'}>
                  <button className='btn' type='button'>Process to Checkout</button>
                </Link>
              </div>         
            </div>
        )}  
      </div>
    </div>
  )
}


export default Cart