'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const RightBody = () => {
 
  return (
      <div className='grid md:grid-cols-2
      grid-cols-1 md:m-0 -mt-9 -ml-1 
      gap-1 w-11/12 h-full '>

        {/* Big body card */}
        <div className=' hover:scale-110 shadow-2xl pink transition-all scal hover:shadown-xl p-7  rounded-3xl bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700'>
        <div className='uppercase font-extrabold text-white md:text-6xl text-3xl'>Get Lost</div>
        <div className=' tracking-wider opacity-30 text-white md:text-xl '>in your music.</div>
        <div>
            <br/>
            <br/>
            <br/>
        <FontAwesomeIcon icon={faCirclePlay} className='text-3xl text-white' />

        </div>
        </div>
        <div className='hover:scale-110 shadow-2xl blue transition-all hover:shadown-xl p-7 rounded-xl bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700'>
        <div className='uppercase font-extrabold text-white md:text-5xl text-3xl'>Mellow</div>
        <div className=' tracking-wider opacity-30 text-white md:text-xl'>beats.</div>
        <div>
        <br/>
            <br/>
            <br/>
        <FontAwesomeIcon icon={faCirclePlay} className='text-3xl text-white' />

        </div>
        </div>
      </div>
   
  )
}

export default RightBody
