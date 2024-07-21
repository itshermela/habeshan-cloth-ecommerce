import React from 'react'
import Allproducts from '../../components/AllProducts'
import { XataClient } from '../../src/xata'

const male = ({AllmaleProducts}) => {
    return (
        <div className='Allproducts-container'>
            {AllmaleProducts?.map(product => (
                <Allproducts
                    key={product.id}
                    id={product.id}
                    url={product.image_url}
                    name={product.name}
                    price={product.price}
                    categoryName={product.category.name}
                />
            ))}
        </div>
      )
}

const xata = new XataClient({
    apiKey: process.env.NEXT_PUBLIC_XATA_API_KEY,
});
export const getServerSideProps = async () => {
    const response = await xata.db.product.filter({"category.name": "Men"}).getMany()
    return {
    props: {
        AllmaleProducts: response
    }
    }
}

export default male
