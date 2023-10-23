import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus,faBars,faPlay} from '@fortawesome/free-solid-svg-icons'


const PlayList = () => {
  return (
    <div className='ml-7'>
        {/* header for playlist */}
      <div className=' text-xs
        font-bold text-gray-500 gap-14 flex'>
         <span className='uppercase text-sm
              font-bold text-gray-400'>Your PlayLists</span>
         <FontAwesomeIcon icon={faCirclePlus} className='text-lg' />
      </div>
      {/* list for playList */}
      <div className='text-gray-500 tracking-wide gap-6 flex py-3 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san text-sm'>Workout Mix</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-6 flex py-3 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san text-sm'>Challin's at Home</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-6 flex py-3 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san text-sm'>Booping at Adobe</span>
      </div>
      <div className='text-gray-500 tracking-wide gap-6 flex py-3 relative'>
      <FontAwesomeIcon icon={faBars} className='w-3'/>
      <FontAwesomeIcon icon={faPlay} className='w-2 top-5 left-3 absolute' />
         <span className=' font-san text-sm'>XD 4 life</span>
      </div>
    </div>
  )
}

export default PlayList
