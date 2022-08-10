import React from 'react';
//import Profile from './Component/Profile';
// import About from './Component/About'
import "./App.css";
import Sidebar from "./Component/Sidebar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Component/Cards';
import UserList from './Component/UserList';
import QuiltedImageList from  "./Component/Tester"
//import Slider from './Component/Slider';
// import SliderArr from './Component/SliderArr';

const App = () => {
  return (
    <div>
      {/* <Sidebar/> */}
      {/* <Cards/>
      <Sidebar/> */}
      <QuiltedImageList/>
      {/* <SliderArr/> */}
      {/* <Slider/> */}
      {/* <Profile/> */}
      {/* <UserList/> */}
    {/* <About/> */}
    </div>
  )
}

export default App