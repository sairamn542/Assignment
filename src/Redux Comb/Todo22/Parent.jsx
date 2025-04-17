import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sendit } from '../Redux22/userSlice2';

function Parent() {
    const dispatche = useDispatch()
    const[name,setName] = useState('');
    const[esmail,setEmail] = useState('')
    function StoreData(){
        dispatche(sendit({name,esmail}))
    }
  return (
    <div>
        <div>
            <label>Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div>
            <label>Email :</label>
            <input type="email" value={esmail} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <button onClick={StoreData}>Submit</button>
    </div>
  )
}

export default Parent