'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { useState } from 'react'
import AppearBox from './AppearBox'

const Heading = () => {
  const [Isvisible,setIsvisble]=useState(false);
  const appearDiv=()=>{
      setIsvisble(!Isvisible)
  }
  return (
    // Heading for Left Side
    <div className='flex flex-col ml-7 relative'>
      {/* Left Icon */}
      <div className='flex mt-5
        gap-2  justify-start -ml-4
        '>
        <div className='bg-red-500  w-4 h-4 rounded-full'></div>
        <div className='bg-yellow-500  w-4 h-4 rounded-full'></div>
        <div className='bg-green-500  w-4 h-4 rounded-full'></div>
      </div>
      <br/>
      {/* Profile */}
        <div className='flex gap-4 cursor-pointer' onClick={appearDiv}>
        <Image src={'/profile.jpg'} width={100} height={100} alt='profile' className='w-10 h-10 rounded-full'/>
         <div className='flex gap-1'>
          <div className='flex flex-col relative'>
            <span className='font-bold'>Joshua</span>
            <span className='text-slate-300 border
            font-bold absolute bottom-1
            border-slate-300 
             cursor-pointer
            small'>PREMIUM</span>
            </div>
          <FontAwesomeIcon icon={faAngleDown} className='w-2.5 absolute -right-5 bottom-5 cursor-pointer'/>
           </div>
        {/* </div> */}
      </div>
      {/* click appear box beside the profile*/}
      <AppearBox Isvisible={Isvisible}/>
    </div>
  )
}

export default Heading
