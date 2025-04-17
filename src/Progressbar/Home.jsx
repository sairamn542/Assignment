import React from 'react'
import Progress from './ProgressBar'
import "../App.css"

function HomeP() {
    var bar = [1,10,20,30,40,50,60,80,100];
  return (
    <div className='App'>
        <h1>Progress bar</h1>
        {
            bar.map((val)=>(
                <Progress key={val} Progres={val} />
            ))
        }
    </div>
  )
}

export default HomeP