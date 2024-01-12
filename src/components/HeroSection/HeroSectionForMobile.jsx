import React from 'react'
import vectorImage from '../../assets/hero_section_vector.png'
import './HeroSectionForMobileStyles.css'
function HeroSectionForMobile() {
  return (
    <>
    <div className='main-container'>
        <div className='main-heading'>
        <h1 style={{}}>The latest articles and courses to help you upgrade your skills.</h1>
        </div>
        <div className='text-and-image-container'>
            <div className='subheading-container'>
                <p>Master Web Development with amazing resources that are available for free! Join our Newsletter and get alerted when new articles, topics or courses are published</p>
            </div>
            <div className='vector-container'>
            <img src={vectorImage} alt='Vector Image' />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default HeroSectionForMobile
