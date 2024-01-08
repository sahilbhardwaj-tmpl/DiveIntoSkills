import React from 'react'
import { useState } from 'react';
import './LatestBlogStyles.css'
import CardData from './CardData'
import Card from './Card'
function LatestBlogs() {
    // const [blogs, setBlogs] = useState({});
    // const [visibleBlogs, setVisibleBlogs] = useState(9);

    // const loadMoreBlogs = () => {
    //     setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 9);
    // };
    return (
        <>
            <div className="blog-page">
                <h1 style={{textAlign:'center',marginTop:'20px'}}>Latest Blogs</h1>

                <div className="blog-layout">

                    <div className="category-section">
                        <h2>Categories</h2>
                        <p style={{fontSize:'20px'}}>Category 1</p>
                        <p style={{fontSize:'20px'}} >Category 2</p>
                        <p style={{fontSize:'20px'}}>Category 3</p>
                        <p style={{fontSize:'20px'}}>Category 4</p>
                        <p style={{fontSize:'20px'}}>Category 5</p>
                        <p style={{fontSize:'20px'}}>Category 6</p>

                    </div>


                    <div className="blogs-section">
                        <Card/>
                    </div>

                    {/* {visibleBlogs < blogs.length && (
                        <button className="load-more-button" onClick={loadMoreBlogs}>
                            Load More
                        </button>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default LatestBlogs