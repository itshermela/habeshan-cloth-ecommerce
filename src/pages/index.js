import { XataClient } from '../../src/xata'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '../../components/Product'
import ProductSample from '../../components/ProductSample'
import Newsletter from '../../components/Newsletter'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const HomePage = ({products}) => {
  return (
    <>
      <header className='header'>
        <div className='header-left-side'>
          <div className='header-content'>
            <h1>Habeshan Cloth Ecommerce</h1>
            <p>Home of elegant, stylish and affordable habeshan outfits.</p>
            <Link href='/products'>
                <button className='btn' type='button'>Shop Now</button>
            </Link>
          </div>
        </div>

        <div className='header-right-side'>
          <div className='header-circle'>
            <Image
              className='header-img' 
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1685561788/habeshan-clothes/c2958105ac8922cd92baab46a33937a3--traditional-wedding-dresses-traditional-weddings_qkdg4b.jpg`}
              width={400} 
              height={350} 
              alt='header image' 
              />
            <Image 
              className='header-img' 
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1685362904/habeshan-clothes/il_fullxfull.4241228624_ayvh_lym2cv.jpg`}
              width={400} 
              height={350} 
              alt='header image' 
            />
                  
          </div>
        </div>
      </header>
      <div className='products-outer-container'>
        <div className='subtitle'>
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 100
            },
            1000: {
              slidesPerView: 2,
              spaceBetween: 0
            },
            1260: {
              slidesPerView: 3,
              spaceBetween: 0
            }
          }}
          modules={[Navigation, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
        >
          <div className='products-container'>
            {products?.map(product => (
              <SwiperSlide>
                <Product 
                  key={product.id}
                  id={product.id}
                  url={product.image_url}
                  name={product.name}
                  price={product.price}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <ProductSample />
      <Newsletter />
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

export default HomePage