import React from "react";
import "./LatestBlogStyles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsLetterPopUp from "../NewsLetterPopUp/NewsLetterPopUp";
import { ClipLoader } from "react-spinners";
import CardBuilder from "../Card/CardBuilder";
import axios from "axios";
function LatestBlogs() {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 9;
  const [blogs, setBlogs] = useState([]);
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);
  const [c, setCategories] = useState([]);

  // console.log(blogs.length, 'blog length ');
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://diveintoskill.onrender.com/category"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data[0].category);
          console.log(data);
          setCategories(data);
        } else {
          toast.error("Failed to fetch catrgories");
          console.error("Failed to fetch catrgories");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchCategories();
  }, []);
  const handleCategoryClick = async (category) => {
    setLoading(true);
   
    try {
      const response = await fetch(`https://diveintoskill.onrender.com/category/${category}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBlogs(data);
      setHasMoreBlogs(false)
      console.log('Data from API:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [pageNumber]);

  const fetchBlogs = () => {
    setLoading(true);
    axios
      .get(
        `https://diveintoskill.onrender.com/blogs?pageno=${pageNumber}&pagesize=${itemsPerPage}`
      )
      .then((response) => {
        if (response.data.length > 0) {
          setBlogs((prevBlogs) => [...prevBlogs, ...response.data]);
          setHasMoreBlogs(true);
          setLoading(false);
        } else {
          setHasMoreBlogs(false);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const handleLoadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const formatDateString = (dateString) => {
    const unformatted = new Date(dateString)
      .toLocaleDateString(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .split("/");
    return [unformatted[1], unformatted[0], unformatted[2]].join("/");
  };

  return (
    <>
      <div className="blog-page">
        <p className="latest-blog-heading" style={{}}>
          Latest Blogs
        </p>

        <div className="blog-layout">
          <div className="category-section">
            <p className="category-heading">Categories</p>
            <div className="categories">
              <ul className="category-links">
                {c.map((data,index) => (
                  <li  key={index} onClick={() => handleCategoryClick(data.category)}>
                  <p className="each-category">{data.category}</p>
                </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="blogs-section">
            {loading ? (
              <ClipLoader color="#183114" loading={true} size={60} />
            ) : (
              <>
                <div className="cards">
                  {blogs.map((data) => (
                    <Link
                      key={data.id}
                      className="card-hover"
                      to={`/SinglePost/${data.id}`}
                    >
                      <CardBuilder
                        img={data.link}
                        title={data.title}
                        description={data.description}
                        date={formatDateString(data.createdAt)}
                        author={data.author.name}
                        category={data.blogCategory.category}
                      />
                    </Link>
                  ))}
                </div>
                <div className="btn-container" style={{ paddingTop: "40px" }}>
                  {hasMoreBlogs && (
                    <button className="boton" onClick={handleLoadMore}>
                      Load More
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <NewsLetterPopUp />
    </>
  );
}

export default LatestBlogs;
