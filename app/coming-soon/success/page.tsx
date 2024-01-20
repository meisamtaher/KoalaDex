'use client'
import React from 'react';
import Footer from '@/app/components/Footer';

export default function Modal() {
  return (
    <div className=" max-w-2xl  bg-slate-950 bg-opacity-50 rounded-2xl pt-10 pb-10 pr-4 pl-4 shadow-md shadow-white/10 backdrop-blur-sm background-blur">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8" >
          <h1 className="text-3xl text-white font-bold leading-tight">Thank you</h1>
          <p className="mt-4 text-white">Your email has been submitted. We will inform you of our exciting launch date.</p>
          <div className='h-8'/>
          <div className="w-full h-[0px] border border-gray-500"></div>
          <div className='h-8'/>
          <Footer/>
        </div>
      </div>
  );
}