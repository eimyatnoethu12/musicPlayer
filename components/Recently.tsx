'use client'
import React from 'react'
import RPlay from './RPlay'
import Recommended from './Recommended'


const Recently = () => {

  return (
    <div className='grid grid-cols-2'>
        <div>
            <div className='font-bold text-gray-600'>Recently Played</div>
            <RPlay/>
        </div>
        <div>
        <div className='font-bold text-gray-600'>Recommended For you</div>
        <br/>
        <div><Recommended/></div>
        </div>
     
    </div>
  )
}

export default Recently
