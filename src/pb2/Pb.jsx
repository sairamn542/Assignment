import React, { useEffect, useState } from 'react'
import "./abc.css"

function Pb({ Progres }) {
    const[state,setState] = useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setState(Progres)
        },1000)
    },[Progres])
    return (
        <div className='oute'>
            <div className="inne" style={{
                // width: `${Progres}%`
                transform : `translateX(${state-100}%)`,
                color : state < 30 ? "blue" : ""
            }}>{state}%</div>
        </div>
    )
}

export default Pb