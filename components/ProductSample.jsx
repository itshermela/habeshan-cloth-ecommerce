import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductSample = () => {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1>Unique and Pure Cotton Hand Woven Habesha Dress</h1>
      </div>

      <div className='content'>
        <div className='left'>
          <div className="feature-background">
            Different from others
          </div>
          <div>
            <h3>Using Good Quality Materials</h3>
            <p>We use best high-quality clothing materials such as slik and cotton.</p>
          </div>
          <div>
            <h3>100% Handmade Products</h3>
            <p>The products are made by hand in a neat manner.</p>
          </div>
          <div>
            <h3>Modern Fashion Design</h3>
            <p>Modern designs are taken into consideration.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>We make discount for customers who buy bulk of our products.</p>
          </div>
        </div>

        <div className='right'>
          <Image 
            src={`https://res.cloudinary.com/dpq667pa4/image/upload/v1685360567/habeshan-clothes/Ethiopian-Traditional-Dress-1-6_a9w0tt.jpg`} 
            width={300} height={350} alt='img' />
          <div>
            <p>This piece is ethically crafted with pure cotton and silk. It is simple and classic but trending habesha dress that can be worn in many special events. It is made of cotton fabric, and typically comes in white, grey or beige shades as needed.</p>
            <Link href={'/products'}>
              <button className='btn' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSample