import React from 'react'
import './PageNotFoundStyles.css'
const PageNotFound = () => {
  (function () {
    window.scrollTo({
      top: 0,
    });
  })()
  return (
    <>
       <div className="not-found-container">
      <div className="not-found-content">
        <h1 className='h1'>404</h1>
        <p className='p'>Page Not Found</p>
        <p className='p'> Sorry, the page you are looking for might be in another universe.</p>
      </div>
    </div>
    </> )
}

export default PageNotFound;