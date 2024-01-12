import React from 'react'
import './LatestBlogStyles.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsLetterPopUp from '../NewsLetterPopUp/NewsLetterPopUp'
import CardData from '../Card/CardData'
import CardBuilder from '../Card/CardBuilder'
function LatestBlogs() {
    const itemsPerPage = 3;
    const [displayedData, setDisplayedData] = useState(CardData.slice(0, itemsPerPage));

    const handleLoadMore = () => {
        const currentLength = displayedData.length;
        const newData = CardData.slice(currentLength, currentLength + itemsPerPage);
        setDisplayedData([...displayedData, ...newData]);
    }

    return (
        <>
            <div className="blog-page">
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Latest Blogs</h1>

                <div className="blog-layout">

                    <div className="category-section">
                        <h2 className='category-heading'>Categories</h2>
                        <div className='categories'>
                            <ul className='category-links'>
                                <li><Link ><p style={{ fontSize: '20px' }}>Category 1</p></Link></li>
                                <li><Link ><p style={{ fontSize: '20px' }}>Category 2</p></Link></li>
                                
                                <li><Link ><p style={{ fontSize: '20px' }}>Category 4</p></Link></li>
                                <li><Link ><p style={{ fontSize: '20px' }}>Category 5</p></Link></li>
                                <li><Link ><p style={{ fontSize: '20px' }}>Category 6</p></Link></li>
                                
                            </ul>
                            
                            
                           
                        </div>


                    </div>


                    <div className="blogs-section">

                        <div className='cards'>
                            {displayedData.map((data, indx) => {
                                return (
                                    <Link className='card-hover' to="/SinglePost">
                                        <CardBuilder key={indx}
                                        img={data.blogImg}
                                        title={data.title}
                                        description={data.description}
                                        date={data.date}
                                        author={data.author} />
                                    </Link>
                                    
                                )
                            })}
                        </div>
                        <div className='btn-container'>
                            {CardData.length > displayedData.length && (
                                <button className='btn-styles' style={{
                                    cursor: 'pointer',
                                    color: '#FCEE21',
                                    textAlign: 'center',
                                    fontSize: '20px'
                                }} onClick={handleLoadMore}>Load More</button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <NewsLetterPopUp />
        </>
    )
}

export default LatestBlogs