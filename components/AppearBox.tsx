import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

interface Props{
    Isvisible:boolean
}

const AppearBox = ({Isvisible}:Props) => {
  return (
    // Appear Box
    <>
      {Isvisible &&
      <div className='absolute top-20 z-10 
      left-12 bg-white rounded-lg p-2 '>
        <div className='flex justify-start gap-3'>
        <div className='text-red-700 small border font-bold p-1 border-red-700'>PREMIUM</div>
        <div className='small text-gray-300 p-1 whitespace-nowrap'>Through 11/2</div>
         </div>
          <div className='grid grid-cols-2'>
          <div className='small1 font-bold pt-1.5 p-3'>Private</div>
            <div className='relative p-1 left-4'>
               <div className='border-slate-800 w-9 h-4 rounded-xl bg-gray-300'></div>
                <div className='border top-1.5 left-1.5  w-3 h-3 rounded-full absolute bg-white'></div>
            </div>
            <div className='small1 font-bold pt-1.5 p-3 whitespace-nowrap'>Explicit Filter</div>
            <div className='relative p-1 left-4'>
               <div className='border-slate-800 w-9 h-4 rounded-xl bg-gray-300'></div>
                <div className='border top-1.5 left-1.5  w-3 h-3 rounded-full absolute bg-white'></div>
            </div>
            <div className='small font-bold pt-2 p-3 whitespace-nowrap'>Friend Activity</div>
            <div className='relative p-1 left-4'>
               <div className='border-slate-800 w-9 h-4 rounded-xl bg-gray-300'></div>
                <div className='border top-1.5 left-1.5  w-3 h-3 rounded-full absolute bg-white'></div>
            </div>
            <div className='small font-bold whitespace-nowrap pt-2 p-3'>Account Settings</div>
          </div>
       
          <div className='flex relative left-12 text-gray-300 text-xs pt-1'>
            <div className='small'>Log out </div> &nbsp;
            <FontAwesomeIcon icon={faRightToBracket} className='w-4 small1'/>
          </div>
</div>
      }
    </>
  )
}

export default AppearBox
