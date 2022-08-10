import React,{useState} from 'react';
import { Form } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input';

const About = () => {
const [state, setstate] = useState({
    name:''
})
  return (
    <div>
       <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={(e)=>setstate({...state,name:e.target.value})} />

        <p>Value{state.name}</p>


    </div>
  )
}

export default About;
