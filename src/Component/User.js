import React,{useState,useEffect} from 'react';
import { List } from './List';

const getData=()=>{
    const data = localStorage.getItem('Data');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }
const User = () => {
    const [state, setstate] = useState(getData());
    const [data,setdata]=useState({
    name:'',
    last:'',
    email:'',
    password:''

  })
  const handleSubmit=(e)=>{
    e.preventDefault();
      setstate([...state,data]);          
      setdata({
        name:'',
        email:'',
        last:'',
        password:''
      })
  }
  // const deleteUsre=(id)=>{
  //   const filteredBooks=state.filter((element,index)=>{
  //     return element.id !== id
  //   })
  //   setstate(filteredBooks);
  // }
  useEffect(()=>{
    localStorage.setItem('Data',JSON.stringify(state));
  },[state])

  return (
    <div>
    <div>
      <form>
      <input type="text" value={state.name} onChange={(e)=>setdata({...data,name:e.target.value})}/><br/>
      <input type="text" value={state.last} onChange={(e)=>setdata({...data,lastme:e.target.value})}/><br/>
      <input type="text" value={state.email} onChange={(e)=>setdata({...data,email:e.target.value})}/><br/>
      <input type="text" value={state.password} onChange={(e)=>setdata({...data,password:e.target.value})}/><br/>
      <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
     </form>
     </div>
     <div>
     {state.length>0&&<>
            <div>
              <table border={3}>
                <thead> 
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <List State={state} />
                  {/* <List State={state} deletedata={deleteUsre}/> */}
                </tbody>
              </table>
            </div>
            <button 
            onClick={()=>setstate([])}>Remove All</button>
          </>}
          {state.length < 1 && <div>No User are added yet</div>}
     </div>
    </div>
  )
}

export default User;
