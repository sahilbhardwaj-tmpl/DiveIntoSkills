import React from 'react'
import './LatestBlogStyles.css'
import Card from './Card'
import NewsLetterPopUp from './NewsLetterPopUp'
import CardData from './CardData'
import CardBuilder from './CardBuilder'
function LatestBlogs() {
    return (
        <>
            <div className="blog-page">
                <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Latest Blogs</h1>

                <div className="blog-layout">

                    <div className="category-section">
                        <h2>Categories</h2>
                        <p style={{ fontSize: '20px' }}>Category 1</p>
                        <p style={{ fontSize: '20px' }} >Category 2</p>
                        <p style={{ fontSize: '20px' }}>Category 3</p>
                        <p style={{ fontSize: '20px' }}>Category 4</p>
                        <p style={{ fontSize: '20px' }}>Category 5</p>
                        <p style={{ fontSize: '20px' }}>Category 6</p>

                    </div>


                    <div className="blogs-section">

                        <div className='cards'>
                            {CardData.map((data, indx) => {
                                return (

                                    <CardBuilder key={indx}
                                        img={data.blogImg}
                                        title={data.title}
                                        description={data.description}
                                        date={data.date}
                                        author={data.author} />
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
            <NewsLetterPopUp />
        </>
    )
}

export default LatestBlogs