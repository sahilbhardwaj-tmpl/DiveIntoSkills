import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import './HomeStyles.css'
import { Link } from 'react-router-dom'
import NewsLetterPopUp from '../../components/NewsLetterPopUp/NewsLetterPopUp'
import CardData from '../../components/Card/CardData'
import CardBuilder from '../../components/Card/CardBuilder'


function Home() {
  
  return (
    <>
      <HeroSection />
      <div >
        <h2 style={{ fontWeight: '700', fontSize: '34px', textAlign: 'center', padding: '20px' }}>Latest Blogs</h2>
        <div className='Latest-blog-cards'>
          {CardData.slice(0, 4).map((data, indx) => {
            return (
              <Link className='remove-decoration' to="/SinglePost">
                <CardBuilder key={indx}
                  img={data.blogImg}
                  title={data.title}
                  description={data.description}
                  date={data.date}
                  author={data.author}
                  category={data.category} />
                  
              </Link>

            )
          })}
        </div>
        <div style={{textAlign:'center'}}>
        <Link className='remove-decoration' to='/Blogs'>
          <button className='btn-styles' style={{
            cursor: 'pointer',
            color: '#FCEE21',
            textAlign: 'center',
            fontSize: '20px'
          }}>Read More</button >
        </Link>
        </div>
        
        <h2 style={{ fontWeight: '700', fontSize: '34px', textAlign: 'center', padding: '20px' }}>Latest Courses</h2>
        <div className='Latest-blog-cards'>
          {CardData.slice(0, 4).map((data, indx) => {
            return (
            <Link className='remove-decoration' to='/latestCourses'><CardBuilder key={indx}
            img={data.blogImg}
            title={data.title}
            description={data.description}
            date={data.date}
            author={data.author}
            category={data.category}
            />
            </Link>
              
           

        )
          })}
      </div>
      <div style={{textAlign:'center'}}><Link className='remove-decoration'to='/latestCourses'>
        <button className='btn-styles' style={{
          cursor: 'pointer',
          color: '#FCEE21',
          textAlign: 'center',
          fontSize: '20px'
        }}>View More</button >
      </Link></div>
      

    </div >
      <NewsLetterPopUp />
        


    </>

  )
}

export default Home