import React from 'react'
import LatestBlogs from '../components/LatestBlogs/LatestBlogs';
import { useEffect, useState,useContext } from "react";
import { Context } from "../components/Layout/Layout";
function Blogs() {
  const{pageName, setPageName}=useContext(Context);
  useEffect(() => {
    setPageName('Blogs')
  },[])
  // console.log(pageName);
  
  return (
    <LatestBlogs />
  )
}

export default Blogs