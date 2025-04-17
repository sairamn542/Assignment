import React from 'react'
import { useSelector } from 'react-redux'

function Child() {
    const dataAll = useSelector(state=>state.userData);
    console.log(dataAll);
    
  return (
    <div>
        <h2>Detch data from store</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataAll.map((sss,index)=>{
                        return(
                            <tr key={index}>
                            <td>{sss.name}</td>
                            <td>{sss.esmail}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Child