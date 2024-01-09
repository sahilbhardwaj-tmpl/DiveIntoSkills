import React from 'react'
import SingleBlogPost from '../components/SingleBlogPost'
function SingleBlog() {
  (function () {
    window.scrollTo({
      top: 0,
    });
  })()
  return (
    <>
    <SingleBlogPost/>
    </>
  )
}

export default SingleBlog