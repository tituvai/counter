"use client"

import Container from '@/common/Container'
import Product from '@/common/Product'
import React, { useEffect, useState } from 'react'

const Shop = () => {

    const [product, serProducts]=useState([])

    useEffect(()=>{
        const getProducts=async ()=>{
            try {
            const res=await fetch("https://dummyjson.com/products")
            const data=await res.json()

            serProducts(data.products)

            } catch (error) {
            console.log(error);
                
            }
        }

       getProducts() 
    }, [])
  return (
    <>
    <Container>
        <div className="flex justify-between flex-wrap py-5">
            {product?.map((item)=>(
            <div key={item.id} className="w-[24%]">
                <Product productImg={item?.images?.[0]} productTitle={item.title} mainPrice={item.price} productAlt={item.title} discount={item.discountPercentage}/>
            </div>
            ))}
            
        </div>
    </Container>
    </>
  )
}

export default Shop