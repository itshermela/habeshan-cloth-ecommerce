import React from 'react'
import Allproducts from '../../components/AllProducts'
import { XataClient } from '../../src/xata'

const products = ({products}) => {
    return (
        <div className='Allproducts-container'>
            {products?.map(product => (
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
    const response = await xata.db.product.select(["*", "category.*"]).getAll()
    return {
    props: {
        products: response
    }
    }
}

export default products