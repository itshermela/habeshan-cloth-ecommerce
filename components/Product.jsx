import Image from 'next/image'
import Link from 'next/link'

export const Product = ({url, id, name, price}) => {
    return (
        <div>
            <Link href={`/shop/${id}`}>
                <div className='product-card'>
                    <Image className='product-image'
                        src={url}
                        width={320}
                        height={300}
                        alt='product'
                    />
                    <h4 className='product-name'>{name}</h4>
                    <h5 className='product-price'>${price}</h5>
                </div>
            </Link>
        </div>
    )
}