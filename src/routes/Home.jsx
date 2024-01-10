import React from 'react'
import HeroSection from '../components/HeroSection'
import './HomeStyles.css'
import { Link } from 'react-router-dom'
import NewsLetterPopUp from '../components/NewsLetterPopUp'
import CardData from '../components/CardData'
import CardBuilder from '../components/CardBuilder'
import SearchBar from '../components/SearchBar'

function Home() {
  (function () {
    window.scrollTo({
      top: 0,
    });
  })()
  return (
    <>
      <HeroSection />
      <div style={{ textAlign: 'center', }}>
        <h2 style={{ fontWeight: '700', fontSize: '34px', textAlign: 'center', padding: '20px' }}>Latest Blogs</h2>
        <div className='Latest-blog-cards'>
          {CardData.slice(0, 4).map((data, indx) => {
            return (
              <Link to="/SinglePost">
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
        <Link to='/Blogs'>
          <button className='btn-styles' style={{
            cursor: 'pointer',
            color: '#FCEE21',
            textAlign: 'center',
            fontSize: '20px'
          }}>Read More</button >
        </Link>
        <h2 style={{ fontWeight: '700', fontSize: '34px', textAlign: 'center', padding: '20px' }}>Latest Courses</h2>
        <div className='Latest-blog-cards'>
          {CardData.slice(0, 4).map((data, indx) => {
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
      <Link to='/latestCourses'>
        <button className='btn-styles' style={{
          cursor: 'pointer',
          color: '#FCEE21',
          textAlign: 'center',
          fontSize: '20px'
        }}>View More</button >
      </Link>

    </div >
      <NewsLetterPopUp />
        <SearchBar/>


    </>

  )
}

export default Home