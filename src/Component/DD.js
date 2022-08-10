
import React, { useState, useEffect } from "react";
import "./App.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
//import User from './Component/User';
const data = [
  {
    id: 1,
    type: "PNG",
  },
  {
    id: 2,
    type: "PPT",
  },
  {
    id: 3,
    type: "PNG",
  },
  {
    id: 4,
    type: "PNG",
  },
  {
    id: 5,
    type: "PPT",
  },
  {
    id: 6,
    type: "PPT",
  },
  {
    id: 7,
    type: "PNG",
  },
  {
    id: 8,
    type: "PPT",
  },
  {
    id: 9,
    type: "PNG",
  },
];

const DD = () => {
  const [state, setstate] = useState({});
  useEffect(() => {
    console.log("Ff", state);
  }, [state]);
  return (
    <div>
      {data.map((x) => {
        if (x.type === "PNG") {
          return <h4>{x.type}</h4>;
        }
        //  return(
        //   <div>
        //     <h1>{x.id}</h1>
        //     <h3>{x.type}</h3>
        //   </div>
        //  )
      })}
    </div>
  );
};

export default DD;
