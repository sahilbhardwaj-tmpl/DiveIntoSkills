import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SingleBlogPostStyles.css";
import CardBuilder from "../Card/CardBuilder";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import SocialMediaLinksForMobile from "../SocialMediaLinks/SocialMediaLinksForMobile";
function SingleBlogPost() {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [relatedBlogData, setRelatedBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://diveintoskill.onrender.com/blogs/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://diveintoskill.onrender.com/blogs/related/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRelatedBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const formatDateString = (dateString) => {
    const unformatted = new Date(dateString).toLocaleDateString(undefined,{ day: '2-digit', month: '2-digit', year: 'numeric' }).split("/");
    return [unformatted[1], unformatted[0], unformatted[2]].join("/");
  };

  return (
    <>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <ClipLoader color="#183114" loading={loading} size={60} />
        </div>
      ) : (
        <div className="single-blog-post">
          <p className="blog-title">{blogData.title}</p>

          <div className="author-section">
            <div className="author-info">
              <img
                src={blogData.author.photo}
                alt={"Author Image"}
                className="author-image"
              />
              <p className="author-name-singleBlogPost">{blogData.author.name}</p>
            </div>
            <p className="blog-date">{formatDateString(blogData.createdAt)}</p>
          </div>

          <img src={blogData.link} alt="Blog Image" className="blog-image" />

          <div className="blog-description">
            <p className="single-blogpost-desc">{blogData.description}</p>
          </div>
        </div>
      )}
      <div className="social_media_links">
        <p className="sharing-is-caring">Sharing is Caring</p>
       
        <div className="SocialMediaLinks social-media-links">
          <SocialMediaLinks color="#183114" />
        </div>
        <div className="SocialMediaLinksForMobile social-media-links">
          <SocialMediaLinksForMobile color="#183114" />
        </div>
        </div>
     
      <div className="related-blogs-container">
        <p
          className="Read_Related_Blogs"
        >
          Read Related Blogs
        </p>
      </div>
      <div className="Swiper-container-for-desktop">
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <ClipLoader color="#183114" loading={loading} size={60} />
          </div>
        ) : (
          <div className="Swiper">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {relatedBlogData.map((data) => (
                <SwiperSlide>
                  <Link to={`/SinglePost/${data.id}`}><CardBuilder
                    key={data.id}
                    img={data.link}
                    title={data.title}
                    description={data.description}
                    date={formatDateString(data.createdAt)}
                    author={data.author.name}
                    category={data.blogCategory.category}
                  /></Link>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      
      <div className="Swiper-container-for-mobile">
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <ClipLoader color="#183114" loading={loading} size={60} />
          </div>
        ) : (
          <div className="Swiper">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {relatedBlogData.slice(0, 4).map((data) => (
                <SwiperSlide>
                  <Link to={`/SinglePost/${data.id}`}><CardBuilder
                    key={data.id}
                    img={data.link}
                    title={data.title}
                    description={data.description}
                    date={formatDateString(data.createdAt)}
                    author={data.author.name}
                    category={data.blogCategory.category}
                  /></Link>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
      
    </>
  );
}

export default SingleBlogPost;
