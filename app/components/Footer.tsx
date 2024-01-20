import React from 'react'
import { KoalaDex } from './KoalaDex'
import Socials from './Socials'

const Footer = () => {
  return (
    <div className='w-full flex  flex-col sm:max-2xl:flex-row  items-center justify-items-start'>
        <KoalaDex></KoalaDex>
        <div className=' w-full h-full flex flex-row sm:max-2xl:flex-row-reverse justify-center sm:max-2xl:justify-start'>
        <Socials/>
        </div>
    </div>
    )
}

export default Footer