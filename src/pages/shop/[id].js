import React from 'react'
import { XataClient } from '../../../src/xata'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cartSlice'
import {CgShoppingCart} from 'react-icons/cg'

const ProductDetails = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className='products'>
            <div className='product-detail-container'>
                <div className='product-images'>
                    <div className='big-image-container'>
                        <Image
                            className='big-image'
                            src={item.image_url}
                            width={400}
                            height={450}
                            alt='image'
                        />
                    </div>
                </div>

                <div className='product-details'>
                    <div className='name-and-category'>
                        <h3>{item.name}</h3>
                        <span>{item.category.name}</span> 
                        <h4>{item.description}</h4>   
                    </div>
                       
                    <div className='add-to-cart'>
                        <button className='btn' type='button'
                            onClick={() => dispatch(addToCart(item))}
                        >
                            <CgShoppingCart size={20} />Add to cart
                        </button>
                        <p className='price'>${item.price}.00</p>  
                    </div>
                </div>
            </div>

            <div className='product-desc-container'>
                <div className='desc-title'>
                    <div className="desc-background">
                        Overview
                    </div>
                    <h2>Product Information</h2>  
                </div>
                <div className='desc-details'>
                    <h4>PRODUCT DETAILS</h4>
                    <p>{item.product_detail}</p>  
                </div>
            </div>
        </div>
    )
}
const xata = new XataClient({
    apiKey: process.env.NEXT_PUBLIC_XATA_API_KEY,
});
export const getServerSideProps = async(context) => {
    const products = await xata.db.product.select(["*", "category.*"]).getAll()
    const item = products.find((product) => product.id === context.params.id)
    return {
    props: {
    item
    }
    }
}

export default ProductDetails