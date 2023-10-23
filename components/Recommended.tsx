'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'

  {/* https://theaudiodb.com/api/v1/json/2/album.php?i=112024 */}

const Recommended = () => {

  const [data, setData] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://theaudiodb.com/api/v1/json/2/album.php?i=112024');

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
    // Recommended PlayList
  <>
   {data.length > 0 ? (
     <div className='grid grid-cols-3 cursor-pointer gap-4'>
        
          {randomAlbums.map((album:any) => (
            <div className='appear2' key={album.idAlbum} >
                <div className='relative'>
                <FontAwesomeIcon icon={faCirclePlay} className='text-6xl absolute top-14 appear3 hidden  z-10 left-12 text-white'/></div>
                {album.strAlbumThumb ? (
                  <>
                   <img
                  src={album.strAlbumThumb}
                  alt={`Album Cover for ${album.strAlbum}`}
                  width="200"
                  className=' rounded-xl'
                />
                  </>
               
              ):(<div className='relative '>
              <FontAwesomeIcon icon={faCirclePlay} className='text-6xl absolute top-10 appear3 hidden  z-10 left-9 text-white'/>
              <div className='w-36 h-36 rounded-lg border bg-slate-600 opacity-40'></div>
           </div>)}
            <div className='text-xs mt-2 tracking-wider text-black font-bold opacity-80'>{album.strAlbum}</div>
            <div className='text-gray-400 small hover:text-gray-800'>{album.strArtist}</div>
          </div>
        
          ))}
        
        </div>
       
      ) : (
        <p>Loading...</p>
      )}
  </>
  )
}

export default Recommended
