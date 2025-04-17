import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {pushit} from '../redux/userSlice'

function Home() {
    const dispatch = useDispatch()
    const[name,setName] = useState('')
    const[pass,setPassword] = useState('')

    function HandleClick() {
        dispatch(pushit({name,pass}))
    }
    
  return (
    <div className='container'>
        <div>
            <label htmlFor="">UserName :</label>
            <input type="text" placeholder='userName' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Password :</label>
            <input type="text" placeholder='Password' value={pass} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <button onClick={HandleClick}>Submit</button>
    </div>
  )
}

export default Home