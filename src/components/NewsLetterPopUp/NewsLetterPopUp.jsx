import React from 'react'
import './NewsLetterPopUpStyles.css'
import { useState } from 'react';
import Email_icon from '../../assets/Email_icon_1-removebg-preview.png'
function NewsLetterPopUp() {
    const [email, setEmail] = useState('');
    const handleSubscribe = async () => {
        console.log(`Subscribed with email: ${email}`);
        try {
            const response = await fetch('https://diveintoskill.onrender.com/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              mode:'no-cors',
              body: JSON.stringify(email),
            });
          } catch (error) {
            console.error('Error submitting form:', error);
          }
        setEmail('');
    };
    return (
        <>

            <div className='newsletter-popup-container'>
                <div className='container-div'>
                    <div className="newsletter-popup">
                        <div className="img_container">
                            <img src={Email_icon} alt="Vector Image" className='email-image' ></img>
                        </div>
                        <div className="text_container">
                            <h2 className='txt-color'>Subscribe to Our Newsletter</h2>
                            <p className='txt-color-p'>
                                Master web Development with amazing resources that are available for free! Join our Newsletter and get alert when new articles, topics, or courses are published.
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
                        />
                        <button onClick={handleSubscribe} className="subscribe-button">
                            Subscribe
                        </button>
                    </div>
                    <p style={{ color: '#EFECB4', marginBottom: '20px', fontSize: '16px' }}>We Promise not to spam you!</p>
                </div>
                
            </div>







        </>
    )
}

export default NewsLetterPopUp