import React from "react";
import "./NewsLetterPopUpStyles.css";
import { useState } from "react";
import Email_icon from "../../assets/Email_icon_1-removebg-preview.png";
import { toast } from "react-hot-toast";
function NewsLetterPopUp() {
  const [email, setEmail] = useState("");
  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error('Email address cannot be empty',{
        style: {
          background: '#183114',
          color: "#fcee21",
        },
      });
      return;
    }
    if (!email.includes('@gmail.com')) {
      toast.error('Invalid email address',{
        style: {
          background: '#183114',
          color: "#fcee21",
        },
      });
      
      return;
    }
    console.log(`Subscribed with email: ${email}`);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({ email });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch("https://diveintoskill.onrender.com/subscribe", requestOptions);
      const result =  await response.json();
      if (result && result.error) {
        toast.error(result.error,{
          style: {
            background: '#183114',
            color: "#fcee21",
          },
        });
      } else {
        toast.success('Subscribed successfully',{
          style: {
            background: '#183114',
            color: "#fcee21",
          },
        });
      }
    } catch (error) {
    toast.error(`Error: ${error.message}`,{
      style: {
        background: 'linear-gradient(90deg, #183114 0%, #446129 100%)',
        color: "#fcee21",
      },
    });
  }
    setEmail("");
  };

  return (
    <>
      <div className="newsletter-popup-container">
        <div className="container-div">
          <div className="newsletter-popup">
            <div className="img_container">
              <img
                src={Email_icon}
                alt="Vector Image"
                className="email-image"
              ></img>
            </div>
            <div className="text_container">
              <h2 className="txt-color">Subscribe to Our Newsletter</h2>
              <p className="txt-color-p">
                Master web Development with amazing resources that are available
                for free! Join our Newsletter and get alert when new articles,
                topics, or courses are published.
              </p>
            </div>
          </div>

          <div className="input-container">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              name="email"
              required
            />
            <button onClick={handleSubscribe} className="subscribe-button">
              Subscribe
            </button>
          </div>
          <p
            style={{ color: "#EFECB4", marginBottom: "20px", fontSize: "16px" }}
          >
            We Promise not to spam you!
          </p>
        </div>
      </div>
    </>
  );
}

export default NewsLetterPopUp;
