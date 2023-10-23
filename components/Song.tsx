import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlus,faLaptopFile,faVolumeHigh,faShuffle,faMusic,faRepeat,faBackwardStep,faForwardStep,faCirclePlay} from '@fortawesome/free-solid-svg-icons'

const Song = () => {
  return (
    <div className='mt-4 ml-12 mb-3 flex gap-6'>
      <div className='border-2 w-16 h-16
     rounded-full border-pink-500 bg-transparent'></div>
     <div>
      <div className='font-bold text-white mt-2 text-sm font-sans'>Mind-Blowing</div>
      <div className='font-bold text-xs text-white opacity-50'>Various Artists</div>
     </div>
     <div className='text-white mt-2 text-sm ml-3'><FontAwesomeIcon icon={faCirclePlus} /></div>
      <div className='text-white opacity-50 mt-5 w-12 text-lg ml-10'><FontAwesomeIcon icon={faShuffle} /></div>
      <div className='text-white opacity-90 mt-5 w-12 text-lg  flex gap-10'>
          <FontAwesomeIcon icon={faBackwardStep} className='w-12 text-2xl' />  
          <FontAwesomeIcon icon={faCirclePlay} className='w-12 text-4xl -mt-2' />
          <FontAwesomeIcon icon={faForwardStep} className='w-12 text-2xl'/>
          <FontAwesomeIcon icon={faRepeat}  className='w-12 text-xl mt-1 font-thin' />
      </div>  
  
      <div className='relative left-40 flex gap-4 mt-5'>
          <small className='text-white mt-1'>0:00</small>
          <div className='relative'>
            <progress value={5} max={20} className='h-1 w-96'></progress>
           <div className='w-4 h-4 border-4 absolute top-2 rounded-full border-white bg-pink-800' style={{ left: `calc(${(5 / 20) * 100}% - 1rem)` }}></div>
        </div>
        <small className='text-white mt-1'>0:00</small>
         <div className='flex text-white gap-2'>
         <FontAwesomeIcon icon={faMusic} />
          <FontAwesomeIcon icon={faLaptopFile} />
          <FontAwesomeIcon icon={faVolumeHigh} />
         </div>
      </div>  
    </div>
  )
}

export default Song
