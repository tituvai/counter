import Image from 'next/image'
import React from 'react'
import shart from '../../public/t-shart.png'
import { Eye, Heart, ShoppingCart} from 'lucide-react'

const Product = ({productImg, productAlt, productTitle,  mainPrice, discount}) => {
  return (
    <>
    <div className="">
        <div className="relative group">
            <Image src={productImg} alt={productAlt} width={300} height={200}/>
            <div className="flex flex-col gap-4 absolute top-5 right-5 opacity-0 group-hover:opacity-100 duration-700 transition-all translate-x-4 group-hover:translate-x-0">
                <ShoppingCart className='text-white'/>
                <Heart className='text-white'/>
                <Eye className='text-white'/>
            </div>
        </div>
        <div className="bg-white shadow">
            <h3 className='text-base text-gray-600 font-medium py-2'>{productTitle}</h3>
            <h3 className='text-base text-gray-700 font-medium '><span className='pr-2'>{mainPrice}</span><del className='text-red-500'>{discount}</del></h3>
        </div>
    </div>
    </>
  )
}

export default Product