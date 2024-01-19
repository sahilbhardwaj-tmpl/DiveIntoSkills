import React from "react";
import "./ContactStyles.css";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
function Contact() {
  const [formData, setFormData] = useState({
    yourName: "",
    yourEmail: "",
    headline: "",
    queryDetails: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({
      yourName: "",
      yourEmail: "",
      headline: "",
      queryDetails: "",
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
                  name="yourName"
                  value={formData.yourName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />

                <input
                  className="input"
                  placeholder="Your Email"
                  type="email"
                  id="yourEmail"
                  name="yourEmail"
                  value={formData.yourEmail}
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
                  name="queryDetails"
                  rows="4"
                  value={formData.queryDetails}
                  onChange={handleChange}
                  required
                ></textarea>
                <div className="center">
                  <button className="button" type="submit">
                    <p className="send-btn">Send</p>
                  </button>
                  <p className="or">or</p>
                </div>
                <div className="form-social-media-links">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_36_1126)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 30.1675C0 45.0825 10.8325 57.485 25 60V38.3325H17.5V30H25V23.3325C25 15.8325 29.8325 11.6675 36.6675 11.6675C38.8325 11.6675 41.1675 12 43.3325 12.3325V20H39.5C35.8325 20 35 21.8325 35 24.1675V30H43L41.6675 38.3325H35V60C49.1675 57.485 60 45.085 60 30.1675C60 13.575 46.5 0 30 0C13.5 0 0 13.575 0 30.1675Z"
                        fill="#FCEE21"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_1126">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.6625 2.665C21.595 2.53 22.53 2.5 30 2.5C37.47 2.5 38.405 2.5325 41.335 2.665C44.265 2.7975 46.265 3.265 48.015 3.9425C49.8475 4.635 51.51 5.7175 52.885 7.1175C54.285 8.49 55.365 10.15 56.055 11.985C56.735 13.735 57.2 15.735 57.335 18.66C57.47 21.5975 57.5 22.5325 57.5 30C57.5 37.47 57.4675 38.405 57.335 41.3375C57.2025 44.2625 56.735 46.2625 56.055 48.0125C55.365 49.8477 54.2832 51.5105 52.885 52.885C51.51 54.285 49.8475 55.365 48.015 56.055C46.265 56.735 44.265 57.2 41.34 57.335C38.405 57.47 37.47 57.5 30 57.5C22.53 57.5 21.595 57.4675 18.6625 57.335C15.7375 57.2025 13.7375 56.735 11.9875 56.055C10.1523 55.3649 8.48955 54.2831 7.115 52.885C5.71595 51.5117 4.63329 49.8497 3.9425 48.015C3.265 46.265 2.8 44.265 2.665 41.34C2.53 38.4025 2.5 37.4675 2.5 30C2.5 22.53 2.5325 21.595 2.665 18.665C2.7975 15.735 3.265 13.735 3.9425 11.985C4.63431 10.1502 5.7178 8.48828 7.1175 7.115C8.4901 5.71625 10.1512 4.63361 11.985 3.9425C13.735 3.265 15.735 2.8 18.66 2.665H18.6625ZM41.1125 7.615C38.2125 7.4825 37.3425 7.455 30 7.455C22.6575 7.455 21.7875 7.4825 18.8875 7.615C16.205 7.7375 14.75 8.185 13.78 8.5625C12.4975 9.0625 11.58 9.655 10.6175 10.6175C9.70511 11.5051 9.00295 12.5857 8.5625 13.78C8.185 14.75 7.7375 16.205 7.615 18.8875C7.4825 21.7875 7.455 22.6575 7.455 30C7.455 37.3425 7.4825 38.2125 7.615 41.1125C7.7375 43.795 8.185 45.25 8.5625 46.22C9.0025 47.4125 9.705 48.495 10.6175 49.3825C11.505 50.295 12.5875 50.9975 13.78 51.4375C14.75 51.815 16.205 52.2625 18.8875 52.385C21.7875 52.5175 22.655 52.545 30 52.545C37.345 52.545 38.2125 52.5175 41.1125 52.385C43.795 52.2625 45.25 51.815 46.22 51.4375C47.5025 50.9375 48.42 50.345 49.3825 49.3825C50.295 48.495 50.9975 47.4125 51.4375 46.22C51.815 45.25 52.2625 43.795 52.385 41.1125C52.5175 38.2125 52.545 37.3425 52.545 30C52.545 22.6575 52.5175 21.7875 52.385 18.8875C52.2625 16.205 51.815 14.75 51.4375 13.78C50.9375 12.4975 50.345 11.58 49.3825 10.6175C48.4948 9.70518 47.4142 9.00303 46.22 8.5625C45.25 8.185 43.795 7.7375 41.1125 7.615ZM26.4875 38.4775C28.4491 39.2941 30.6334 39.4043 32.6673 38.7893C34.7012 38.1743 36.4585 36.8723 37.639 35.1056C38.8196 33.3389 39.3501 31.2172 39.1401 29.1028C38.9301 26.9883 37.9925 25.0124 36.4875 23.5125C35.5281 22.5537 34.368 21.8195 33.0908 21.3629C31.8136 20.9062 30.4511 20.7384 29.1012 20.8715C27.7514 21.0047 26.4479 21.4354 25.2845 22.1328C24.1211 22.8302 23.1269 23.7769 22.3733 24.9046C21.6196 26.0324 21.1255 27.3132 20.9263 28.6549C20.7271 29.9966 20.8279 31.3657 21.2213 32.6638C21.6148 33.9618 22.2912 35.1565 23.2018 36.1618C24.1124 37.1671 25.2346 37.958 26.4875 38.4775ZM20.005 20.005C21.3176 18.6924 22.8758 17.6513 24.5907 16.9409C26.3057 16.2305 28.1437 15.8649 30 15.8649C31.8562 15.8649 33.6943 16.2305 35.4092 16.9409C37.1242 17.6513 38.6824 18.6924 39.995 20.005C41.3076 21.3176 42.3487 22.8758 43.0591 24.5907C43.7694 26.3057 44.1351 28.1437 44.1351 30C44.1351 31.8562 43.7694 33.6943 43.0591 35.4092C42.3487 37.1242 41.3076 38.6824 39.995 39.995C37.3442 42.6458 33.7488 44.1351 30 44.1351C26.2511 44.1351 22.6558 42.6458 20.005 39.995C17.3542 37.3442 15.8649 33.7488 15.8649 30C15.8649 26.2511 17.3542 22.6558 20.005 20.005ZM47.27 17.97C47.5952 17.6632 47.8556 17.2942 48.0357 16.8849C48.2159 16.4757 48.312 16.0344 48.3185 15.5873C48.325 15.1402 48.2418 14.6964 48.0737 14.282C47.9056 13.8677 47.6561 13.4913 47.3399 13.1751C47.0237 12.8589 46.6473 12.6094 46.233 12.4413C45.8186 12.2732 45.3748 12.1899 44.9277 12.1965C44.4806 12.203 44.0393 12.2991 43.6301 12.4792C43.2208 12.6593 42.8518 12.9197 42.545 13.245C41.9483 13.8776 41.6216 14.7178 41.6342 15.5873C41.6469 16.4568 41.998 17.2872 42.6129 17.9021C43.2278 18.517 44.0581 18.8681 44.9277 18.8807C45.7972 18.8934 46.6374 18.5667 47.27 17.97Z"
                      fill="#FCEE21"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M59.1073 12.3425C57.0198 13.2675 54.7773 13.8925 52.4198 14.175C54.8523 12.7195 56.6721 10.4287 57.5398 7.73001C55.2544 9.08748 52.7531 10.043 50.1448 10.555C48.3907 8.68217 46.0674 7.44082 43.5356 7.02369C41.0038 6.60656 38.405 7.03699 36.1429 8.24814C33.8807 9.45929 32.0817 11.3834 31.0252 13.7218C29.9686 16.0601 29.7136 18.6819 30.2998 21.18C25.669 20.9475 21.1389 19.7439 17.0033 17.6473C12.8678 15.5507 9.21939 12.6079 6.29478 9.01001C5.29478 10.735 4.71978 12.735 4.71978 14.865C4.71867 16.7825 5.19087 18.6706 6.09448 20.3618C6.9981 22.0531 8.30519 23.4951 9.89978 24.56C8.05048 24.5012 6.24197 24.0015 4.62478 23.1025V23.2525C4.6246 25.9419 5.55487 28.5485 7.25774 30.63C8.96062 32.7115 11.3312 34.1398 13.9673 34.6725C12.2517 35.1368 10.4531 35.2052 8.70728 34.8725C9.45103 37.1865 10.8998 39.2101 12.8507 40.6598C14.8016 42.1096 17.1571 42.913 19.5873 42.9575C15.4619 46.196 10.367 47.9527 5.12228 47.945C4.19324 47.9453 3.26498 47.891 2.34229 47.7825C7.66597 51.2054 13.8631 53.0221 20.1923 53.015C41.6173 53.015 53.3298 35.27 53.3298 19.88C53.3298 19.38 53.3173 18.875 53.2948 18.375C55.573 16.7274 57.5396 14.6872 59.1023 12.35L59.1073 12.3425Z"
                      fill="#FCEE21"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 7.09501C2.5 5.87634 2.98412 4.70758 3.84585 3.84585C4.70757 2.98412 5.87633 2.50001 7.095 2.50001H52.9C53.5039 2.49902 54.1021 2.61716 54.6604 2.84767C55.2186 3.07818 55.7258 3.41653 56.1531 3.84335C56.5804 4.27016 56.9193 4.77707 57.1504 5.33503C57.3815 5.893 57.5003 6.49107 57.5 7.09501V52.9C57.5007 53.5041 57.3822 54.1023 57.1514 54.6606C56.9206 55.2188 56.5821 55.726 56.155 56.1533C55.728 56.5805 55.221 56.9194 54.6629 57.1505C54.1048 57.3816 53.5066 57.5003 52.9025 57.5H7.095C6.49137 57.5 5.89365 57.3811 5.33599 57.15C4.77834 56.9189 4.27168 56.5802 3.84496 56.1533C3.41824 55.7263 3.07983 55.2195 2.84906 54.6617C2.61828 54.1039 2.49967 53.5061 2.5 52.9025V7.09501ZM24.27 23.47H31.7175V27.21C32.7925 25.06 35.5425 23.125 39.675 23.125C47.5975 23.125 49.475 27.4075 49.475 35.265V49.82H41.4575V37.055C41.4575 32.58 40.3825 30.055 37.6525 30.055C33.865 30.055 32.29 32.7775 32.29 37.055V49.82H24.27V23.47ZM10.52 49.4775H18.54V23.125H10.52V49.475V49.4775ZM19.6875 14.53C19.7026 15.2167 19.5804 15.8995 19.3281 16.5383C19.0758 17.1771 18.6984 17.7591 18.2181 18.2501C17.7378 18.7411 17.1642 19.1312 16.5311 19.3975C15.898 19.6639 15.2181 19.8011 14.5313 19.8011C13.8444 19.8011 13.1645 19.6639 12.5314 19.3975C11.8983 19.1312 11.3247 18.7411 10.8444 18.2501C10.3641 17.7591 9.98673 17.1771 9.7344 16.5383C9.48207 15.8995 9.35988 15.2167 9.375 14.53C9.40468 13.1821 9.96096 11.8995 10.9247 10.9567C11.8885 10.014 13.1831 9.48605 14.5313 9.48605C15.8794 9.48605 17.174 10.014 18.1378 10.9567C19.1015 11.8995 19.6578 13.1821 19.6875 14.53Z"
                      fill="#FCEE21"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_36_1116)">
                      <path
                        d="M58.7501 16.2675C58.4103 15.0556 57.7486 13.9584 56.8351 13.0925C55.8958 12.2 54.7446 11.5616 53.4901 11.2375C48.7951 10 29.9851 10 29.9851 10C22.1434 9.91079 14.3036 10.3032 6.51008 11.175C5.25555 11.523 4.10649 12.1757 3.16508 13.075C2.24008 13.965 1.57008 15.0625 1.22008 16.265C0.379311 20.7944 -0.0291918 25.3934 7.81141e-05 30C-0.0299219 34.6025 0.377578 39.2 1.22008 43.735C1.56258 44.9325 2.23008 46.025 3.15758 46.9075C4.08508 47.79 5.24008 48.4275 6.51008 48.765C11.2676 50 29.9851 50 29.9851 50C37.8367 50.0894 45.6865 49.6969 53.4901 48.825C54.7446 48.5009 55.8958 47.8625 56.8351 46.97C57.7482 46.1043 58.4092 45.007 58.7476 43.795C59.6103 39.2674 60.0298 34.6665 60.0001 30.0575C60.065 25.429 59.646 20.8064 58.7501 16.265V16.2675ZM24.0051 38.56V21.4425L39.6551 30.0025L24.0051 38.56Z"
                        fill="#FCEE21"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_1116">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.665 2.5C21.2063 2.50033 19.8075 3.08011 18.7763 4.1118C17.7451 5.14348 17.1659 6.54256 17.1662 8.00125C17.1666 9.45994 17.7464 10.8588 18.778 11.89C19.8097 12.9212 21.2088 13.5003 22.6675 13.5H28.1675V8C28.1662 6.54171 27.5863 5.14354 26.5551 4.11237C25.524 3.08121 24.1258 2.50132 22.6675 2.5H22.665ZM22.665 17.1675H8C6.54131 17.1675 5.14236 17.747 4.11091 18.7784C3.07946 19.8099 2.5 21.2088 2.5 22.6675C2.5 24.1262 3.07946 25.5251 4.11091 26.5566C5.14236 27.588 6.54131 28.1675 8 28.1675H22.665C24.1237 28.1675 25.5226 27.588 26.5541 26.5566C27.5855 25.5251 28.165 24.1262 28.165 22.6675C28.165 21.2088 27.5855 19.8099 26.5541 18.7784C25.5226 17.747 24.1237 17.1675 22.665 17.1675ZM57.5 22.665C57.5 21.2063 56.9205 19.8074 55.8891 18.7759C54.8576 17.7445 53.4587 17.165 52 17.165C50.5413 17.165 49.1423 17.7445 48.1109 18.7759C47.0795 19.8074 46.5 21.2063 46.5 22.665V28.165H52C53.4587 28.165 54.8576 27.5855 55.8891 26.5541C56.9205 25.5226 57.5 24.1237 57.5 22.665ZM42.8325 22.665V8C42.8325 6.54131 42.253 5.14236 41.2216 4.11091C40.1901 3.07946 38.7912 2.5 37.3325 2.5C35.8738 2.5 34.4749 3.07946 33.4434 4.11091C32.412 5.14236 31.8325 6.54131 31.8325 8V22.665C31.8325 24.1237 32.412 25.5226 33.4434 26.5541C34.4749 27.5855 35.8738 28.165 37.3325 28.165C38.7912 28.165 40.1901 27.5855 41.2216 26.5541C42.253 25.5226 42.8325 24.1237 42.8325 22.665ZM37.3325 57.5C38.7912 57.5 40.1901 56.9205 41.2216 55.8891C42.253 54.8576 42.8325 53.4587 42.8325 52C42.8325 50.5413 42.253 49.1423 41.2216 48.1109C40.1901 47.0795 38.7912 46.5 37.3325 46.5H31.8325V52C31.8332 53.4585 32.4128 54.857 33.4441 55.8883C34.4754 56.9196 35.874 57.4993 37.3325 57.5ZM37.3325 42.83H52C53.4587 42.83 54.8576 42.2505 55.8891 41.2191C56.9205 40.1876 57.5 38.7887 57.5 37.33C57.5 35.8713 56.9205 34.4724 55.8891 33.4409C54.8576 32.4095 53.4587 31.83 52 31.83H37.335C35.8763 31.8297 34.4772 32.4088 33.4455 33.44C32.4139 34.4712 31.8341 35.8701 31.8337 37.3287C31.8334 38.7874 32.4126 40.1865 33.4438 41.2182C34.475 42.2499 35.8738 42.8297 37.3325 42.83ZM2.5 37.3325C2.5 38.7912 3.07946 40.1901 4.11091 41.2216C5.14236 42.253 6.54131 42.8325 8 42.8325C9.45869 42.8325 10.8576 42.253 11.8891 41.2216C12.9205 40.1901 13.5 38.7912 13.5 37.3325V31.8325H8C6.54131 31.8325 5.14236 32.412 4.11091 33.4434C3.07946 34.4749 2.5 35.8738 2.5 37.3325ZM17.1675 37.3325V51.9975C17.1672 53.4562 17.7463 54.8553 18.7775 55.8869C19.8087 56.9186 21.2076 57.4984 22.6662 57.4987C24.1249 57.4991 25.524 56.9199 26.5557 55.8887C27.5874 54.8575 28.1672 53.4587 28.1675 52V37.335C28.1678 35.8763 27.5887 34.4772 26.5575 33.4455C25.5262 32.4139 24.1274 31.8341 22.6687 31.8337C21.2101 31.8334 19.811 32.4126 18.7793 33.4438C17.7476 34.475 17.1678 35.8738 17.1675 37.3325Z"
                      fill="#FCEE21"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_36_1112)">
                      <path
                        d="M50.7927 11.23C46.9677 9.50499 42.8677 8.22999 38.5802 7.505C38.542 7.49766 38.5025 7.50239 38.4671 7.51851C38.4317 7.53464 38.4023 7.56137 38.3827 7.595C37.8577 8.51749 37.2727 9.71999 36.8627 10.67C32.3155 9.99059 27.6925 9.99059 23.1452 10.67C22.6886 9.61715 22.1736 8.59056 21.6027 7.595C21.5834 7.56095 21.5541 7.53362 21.5188 7.51665C21.4835 7.49967 21.4439 7.49386 21.4052 7.49999C17.1202 8.22499 13.0202 9.49999 9.19273 11.2275C9.1598 11.2413 9.13188 11.2649 9.11273 11.295C1.33273 22.7325 -0.799775 33.8875 0.247725 44.9025C0.25064 44.9295 0.259014 44.9556 0.272337 44.9792C0.285661 45.0028 0.303655 45.0235 0.325225 45.04C4.86621 48.346 9.93107 50.8645 15.3077 52.49C15.3452 52.5015 15.3853 52.5015 15.4228 52.4899C15.4602 52.4783 15.4933 52.4557 15.5177 52.425C16.6747 50.8777 17.7 49.2361 18.5827 47.5175C18.595 47.494 18.602 47.4681 18.6034 47.4417C18.6048 47.4152 18.6005 47.3888 18.5908 47.3641C18.5811 47.3394 18.5662 47.3172 18.5471 47.2988C18.528 47.2804 18.5052 47.2663 18.4802 47.2575C16.8652 46.6493 15.3004 45.9154 13.8002 45.0625C13.7733 45.0471 13.7506 45.0253 13.7341 44.9989C13.7177 44.9726 13.708 44.9426 13.7061 44.9116C13.7041 44.8806 13.7098 44.8497 13.7228 44.8214C13.7357 44.7932 13.7555 44.7687 13.7802 44.75C14.0952 44.5175 14.4102 44.275 14.7102 44.0325C14.7372 44.0107 14.7698 43.9968 14.8042 43.9924C14.8386 43.988 14.8736 43.9932 14.9052 44.0075C24.7227 48.4175 35.3552 48.4175 45.0577 44.0075C45.0895 43.9923 45.1248 43.9864 45.1597 43.9904C45.1946 43.9944 45.2277 44.0081 45.2552 44.03C45.5552 44.275 45.8677 44.5175 46.1852 44.75C46.2102 44.7683 46.2303 44.7925 46.2437 44.8205C46.257 44.8485 46.2632 44.8793 46.2618 44.9103C46.2603 44.9412 46.2511 44.9713 46.2352 44.9979C46.2192 45.0245 46.1969 45.0467 46.1702 45.0625C44.6752 45.9225 43.1202 46.65 41.4877 47.255C41.4627 47.2641 41.4398 47.2784 41.4207 47.2971C41.4016 47.3157 41.3868 47.3382 41.3771 47.363C41.3674 47.3879 41.3631 47.4145 41.3645 47.4411C41.3659 47.4678 41.373 47.4938 41.3852 47.5175C42.2852 49.235 43.3152 50.87 44.4477 52.4225C44.4713 52.4543 44.5041 52.4782 44.5417 52.4907C44.5792 52.5032 44.6198 52.5038 44.6577 52.4925C50.0436 50.8716 55.1167 48.3519 59.6627 45.04C59.6849 45.0245 59.7035 45.0044 59.7173 44.9811C59.7311 44.9578 59.7398 44.9319 59.7427 44.905C60.9927 32.17 57.6477 21.105 50.8702 11.3C50.8536 11.2681 50.8261 11.2433 50.7927 11.23ZM20.0502 38.195C17.0952 38.195 14.6577 35.5225 14.6577 32.245C14.6577 28.965 17.0477 26.295 20.0502 26.295C23.0752 26.295 25.4902 28.9875 25.4427 32.245C25.4427 35.525 23.0527 38.195 20.0502 38.195ZM39.9877 38.195C37.0302 38.195 34.5952 35.5225 34.5952 32.245C34.5952 28.965 36.9827 26.295 39.9877 26.295C43.0127 26.295 45.4277 28.9875 45.3802 32.245C45.3802 35.525 43.0152 38.195 39.9877 38.195Z"
                        fill="#FCEE21"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_36_1112">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
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
