import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popit } from '../redux/userSlice'
function Info() {
    const dispatch = useDispatch()
    const abc = useSelector(state=>state.userDetails)
    function DeleteClick(id) {
        dispatch(popit(id))
    }
  return (
    <div>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>password</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                 {
                    abc.map((ele,i)=>(
                        <tr key={i}>
                            <td>{ele.name}</td>
                            <td>{ele.pass}</td>
                            <td><span onClick={()=>DeleteClick(ele.id)}>&times;</span></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Info