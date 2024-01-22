import React from 'react'
import SingleBlogPost from '../components/SingleBlogPost/SingleBlogPost';
import { useEffect, useState,useContext } from "react";
import { Context } from "../components/Layout/Layout";
function SingleBlog() {
  const{pageName, setPageName}=useContext(Context);
  useEffect(() => {
    setPageName('')
  },[])
  return (
    <>
    <SingleBlogPost/>
    </>
  )
}

export default SingleBlog