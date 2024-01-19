import React from "react";
import "./LatestBlogStyles.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsLetterPopUp from "../NewsLetterPopUp/NewsLetterPopUp";
import { ClipLoader } from "react-spinners";
import CardBuilder from "../Card/CardBuilder";
import axios from "axios";
function LatestBlogs() {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 9;
  const [blogs, setBlogs] = useState([]);
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, [pageNumber]);

  const fetchBlogs = () => {
    axios
      .get(
        `https://diveintoskill.onrender.com/blogs?pageno=${pageNumber}&pagesize=${itemsPerPage}`
      )
      .then((response) => {
        console.log(response?.data, "here");
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
  const formatDateString = (dateString) => {
    const unformatted = new Date(dateString).toLocaleDateString(undefined,{ day: '2-digit', month: '2-digit', year: 'numeric' }).split("/");
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
                <li>
                  <p className="each-category">Category 1</p>
                </li>
                <li>
                  <p className="each-category">Category 1</p>
                </li>
                <li>
                  {" "}
                  <p className="each-category">Category 1</p>
                </li>
                <li>
                  <p className="each-category">Category 1</p>
                </li>
                <li>
                  <p className="each-category">Category 1</p>
                </li>
                <li>
                  <p className="each-category">Category 1</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="blogs-section">
            {blogs.length === 0 ? (
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
                      />
                    </Link>
                  ))}
                </div>
                <div className="btn-container">
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
