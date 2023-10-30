'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect } from 'react'


const RightBody = () => {
 
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [videoAppear,setVideoApear]=useState(false);
  const [videoAppear1,setVideoApear1]=useState(false);

  const videoClick=()=>{
    setVideoApear(!videoAppear);
  }
  const videoClick1=()=>{
    setVideoApear1(!videoAppear1);
  }

  // Fetching Data from Api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=111626');

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.mvids); // Assuming that the data you want to map is in the "album" property
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://theaudiodb.com/api/v1/json/2/mvid.php?i=112782');

        if (response.ok) {
          const jsonData = await response.json();
          setData1(jsonData.mvids); // Assuming that the data you want to map is in the "album" property
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  // Random Song
  const getRandomSong= () => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, 1);
  };

  const getRandomSong1= () => {
    const shuffledData = [...data1].sort(() => Math.random() - 0.5);
    return shuffledData.slice(0, 1);
  };

  const randomVideo1 = getRandomSong1();

  const randomVideo = getRandomSong();

  // youtube URL Id get
 let a:any=""
  const youtubeURL=(url:any)=>{
    const youtubeurl = new URL(url);
    return youtubeurl.searchParams.get("v")
  }
  

  return (
      <div className='grid md:grid-cols-2
      grid-cols-1 md:m-0 -mt-9 -ml-1 
      gap-1 w-11/12 h-full '>
        {/* Big body card */}
        {
          randomVideo.map((video:any)=>(
            <>
               <div className=' hover:scale-110 shadow-2xl pink transition-all scal hover:shadown-xl p-7  rounded-3xl bg-gradient-to-b from-pink-500 via-pink-600 to-pink-700'>
                    
                    {
                    videoAppear==false?
                    (<>
                       <div className='uppercase font-extrabold text-white md:text-6xl text-3xl' key={video.key}>Get Lost</div>
                      <div className=' tracking-wider opacity-30 text-white md:text-lg '>in your the song "{video.strTrack}" of {video.strArtist} </div>
                      <div>
                          <br/>
                          <br/>
                          <br/>
                          <FontAwesomeIcon icon={faCirclePlay} className='text-3xl text-white cursor-pointer' onClick={videoClick}/>
  
                      </div>
                    </>
                   
                    ):
                    (
                      <div className={`-ml-2`}>
                            <FontAwesomeIcon icon={faArrowLeft} className='text-3xl text-white cursor-pointer' onClick={videoClick}/>
                        <iframe
                          width="400"
                          height="215"
                          className='w-full'
                          src={`https://www.youtube.com/embed/${youtubeURL(video.strMusicVid)}?modestbranding=1`}
                          title="YouTube video player"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )
                    }
                </div>
            </>
          ))
        }       
        {
          randomVideo1.map((video:any)=>(
          <>
                <div className='hover:scale-110 shadow-2xl blue transition-all hover:shadown-xl p-7 rounded-xl bg-gradient-to-b from-blue-400 via-blue-600 to-blue-700'>                    
                    {
                    videoAppear1==false?
                    (<>
                       <div className='uppercase font-extrabold text-white md:text-6xl text-3xl' key={video.key}>Mellow</div>
                      <div className=' tracking-wider opacity-30 text-white md:text-lg '>beats "{video.strTrack}" of {video.strArtist} </div>
                      <div>
                          <br/>
                          <br/>
                          <br/>
                          <FontAwesomeIcon icon={faCirclePlay} className='text-3xl text-white cursor-pointer' onClick={videoClick1}/>
  
                      </div>
                    </>
                   
                    ):
                    (
                      <div className={`-ml-2`}>
                            <FontAwesomeIcon icon={faArrowLeft} className='text-3xl text-white cursor-pointer' onClick={videoClick1}/>
                        <iframe
                          width="400"
                          height="215"
                          src={`https://www.youtube.com/embed/${youtubeURL(video.strMusicVid)}?modestbranding=1`}
                          title="YouTube video player"
                          frameBorder="0"
                          className='w-full'
                          allowFullScreen
                        ></iframe>
                      </div>
                    )
                    }
                </div>
            </>))
        }
             
        

        </div>
  )
}

export default RightBody
