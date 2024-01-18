import React from 'react'
import './HeroSectionStyles.css'
import vectorImage from '../../assets/hero_section_vector.png'
function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <div className='textContainer'>
                    <h1 className='h1'style={{color:'#FCEE21'}}>The latest articles and courses to help you upgrade your skills.</h1>

                    <p className='p'style={{color:'#FFF',marginTop:'25px'}}>Master Web Development with amazing resources that are available for free! Join our Newsletter and get alerted when new articles, topics or courses are published.</p>
                </div>
                <div className='image-container'>
                    <img src={vectorImage} alt='Vector Image' />
                </div>
            </div>
        </>

    );
}

export default HeroSection