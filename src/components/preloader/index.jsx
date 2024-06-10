import React, { useEffect } from 'react'
import'./preloader.css'
import { preLoaderAnim } from '../../animations'

function Preloader() {

useEffect(()=>(
    preLoaderAnim()
),[])

  return (
   <div className="preloader">
    <div className="texts-container">
        <span>Welcome</span>
        <span>To</span>
        <span>ALTRACK</span>
    </div>
   </div>
  )
}

export default Preloader