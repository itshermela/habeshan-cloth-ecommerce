import Image from 'next/image'
import Link from 'next/link'
import styles from '../src/styles/ProductCard.module.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export const ProductCard = ({url, id, name, price, categoryName, product}) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.card}>
            <Image className={styles.image}
                src={url}
                width={320}
                height={300}
                alt='product card'
            />
            <h4 className={styles.name}>{name}</h4>
            <h5 className={styles.price}>${price}</h5>
            <h6 className={styles.category}>{categoryName}</h6>
            <div className={styles.buttons}>
                <Link href={`/shop/${id}`}>
                    <button className={styles.buttonone}>
                    Product Details
                    </button>
                </Link>
                <button
                    className={styles.buttontwo}
                    onClick={() => dispatch(addToCart(product))}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}