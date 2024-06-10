import React, { useEffect } from 'react'
import'./preloader.css'
import gsap from 'gsap';
import { preLoaderAnim } from '../../animations';

function Preloader() {

    useEffect(()=>(
        preLoaderAnim()
    ), [])
    
  return (
   <div className="preloader">
   <div className='loader'></div>
   </div>
  )
}

export default Preloader