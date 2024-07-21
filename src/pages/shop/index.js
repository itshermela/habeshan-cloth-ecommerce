import Head from 'next/head'
import { ProductCard } from '../../../components/ProductCard'
import styles from '../../../src/styles/Shop.module.css'
import { XataClient } from '../../../src/xata'

const Shop = ({ products }) => {
    return (
        <>
            <Head>
                <title>Habeshan Clothes Shop | Shop</title>
            </Head>
            <div className={styles.container}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        id={product.id}
                        url={product.image_url}
                        name={product.name}
                        price={product.price}
                        categoryName={product.category.name}pro
                    />
                ))}
            </div>
        </>
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

export default Shop