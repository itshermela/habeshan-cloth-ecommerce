import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Allproducts = ({url, id, name, price, categoryName}) => {  
  return (
        <div>
          <Link href={`/shop/${id}`}>
            <div className='Allproduct-card'>
              <Image className='Allproduct-image'
                  src={url}
                  width={320}
                  height={300}
                  alt='Products'
              />
              <p className='Allproduct-name'>{name}</p>
              <p className='Allproduct-tags'>{categoryName}</p>
              <p className='Allproduct-price'>${price}</p>  
            </div>
          </Link>
        </div>
  )
}

export default Allproducts