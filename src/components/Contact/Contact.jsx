import React from "react";
import "./ContactStyles.css";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import toast from "react-hot-toast";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import SocialMediaLinksForMobile from "../SocialMediaLinks/SocialMediaLinksForMobile";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    headline: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await fetch(
        "https://diveintoskill.onrender.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      toast.success("Query Sent Successfully", {
        style: {
          background: '#183114',
          color: "#fcee21",
        },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something Went Wrong",{
        style: {
          background: '#183114',
          color: "#fcee21",
        },
      });
    }
    setFormData({
      name: "",
      email: "",
      headline: "",
      details: "",
    });
  };
  return (
    <>
      <div className="contact-container">
        <div className="left-section">
          <p className="left-section-text">Have a Query in Mind?</p>
          <p className="left-section-p">
            You can reach out to me via email or social media platforms to
            discuss the query.
          </p>
          <div className="address-box">
            <div className="address">
              <div className="address-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 60 80"
                  fill="none"
                >
                  <g clip-path="url(#clip0_36_1083)">
                    <path
                      d="M30 0C13.4575 0 0 13.485 0 30.055C0 54.8725 28.0025 78.7025 29.195 79.705C29.4178 79.8949 29.7005 80 29.9932 80.0018C30.2859 80.0037 30.5699 79.9021 30.795 79.715C31.9875 78.73 60 55.31 60 30.055C60 13.485 46.5425 0 30 0ZM30.005 77.095C25.4025 72.9825 2.5 51.4475 2.5 30.055C2.5 14.86 14.8375 2.5 30 2.5C45.1625 2.5 57.5 14.86 57.5 30.055C57.5 51.81 34.62 73.0375 30.005 77.095Z"
                      fill="#FCEE21"
                    />
                    <path
                      d="M30 15C21.7275 15 15 21.7275 15 30C15 38.2725 21.7275 45 30 45C38.2725 45 45 38.2725 45 30C45 21.7275 38.2725 15 30 15ZM30 42.5C23.1075 42.5 17.5 36.8925 17.5 30C17.5 23.1075 23.1075 17.5 30 17.5C36.8925 17.5 42.5 23.1075 42.5 30C42.5 36.8925 36.8925 42.5 30 42.5Z"
                      fill="#FCEE21"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_36_1083">
                      <rect width="60" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <p className="tuxt">Muzaffargarh, Punjab, Pakistan</p>
            </div>
            <div className="address">
              <div className="address-icons">
                <MdOutlineEmail size={50} style={{ color: "#FCEE21" }} />
              </div>
              <p className="tuxt">diveintoskills@gmail.com</p>
            </div>
            <div className="address">
              <div className="address-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <path
                    d="M66.6667 36.6634H73.3334C73.3334 19.5634 60.4234 6.66669 43.3 6.66669V13.3334C56.84 13.3334 66.6667 23.1434 66.6667 36.6634Z"
                    fill="#FCEE21"
                  />
                  <path
                    d="M43.3333 26.6666C50.3433 26.6666 53.3333 29.6566 53.3333 36.6666H60C60 25.9166 54.0833 20 43.3333 20V26.6666ZM54.74 44.81C54.0995 44.2278 53.2578 43.9173 52.3926 43.9441C51.5275 43.9708 50.7066 44.3327 50.1033 44.9533L42.1266 53.1566C40.2066 52.79 36.3466 51.5866 32.3733 47.6233C28.4 43.6466 27.1966 39.7766 26.84 37.87L35.0366 29.89C35.658 29.2871 36.0204 28.4661 36.0472 27.6007C36.0739 26.7353 35.7629 25.8935 35.18 25.2533L22.8633 11.71C22.2801 11.0678 21.4696 10.6783 20.6038 10.6242C19.7381 10.57 18.8853 10.8555 18.2266 11.42L10.9933 17.6233C10.417 18.2017 10.073 18.9715 10.0266 19.7866C9.97663 20.62 9.0233 40.36 24.33 55.6733C37.6833 69.0233 54.41 70 59.0166 70C59.69 70 60.1033 69.98 60.2133 69.9733C61.0283 69.9277 61.7977 69.5822 62.3733 69.0033L68.5733 61.7667C69.1382 61.1084 69.4242 60.2559 69.3707 59.3902C69.3172 58.5244 68.9283 57.7136 68.2866 57.13L54.74 44.81Z"
                    fill="#FCEE21"
                  />
                </svg>
              </div>

              <p className="tuxt">+923001312712</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <p className="right-section-text">Send Me Email</p>

          <div className="container">
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <input
                  className="input"
                  type="text"
                  id="yourName"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />

                <input
                  className="input"
                  placeholder="Your Email"
                  type="email"
                  id="yourEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input"
                  placeholder="Headline"
                  type="text"
                  id="headline"
                  name="headline"
                  value={formData.headline}
                  onChange={handleChange}
                  required
                />

                <textarea
                  className="textarea"
                  placeholder="Details about Query"
                  id="queryDetails"
                  name="details"
                  rows="4"
                  value={formData.details}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="center">
                  <button className="button" type="submit">
                    <p className="send-btn">Send</p>
                  </button>
                  <p className="or">or</p>
                </div>
               
                  <div className="SocialMediaLinks social-media-links">
                    <SocialMediaLinks color="#FCEE21" />
                  </div>
                  <div className="SocialMediaLinksForMobile social-media-links">
                    <SocialMediaLinksForMobile color="#FCEE21" />
                  </div>
            
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
