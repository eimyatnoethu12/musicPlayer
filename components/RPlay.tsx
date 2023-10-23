'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay,faHeart,faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'

const RPlay = () => {
  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=112030');

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.album); // Assuming that the data you want to map is in the "album" property
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Random
  const getRandomAlbums = () => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, 3);
  };
  const randomAlbums = getRandomAlbums();
  return (
    <>
    <div className='flex flex-col mt-9 relative' >
     
        {randomAlbums.map((a:any)=>(
            <div className='flex flex-row gap-12 appear key={a.key}'>
               <div className='grid grid-cols-5 gap-3 '>
                <div  className='relative  text-black z-10  left-3 flex' >
                    {a.strAlbumThumb ? (
                 <div className='relative -top-3 right-1'>
                    <FontAwesomeIcon icon={faCirclePlay} className='top-7 left-2  text-white z-10 relative appear1'/>
                   <img
                  src={a.strAlbumThumb}
                  alt={`Album Cover for ${a.strAlbum}`}
                  width="32" className='border w-8 h-8 rounded '
                />
                  </div>
               
                        ):(<div className='relative -top-3 right-1'>
              <FontAwesomeIcon icon={faCirclePlay} className='top-7 left-2  text-white z-10 relative appear1'/>
              <div className='border bg-gray-800 opacity-40 w-8 h-8 rounded '></div>
                    </div>)}
                    <div className=' relative top-3 text-gray-700 small1 w-6/12  font-bold '>{a.strAlbum}</div>
                  </div>
    
            <div className='text-gray-700 relative top-5 text-xs font-bold opacity-25'>{a.strArtist}</div>
            <div className='text-gray-700 relative top-5 text-xs font-bold opacity-25 ml-10'>13:30</div>
          <div>
          <FontAwesomeIcon icon={faHeart} className='text-gray-700 relative top-5 text-xs font-bold opacity-25 ml-10'/>
          </div>
            <div>
            <FontAwesomeIcon icon={faEllipsis} className='text-gray-700 relative top-5 text-xs font-bold opacity-25'/>
            </div>
            </div>
 </div>
    ))}
    </div>
    </>
  )
}

{/* <div className='flex flex-col mt-9 relative'>

<div className='flex flex-row gap-12 appear '>
 <div  className='relative  text-black z-10  left-3 flex' >
       <div className='relative -top-3 right-1'>
       <FontAwesomeIcon icon={faCirclePlay} className='top-7 left-2  text-white z-10 relative appear1'/>
      <div className='border bg-gray-800 opacity-40 w-8 h-8 rounded '></div>
       </div>
      <div className=' relative top-5 text-gray-700 text-xs font-bold'>All that jazz</div>
  </div>
  <div className='text-gray-700 relative top-5 text-xs font-bold opacity-25'>Various Aritsts</div>
  <div className='text-gray-700 relative top-5 text-xs font-bold opacity-25'>13:30</div>
  <FontAwesomeIcon icon={faHeart} className='text-gray-700 relative top-5 text-xs font-bold opacity-25'/>
  <FontAwesomeIcon icon={faEllipsis} className='text-gray-700 relative top-5 text-xs font-bold opacity-25'/>
 </div></div> */}

export default RPlay
