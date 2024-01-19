import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import NewsLetterPopUp from "../../components/NewsLetterPopUp/NewsLetterPopUp";
import CardBuilder from "../../components/Card/CardBuilder";
import HeroSectionForMobile from "../../components/HeroSection/HeroSectionForMobile";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";

function Home() {
  const [limitedBlogs, setLimitedBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://diveintoskill.onrender.com/limited-blogs"
        );
        if (response.ok) {
          const data = await response.json();
          setLimitedBlogs(data);
        } else {
          toast.error("Failed to load blogs");
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    if (limitedBlogs.length === 0) {
      fetchData();
    }
  }, [limitedBlogs]);
  
  const formatDateString = (dateString) => {
    const unformatted = new Date(dateString).toLocaleDateString(undefined,{ day: '2-digit', month: '2-digit', year: 'numeric' }).split("/");
    return [unformatted[1], unformatted[0], unformatted[2]].join("/");
  };
  console.log(limitedBlogs);

  return (
    <>
      <div className="hero-section-for-desktop">
        <HeroSection />
      </div>
      <div className="hero-section-for-mobile">
        <HeroSectionForMobile />
      </div>

      <div className="limited-blog-section">
        <p className="limited-blogs-heading"
        >
          Latest Blogs
        </p>
        <div className="Latest-blog-cards">
          {limitedBlogs.length === 0 ? (
            <ClipLoader color="#183114" loading={true} size={60} />
          ) : (
            limitedBlogs.map((data) => (
              <Link
                key={data.id}
                className="remove-decoration"
                to={`/SinglePost/${data.id}`}
              >
                <CardBuilder
                  key={data.id}
                  img={data.link}
                  title={data.title}
                  description={data.description}
                  date={formatDateString(data.createdAt)}
                  author={data.author.name}
                  category={data.blogCategory.category}
                />
              </Link>
            ))
          )}
        </div>

        {limitedBlogs.length > 0 && (
          <div style={{ textAlign: "center" ,paddingTop: "40px"}}>
            <Link className="remove-decoration" to="/Blogs">
              <button
                className="buton"
              >
                Read More
              </button>
            </Link>
          </div>
        )}
      </div>
      <NewsLetterPopUp />
    </>
  );
}

export default Home;
