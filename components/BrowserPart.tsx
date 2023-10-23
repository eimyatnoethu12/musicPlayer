import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMusic,faAddressCard,faChartLine} from '@fortawesome/free-solid-svg-icons'
import {faPlaystation} from '@fortawesome/free-brands-svg-icons'
const BrowserPart = () => {
  return (
    // Browser Part
    <div className='ml-7'>
      <div className='text-slate-400 tracking-widest font-bold text-xs'>BROWSE</div>
   
    <div className='text-gray-500 flex gap-4 pt-7 py-4 tracking-wide'>
        <FontAwesomeIcon icon={faHouse} />
        <div className='font-extrabold font-san text-sm -mt-1'>Home</div>
    </div>
    <div className='text-gray-500 flex gap-4 py-4 tracking-wide'>
    <FontAwesomeIcon icon={faMusic} />
        <div className=' font-san text-sm -mt-1'>Songs</div>
    </div>
    <div className='text-gray-500 flex gap-4 py-4 tracking-wide'>
    <FontAwesomeIcon icon={faPlaystation} />
        <div className=' font-san text-sm -mt-1'>Playlists</div>
    </div>
    <div className='text-gray-500 flex gap-4 py-4 tracking-wide'>
    <FontAwesomeIcon icon={faAddressCard} />
        <div className=' font-san text-sm -mt-1'>Just for You</div>
    </div>
    <div className='text-gray-500 flex gap-4 py-4 tracking-wide'>
    <FontAwesomeIcon icon={faChartLine} />
        <div className=' font-san text-sm -mt-1'>Top Charts</div>
    </div>
</div>
    
  )
}

export default BrowserPart
