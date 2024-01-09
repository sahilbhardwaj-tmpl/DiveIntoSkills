import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
function Blogs() {
  (function() {
    window.scrollTo({
      top: 0,
    });
  })()
  return (
    <LatestBlogs />
  )
}

export default Blogs