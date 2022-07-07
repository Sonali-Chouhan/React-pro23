import React from 'react'
export const List = ({State,deletedata}) => {
    
    return State.map((item,id)=>(
        
        <tr key={id}>
            <td>{id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {/* <td className='delete-btn' onClick={()=>deletedata(item.isbn)}>
                Delete
            </td>            */}
        </tr>            
    
))
}