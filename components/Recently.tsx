'use client'
import React from 'react'
import RPlay from './RPlay'
import Recommended from './Recommended'


const Recently = () => {

  return (
    <div className='grid md:grid-cols-2 grid-cols-1'>
        <div className=''>
            <div className='font-bold text-gray-600 '>Recently Played</div>
            <div className='md:m-0 -mt-7 '> 
            <RPlay/>
            </div>
        </div>
        <div>
        <div className='font-bold text-gray-600 mt-8'>Recommended For you</div>
        <br/>
        <div><Recommended/></div>
        </div>
     
    </div>
  )
}

export default Recently
