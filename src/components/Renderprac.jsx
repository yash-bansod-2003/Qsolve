import React from "react";
import { useParams } from "react-router-dom";
import Main from "./Main";




const Renderprac = (props) => {
  let {id} = useParams();  
  
  return(
      <> <Main id={id} /></>
  );
};

export default Renderprac;
