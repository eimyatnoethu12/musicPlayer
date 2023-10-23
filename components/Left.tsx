import React from 'react'
import Heading from './Heading'
import BrowserPart from './BrowserPart'
import PlayList from './PlayList'

const Left = () => {
  return (
    <div className='bg-slate-100  rounded-bl-3xl flex flex-col items-start'>
       {/* Heading for left Side */}
       <div><Heading/></div>  
        <br/>
       {/* Browse Part of the Left Side */}
       <div><BrowserPart/></div>
       <br/>
       {/* PlayList Part of the Left Side */}
       <div><PlayList/></div>
    </div>
  )
}

export default Left
