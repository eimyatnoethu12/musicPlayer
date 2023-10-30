import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus,faBars,faPlay} from '@fortawesome/free-solid-svg-icons'


const PlayList = () => {
  return (
    <div className='sm:ml-7 ml-3'>
        {/* header for playlist */}
      <div className=' text-xs
        font-bold text-gray-500 gap-14 flex md:m-0 -mt-6'>
         <span className='uppercase text-sm 
              font-bold text-gray-400'>Your PlayLists</span>
         <FontAwesomeIcon icon={faCirclePlus} className='sm:text-lg small1 sm:mt-0 mt-1 -ml-12 mr-3 lg:-ml-6 ' />
      {/* list for playList */}      </div>
      <br/>
     <div className='md:-mt-0 -mt-6'>
     <div className='text-gray-500 tracking-wide gap-2 flex py-3 sm:pr-0 pr-14 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san sm:text-sm small2'>Workout Mix</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-2 flex py-3 sm:pr-0 pr-14 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san sm:text-sm small2'>Challin's at Home</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-2 flex py-3 sm:pr-0 pr-14 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san sm:text-sm small2'>Booping at Adobe</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-2 flex py-3 sm:pr-0 pr-14 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san sm:text-sm small2 mb-6'>XD 4 life</span>
      </div>
     </div>
    </div>
  )
}

export default PlayList
