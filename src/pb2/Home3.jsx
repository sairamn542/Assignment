import React from 'react'
import Pb from './Pb'
import "./abc.css"

function Home3() {
    const arr = [12,34,56,78,98];
  return (
    <div className='abc'>
        <h3>Progress Bar</h3>
        {
            arr.map((ele)=>(
                <Pb key={ele} Progres={ele} />
            ))
        }
    </div>
  )
}

export default Home3