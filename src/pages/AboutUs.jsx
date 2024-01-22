import React from 'react'
import About from '../components/About/About';
import { useEffect, useState,useContext } from "react";
import { Context } from "../components/Layout/Layout";
function AboutUs() {
  const{pageName, setPageName}=useContext(Context);
  useEffect(() => {
    setPageName('About')
  },[])
  // console.log(pageName);
  
  return (
    <About/>
  )
}

export default AboutUs