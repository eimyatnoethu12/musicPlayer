import React from 'react'
import Heading from './Heading'
import BrowserPart from './BrowserPart'
import PlayList from './PlayList'

const Left = () => {
  return (
    <div className='bg-slate-100  rounded-bl-3xl flex flex-col items-start 
    md:relative
    fixed'>
       {/* Heading for left Side */}
       <div className='-mr-14 sm:mr-0'><Heading/></div>  
        <br/>
       {/* Browse Part of the Left Side */}
       <div className='sm:m-0 -mr-14 '><BrowserPart/></div>
       <br/>
       {/* PlayList Part of the Left Side */}
       <div className='sm:m-0 -mr-14  '><PlayList/></div>
    </div>
  )
}

export default Left
