import Link from 'next/link'
import React from 'react'
import swap from '@/public/swap.svg'
import ccswap from '@/public/ccswap.svg'
import koala from '@/public/favicon.svg'

const NavBar = () => {
  const links = [
    {href:"swap",label:"Swap",img:swap.src},
    {href:"cc-swap",label:"CC Swap",img:ccswap.src},
  ]
  return (
    <nav className='flex space-x-6 mb-5 px-5 h-14 items-center bg-slate-950' >
        <div className='flex flex-row items-center space-x-2'>
          <img src={koala.src} className='w-9 h-9'/>
          <a href={"/"} className="text-white text-lg"> Koala Dex</a>
        </div>
        <ul className='flex space-x-6'>
            {links.map(link=>
            <div className='flex flex-row space-x-1 items-center' key={link.label}>
              <img src={link.img}/>
              <a className="text-white text-sm transition-colors" >{link.label}</a>
            </div> 
            )}
        </ul>
    </nav>
  )
}

export default NavBar