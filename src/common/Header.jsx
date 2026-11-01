import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <Container>
        <div className="py-10 flex justify-center bg-gray-50 mb-10">
            <ul className='flex gap-x-3'>
                {[
                    {name:"Home", link:"/"},
                    {name:"Todo", link:"/todo"},
                    {name:"Shop", link:"/shop"},
                    {name:"About", link:"/"}
                ].map((item)=>(
                    <li className='text-base font-bold text-gray-700' key={item.name}><Link href={item.link}>{item.name}</Link></li>
                ))}
            </ul>
        </div>
    </Container>
    </>
  )
}

export default Header