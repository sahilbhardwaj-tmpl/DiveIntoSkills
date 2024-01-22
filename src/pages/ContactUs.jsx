import React from 'react'
import Contact from '../components/Contact/Contact';
import { useEffect, useState,useContext } from "react";
import { Context } from "../components/Layout/Layout";
function ContactUs() {
  const{pageName, setPageName}=useContext(Context);
  useEffect(() => {
    setPageName('Contact')
  },[])
  // console.log(pageName);
  
  return (
    <>
    <Contact/>
    </>
  )
}

export default ContactUs