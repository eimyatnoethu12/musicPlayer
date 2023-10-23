'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass,faBell,faSortUp} from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react';
import Image from 'next/image';

type Props = {
  passData: (data: any) => void;
};

const RightHeading = ({passData}:Props) => {
    const [inputValue, setInputValue] =useState('');
    const [isvisible,setIsvisible]=useState(false);
    const [appear,setAppear]=useState(false);

  const handleInputChange = (e:any) => {
    setInputValue(e.target.value);
    passData(inputValue)
  };
  console.log('passData-'+passData(inputValue))
  return (
    
    <div className='m-1'>
    {/* Search */}
   <div className='flex relative'>
   <div>
    {isvisible==false &&
  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-lg cursor-pointer'
   onClick={()=>setIsvisible(!isvisible)} />}
    </div>
   
    <div className={`input-container  ${isvisible? 'sample' : 'sample1 '}`}>
    <input
   type="text"
   value={inputValue}
   onChange={handleInputChange}
   onClick={()=>setIsvisible(!isvisible)}
   className='border-slate-300 rounded-lg text-sm
   tracking-wide border-2 p-1 z-10  outline-none w-full absolute -top-2 -left-4
   '
   placeholder="     Search for songs, artists, albums"
 />
    </div>
    <div className=' opacity-0'>.</div>
   </div>
   {/* Noti */}
 <div className='absolute right-14 top-10 cursor-pointer' onClick={()=>setAppear(!appear)}>
 <div className='text-lg text-gray-900'>
 <FontAwesomeIcon icon={faBell} className='text-xl' />
 <div className='bg-red-500 text-xs w-4 h-4 m-0 p-1 absolute -top-1 -right-2 text-white rounded-full'>
   <span className='relative small -top-1 right-0'>3</span></div>

 </div>
</div>
{/* Appear noti div */}
{appear && <div className='mt-4 absolute right-10 cursor-pointer shadow-sm'>
<FontAwesomeIcon icon={faSortUp} className='text-xl absolute -top-2 right-0 text-gray-50 w-14 drop-shadow-2xl '/>
  <div className='shadow-sm bg-white flex gap-2 p-3 text-xs'>
    <Image src={'/profile.jpg'} width={300} height={400}
    className='w-10 h-10 rounded-full'
    alt='image'/>
    <div>Maria likes your playlist.<div className='font-bold'>XD 4 Life</div></div>
    <div className='ml-9'>2m</div>
  </div>
  <div className='shadow-xl bg-white flex gap-2 p-3 text-xs'>
    <Image src={'/profile.jpg'} width={300} height={400}
    className='w-10 h-10 rounded-full'
    alt='image'/>
    <div>Maria likes your playlist.<div className='font-bold'>XD 4 Life</div></div>
    <div className='ml-9'>2m</div>
  </div>
  <div className='shadow-sm bg-white flex gap-2 p-3 text-xs'>
    <Image src={'/profile.jpg'} width={300} height={400}
    className='w-10 h-10 rounded-full'
    alt='image'/>
    <div>Maria likes your playlist.<div className='font-bold'>XD 4 Life</div></div>
    <div className='ml-9'>2m</div>
  </div>
</div>}
 
  
    </div>
     
  )
}

export default RightHeading
