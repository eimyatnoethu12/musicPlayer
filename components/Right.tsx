'use client'
import React from 'react'
import RightHeading from './RightHeading'
import RightBody from './RightBody'
import Recently from './Recently'
import { useState } from 'react'

const Right = () => {
  const [sendData, setSendData] = useState('');
  
const SentToRightBody =(data:any)=>{
  setSendData(data);
};



  return (
    <div className='pt-12 pl-14'>
      <div><RightHeading passData={SentToRightBody}/></div>
      <br/><br/>
      <div><RightBody valueData={sendData}/></div>
      <br/>
      <div><Recently /></div>
    </div>
  )
}

export default Right
