import React from 'react'
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center'>
        <p className='font-bold text-[#00df9a] p-1'>HOME CONSTRUCTION ON TIME</p>
        <h1 className='text-4xl md:text-7xl sm:text-6xl font-bold md:py-6 '> WITHIN BUDGET</h1>
        <div className='flex justify-center items-center '>
          <p className='font-bold text-xl md:text-4xl sm:text-4xl py-4'>QUALITY BACKED BY WARRANTY</p>
          <Typed
            className='font-bold text-xl md:text-4xl sm:text-4xl md:pl-4 p1-2'
            strings={['Prasanna', 'Kavana']}
            typeSpeed={120}
            backDelay={140}
            loop />
        </div>
        <p className='font-bold text-xl md:text-2xl text-gray-500'>If You Have Project In Mind Get a Quotation|</p>
        <button className=' bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}



