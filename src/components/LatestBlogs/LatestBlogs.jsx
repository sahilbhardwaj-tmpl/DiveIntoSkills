import React from "react";
import "./LatestBlogStyles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsLetterPopUp from "../NewsLetterPopUp/NewsLetterPopUp";
import CardData from "../Card/CardData";
import CardBuilder from "../Card/CardBuilder";
import axios from "axios";
function LatestBlogs() {
    const [pageNumber, setPageNumber] = useState(1);
    const itemsPerPage = 10;
    const [blogs, setBlogs] = useState([]);
    const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  
    useEffect(() => {
        fetchBlogs();
    }, [pageNumber]);
  
    const fetchBlogs = () => {
      axios
        .get(`https://diveintoskill.onrender.com/blogs?pageno=${pageNumber}&pagesize=${itemsPerPage}`)
        .then((response) => {
            console.log(response?.data,"here");
          if (response.data.length > 0) {
            setBlogs((prevBlogs) => [...prevBlogs, ...response.data]);
            setHasMoreBlogs(true);
          } else {
            setHasMoreBlogs(false);
          }
        })
        .catch((error) => {
          console.error("Error fetching blogs:", error);
        });
    };
  
    const handleLoadMore = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
  
    return (
      <>
        <div className="blog-page">
          <h1 style={{ textAlign: "center", marginTop: "20px" }}>Latest Blogs</h1>
  
          <div className="blog-layout">
            <div className="category-section">
              <h2 className="category-heading">Categories</h2>
              <div className="categories">
                <ul className="category-links">
                 
                </ul>
              </div>
            </div>
  
            <div className="blogs-section">
              <div className="cards">
                {blogs.map((data) => (
                  <Link key={data.id} className="card-hover" to= {`/SinglePost/${data.id}`}>
                    <CardBuilder
                      img={data.link}
                      title={data.title}
                      description={data.description}
                      date={data.createdAt}
                      author={data.author.name}
                    />
                  </Link>
                ))}
              </div>
              <div className="btn-container">
                {hasMoreBlogs && (
                  <button
                    className="btn-styles"
                    style={{
                      cursor: 'pointer',
                      color: '#FCEE21',
                      textAlign: 'center',
                      fontSize: '20px',
                    }}
                    onClick={handleLoadMore}
                  >
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <NewsLetterPopUp />
      </>
    );
  }

export default LatestBlogs;
