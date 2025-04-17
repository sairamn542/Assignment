import React, { useEffect, useState } from 'react'
import "./outer.css";

function Progress({Progres}) {
    const[animatedProgress, setAnimatedProgress] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimatedProgress(Progres)
        },100)
    },[Progres])
  return (
    <div className='outer'>
        <div className='inner' style={{
            // width : `${animatedProgress}%`, it is taking time and repaint everything by using css
            transform : `translateX(${animatedProgress - 100}%)`, //thisone is better for use
            color : `${animatedProgress < 5 ? "black" : ""}`}} 
        role='progressbar'
        aria-valuenow={Progres}
        aria-valuemax="100"
        aria-valuemin="0"
        >{animatedProgress}%</div>
    </div>
  )
}

export default Progress