'use client'
import React from 'react';
export default function Modal() {
  return (
        <div className="bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundImage: '/Frame.svg', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-3xl  text-white font-bold leading-tight">Error</h1>
          <p className="mt-4 text-white">Something Bad Happened.</p>
          <a href="https://koaladex.io/" className="mt-4 text-blue-500 font-bold">KoalaDex</a>
          <span className="text-sky-500">Powered by ZetaChain</span>
        </div>
      </div>
  );
}