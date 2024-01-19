import React from "react";
import "./FooterStyles.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <p
            className="footer-heading"
            style={{ color: "#FCEE21", fontWeight: "bolder", fontSize: "40px" }}
          >
            Dive Into Skills
          </p>
        </div>
        <div className="text-container">
          <div className="txt">
            <p className='txt-p'>
              The latest articles and courses to help you upgrade your skills
              and learn the latest trends. Master web Development with these
              amazing resources that are available for free!
            </p>
          </div>
          <div className="for-mobile"><ul className="flex-row_1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Blogs'>Blog</Link></li>
            <li><Link to='/course'>Course</Link></li>
            <li><a href='https://youtube.com' target="_blank">YouTube</a></li>
          </ul></div>
          <div className="for-mobile"><ul className="flex-row_2">
            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/Privacy Policy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/conditions">Terms & Conditions</Link>
            </li>
          </ul></div>
          
        </div>
        <div className="social-media-links">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <g clip-path="url(#clip0_31_555)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 40.2233C0 60.11 14.4433 76.6467 33.3333 80V51.11H23.3333V40H33.3333V31.11C33.3333 21.11 39.7767 15.5567 48.89 15.5567C51.7767 15.5567 54.89 16 57.7767 16.4433V26.6667H52.6667C47.7767 26.6667 46.6667 29.11 46.6667 32.2233V40H57.3333L55.5567 51.11H46.6667V80C65.5567 76.6467 80 60.1133 80 40.2233C80 18.1 62 0 40 0C18 0 0 18.1 0 40.2233Z"
                fill="#DCDE9F"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_555">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.8835 3.55337C28.7935 3.37337 30.0402 3.33337 40.0002 3.33337C49.9602 3.33337 51.2068 3.37671 55.1135 3.55337C59.0202 3.73004 61.6868 4.35337 64.0202 5.25671C66.4635 6.18004 68.6802 7.62337 70.5135 9.49004C72.3802 11.32 73.8202 13.5334 74.7402 15.98C75.6468 18.3134 76.2668 20.98 76.4468 24.88C76.6268 28.7967 76.6668 30.0434 76.6668 40C76.6668 49.96 76.6235 51.2067 76.4468 55.1167C76.2702 59.0167 75.6468 61.6834 74.7402 64.0167C73.8201 66.4637 72.3778 68.6807 70.5135 70.5134C68.6802 72.38 66.4635 73.82 64.0202 74.74C61.6868 75.6467 59.0202 76.2667 55.1202 76.4467C51.2068 76.6267 49.9602 76.6667 40.0002 76.6667C30.0402 76.6667 28.7935 76.6234 24.8835 76.4467C20.9835 76.27 18.3168 75.6467 15.9835 74.74C13.5366 73.8199 11.3196 72.3775 9.48683 70.5134C7.62143 68.6823 6.17788 66.4663 5.25683 64.02C4.3535 61.6867 3.7335 59.02 3.5535 55.12C3.3735 51.2034 3.3335 49.9567 3.3335 40C3.3335 30.04 3.37683 28.7934 3.5535 24.8867C3.73016 20.98 4.3535 18.3134 5.25683 15.98C6.17924 13.5336 7.62389 11.3178 9.49016 9.48671C11.3203 7.62171 13.5351 6.17819 15.9802 5.25671C18.3135 4.35337 20.9802 3.73337 24.8802 3.55337H24.8835ZM54.8168 10.1534C50.9502 9.97671 49.7902 9.94004 40.0002 9.94004C30.2102 9.94004 29.0502 9.97671 25.1835 10.1534C21.6068 10.3167 19.6668 10.9134 18.3735 11.4167C16.6635 12.0834 15.4402 12.8734 14.1568 14.1567C12.9403 15.3402 12.0041 16.781 11.4168 18.3734C10.9135 19.6667 10.3168 21.6067 10.1535 25.1834C9.97683 29.05 9.94016 30.21 9.94016 40C9.94016 49.79 9.97683 50.95 10.1535 54.8167C10.3168 58.3934 10.9135 60.3334 11.4168 61.6267C12.0035 63.2167 12.9402 64.66 14.1568 65.8434C15.3402 67.06 16.7835 67.9967 18.3735 68.5834C19.6668 69.0867 21.6068 69.6834 25.1835 69.8467C29.0502 70.0234 30.2068 70.06 40.0002 70.06C49.7935 70.06 50.9502 70.0234 54.8168 69.8467C58.3935 69.6834 60.3335 69.0867 61.6268 68.5834C63.3368 67.9167 64.5602 67.1267 65.8435 65.8434C67.0602 64.66 67.9968 63.2167 68.5835 61.6267C69.0868 60.3334 69.6835 58.3934 69.8468 54.8167C70.0235 50.95 70.0602 49.79 70.0602 40C70.0602 30.21 70.0235 29.05 69.8468 25.1834C69.6835 21.6067 69.0868 19.6667 68.5835 18.3734C67.9168 16.6634 67.1268 15.44 65.8435 14.1567C64.6599 12.9403 63.2192 12.0041 61.6268 11.4167C60.3335 10.9134 58.3935 10.3167 54.8168 10.1534ZM35.3168 51.3034C37.9324 52.3921 40.8448 52.5391 43.5566 51.7191C46.2684 50.8991 48.6115 49.1631 50.1855 46.8075C51.7596 44.4519 52.467 41.6229 52.187 38.8037C51.907 35.9845 50.6568 33.3499 48.6502 31.35C47.3709 30.0716 45.8242 29.0927 44.1213 28.4839C42.4183 27.875 40.6016 27.6512 38.8018 27.8288C37.002 28.0063 35.264 28.5806 33.7128 29.5105C32.1617 30.4403 30.836 31.7025 29.8312 33.2062C28.8264 34.7099 28.1675 36.4177 27.9019 38.2066C27.6363 39.9955 27.7707 41.821 28.2953 43.5518C28.8199 45.2825 29.7218 46.8754 30.9359 48.2158C32.15 49.5561 33.6462 50.6106 35.3168 51.3034ZM26.6735 26.6734C28.4236 24.9233 30.5012 23.535 32.7878 22.5879C35.0744 21.6408 37.5252 21.1533 40.0002 21.1533C42.4752 21.1533 44.9259 21.6408 47.2125 22.5879C49.4991 23.535 51.5767 24.9233 53.3268 26.6734C55.0769 28.4235 56.4651 30.5011 57.4123 32.7877C58.3594 35.0743 58.8469 37.525 58.8469 40C58.8469 42.475 58.3594 44.9258 57.4123 47.2124C56.4651 49.499 55.0769 51.5766 53.3268 53.3267C49.7924 56.8612 44.9986 58.8468 40.0002 58.8468C35.0017 58.8468 30.2079 56.8612 26.6735 53.3267C23.139 49.7923 21.1534 44.9985 21.1534 40C21.1534 35.0016 23.139 30.2078 26.6735 26.6734ZM63.0268 23.96C63.4605 23.5509 63.8077 23.059 64.0478 22.5133C64.288 21.9676 64.4162 21.3793 64.4249 20.7831C64.4336 20.187 64.3226 19.5952 64.0984 19.0427C63.8743 18.4903 63.5416 17.9884 63.12 17.5668C62.6985 17.1453 62.1966 16.8126 61.6441 16.5884C61.0917 16.3643 60.4999 16.2533 59.9037 16.262C59.3076 16.2707 58.7193 16.3989 58.1736 16.639C57.6279 16.8792 57.1359 17.2264 56.7268 17.66C55.9312 18.5035 55.4956 19.6238 55.5125 20.7831C55.5294 21.9425 55.9975 23.0496 56.8173 23.8695C57.6372 24.6894 58.7444 25.1575 59.9037 25.1744C61.0631 25.1913 62.1834 24.7557 63.0268 23.96Z"
              fill="#DCDE9F"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M78.8102 16.4567C76.0269 17.6901 73.0369 18.5234 69.8935 18.9001C73.1369 16.9594 75.5633 13.9049 76.7202 10.3067C73.673 12.1167 70.338 13.3907 66.8602 14.0734C64.5215 11.5763 61.4237 9.92114 58.048 9.36497C54.6722 8.80879 51.2072 9.38269 48.191 10.9976C45.1748 12.6124 42.7761 15.1779 41.3674 18.2957C39.9586 21.4135 39.6187 24.9092 40.4002 28.24C34.2258 27.93 28.1856 26.3252 22.6716 23.5297C17.1576 20.7343 12.293 16.8106 8.39353 12.0134C7.0602 14.3134 6.29354 16.9801 6.29354 19.8201C6.29205 22.3767 6.92164 24.8942 8.12646 27.1492C9.33128 29.4041 11.0741 31.3268 13.2002 32.7467C10.7345 32.6683 8.32311 32.002 6.16687 30.8034V31.0034C6.16662 34.5892 7.40698 38.0646 9.67748 40.84C11.948 43.6154 15.1088 45.5198 18.6235 46.23C16.3361 46.8491 13.938 46.9403 11.6102 46.4967C12.6019 49.5821 14.5335 52.2801 17.1348 54.2131C19.736 56.1461 22.8766 57.2173 26.1169 57.2767C20.6163 61.5947 13.8232 63.937 6.8302 63.9267C5.59147 63.927 4.35379 63.8547 3.12354 63.71C10.2218 68.274 18.4847 70.6961 26.9235 70.6867C55.4902 70.6867 71.1069 47.0267 71.1069 26.5067C71.1069 25.84 71.0902 25.1667 71.0602 24.5C74.0978 22.3033 76.7199 19.583 78.8035 16.4667L78.8102 16.4567Z"
              fill="#DCDE9F"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.3335 9.46005C3.3335 7.83516 3.97898 6.27681 5.12796 5.12784C6.27693 3.97887 7.83527 3.33338 9.46016 3.33338H70.5335C71.3387 3.33207 72.1363 3.48959 72.8806 3.79694C73.6249 4.10428 74.3013 4.55541 74.871 5.1245C75.4407 5.69359 75.8926 6.36946 76.2007 7.11342C76.5089 7.85737 76.6673 8.6548 76.6668 9.46005V70.5334C76.6677 71.3388 76.5098 72.1365 76.2021 72.8808C75.8944 73.6251 75.4429 74.3014 74.8736 74.8711C74.3042 75.4407 73.6281 75.8926 72.884 76.2007C72.1398 76.5088 71.3422 76.6672 70.5368 76.6667H9.46016C8.65532 76.6667 7.85836 76.5081 7.11482 76.2C6.37128 75.8919 5.69573 75.4403 5.12678 74.8711C4.55782 74.3018 4.1066 73.626 3.7989 72.8823C3.49121 72.1386 3.33306 71.3416 3.3335 70.5367V9.46005ZM32.3602 31.2934H42.2902V36.28C43.7235 33.4134 47.3902 30.8334 52.9002 30.8334C63.4635 30.8334 65.9668 36.5434 65.9668 47.0201V66.4267H55.2768V49.4067C55.2768 43.44 53.8435 40.0734 50.2035 40.0734C45.1535 40.0734 43.0535 43.7034 43.0535 49.4067V66.4267H32.3602V31.2934ZM14.0268 65.97H24.7202V30.8334H14.0268V65.9667V65.97ZM26.2502 19.3734C26.2703 20.289 26.1074 21.1993 25.771 22.0511C25.4345 22.9029 24.9313 23.6788 24.2909 24.3335C23.6505 24.9881 22.8858 25.5083 22.0417 25.8634C21.1975 26.2185 20.291 26.4014 19.3752 26.4014C18.4594 26.4014 17.5528 26.2185 16.7086 25.8634C15.8645 25.5083 15.0998 24.9881 14.4594 24.3335C13.819 23.6788 13.3158 22.9029 12.9794 22.0511C12.6429 21.1993 12.48 20.289 12.5002 19.3734C12.5397 17.5762 13.2814 15.866 14.5664 14.609C15.8515 13.352 17.5776 12.6481 19.3752 12.6481C21.1728 12.6481 22.8989 13.352 24.1839 14.609C25.4689 15.866 26.2106 17.5762 26.2502 19.3734Z"
              fill="#DCDE9F"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <g clip-path="url(#clip0_31_565)">
              <path
                d="M78.3334 21.69C77.8804 20.0741 76.9981 18.6111 75.7801 17.4566C74.5277 16.2666 72.9928 15.4154 71.3201 14.9833C65.0601 13.3333 39.9801 13.3333 39.9801 13.3333C29.5245 13.2143 19.0715 13.7376 8.6801 14.9C7.0074 15.364 5.47531 16.2343 4.2201 17.4333C2.98677 18.62 2.09344 20.0833 1.62677 21.6866C0.505747 27.7258 -0.0389224 33.8578 0.000104152 40C-0.0398958 46.1366 0.503437 52.2666 1.62677 58.3133C2.08344 59.91 2.97344 61.3666 4.2101 62.5433C5.44677 63.72 6.98677 64.57 8.6801 65.02C15.0234 66.6666 39.9801 66.6666 39.9801 66.6666C50.449 66.7858 60.9153 66.2626 71.3201 65.1C72.9928 64.6679 74.5277 63.8166 75.7801 62.6266C76.9976 61.4724 77.879 60.0092 78.3301 58.3933C79.4804 52.3565 80.0397 46.2219 80.0001 40.0766C80.0866 33.9053 79.528 27.7419 78.3334 21.6866V21.69ZM32.0068 51.4133V28.59L52.8734 40.0033L32.0068 51.4133Z"
                fill="#DCDE9F"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_565">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.2199 3.33337C28.275 3.33382 26.4099 4.10686 25.035 5.48244C23.66 6.85802 22.8878 8.72345 22.8883 10.6684C22.8887 12.6133 23.6617 14.4784 25.0373 15.8533C26.4129 17.2283 28.2783 18.0005 30.2233 18H37.5566V10.6667C37.5548 8.72233 36.7816 6.85809 35.4067 5.48321C34.0319 4.10832 32.1676 3.33514 30.2233 3.33337H30.2199ZM30.2199 22.89H10.6666C8.72166 22.89 6.8564 23.6627 5.48114 25.0379C4.10587 26.4132 3.33325 28.2785 3.33325 30.2234C3.33325 32.1683 4.10587 34.0336 5.48114 35.4088C6.8564 36.7841 8.72166 37.5567 10.6666 37.5567H30.2199C32.1648 37.5567 34.0301 36.7841 35.4054 35.4088C36.7806 34.0336 37.5532 32.1683 37.5532 30.2234C37.5532 28.2785 36.7806 26.4132 35.4054 25.0379C34.0301 23.6627 32.1648 22.89 30.2199 22.89ZM76.6666 30.22C76.6666 28.2751 75.894 26.4099 74.5187 25.0346C73.1434 23.6593 71.2782 22.8867 69.3332 22.8867C67.3883 22.8867 65.5231 23.6593 64.1478 25.0346C62.7725 26.4099 61.9999 28.2751 61.9999 30.22V37.5534H69.3332C71.2782 37.5534 73.1434 36.7808 74.5187 35.4055C75.894 34.0302 76.6666 32.165 76.6666 30.22ZM57.1099 30.22V10.6667C57.1099 8.72179 56.3373 6.85652 54.962 5.48126C53.5868 4.10599 51.7215 3.33337 49.7766 3.33337C47.8317 3.33337 45.9664 4.10599 44.5911 5.48126C43.2159 6.85652 42.4432 8.72179 42.4432 10.6667V30.22C42.4432 32.165 43.2159 34.0302 44.5911 35.4055C45.9664 36.7808 47.8317 37.5534 49.7766 37.5534C51.7215 37.5534 53.5868 36.7808 54.962 35.4055C56.3373 34.0302 57.1099 32.165 57.1099 30.22ZM49.7766 76.6667C51.7215 76.6667 53.5868 75.8941 54.962 74.5188C56.3373 73.1435 57.1099 71.2783 57.1099 69.3334C57.1099 67.3884 56.3373 65.5232 54.962 64.1479C53.5868 62.7727 51.7215 62 49.7766 62H42.4432V69.3334C42.4441 71.278 43.217 73.1428 44.5921 74.5178C45.9672 75.8929 47.8319 76.6658 49.7766 76.6667ZM49.7766 57.1067H69.3332C71.2782 57.1067 73.1434 56.3341 74.5187 54.9588C75.894 53.5835 76.6666 51.7183 76.6666 49.7734C76.6666 47.8284 75.894 45.9632 74.5187 44.5879C73.1434 43.2127 71.2782 42.44 69.3332 42.44H49.7799C47.835 42.4396 45.9696 43.2118 44.594 44.5867C43.2184 45.9617 42.4454 47.8268 42.4449 49.7717C42.4445 51.7166 43.2167 53.5821 44.5916 54.9576C45.9666 56.3332 47.8317 57.1063 49.7766 57.1067ZM3.33325 49.7767C3.33325 51.7216 4.10587 53.5869 5.48114 54.9622C6.8564 56.3374 8.72166 57.11 10.6666 57.11C12.6115 57.11 14.4768 56.3374 15.852 54.9622C17.2273 53.5869 17.9999 51.7216 17.9999 49.7767V42.4434H10.6666C8.72166 42.4434 6.8564 43.216 5.48114 44.5913C4.10587 45.9665 3.33325 47.8318 3.33325 49.7767ZM22.8899 49.7767V69.33C22.8895 71.275 23.6617 73.1404 25.0366 74.516C26.4116 75.8916 28.2767 76.6646 30.2216 76.665C32.1665 76.6655 34.0319 75.8933 35.4075 74.5183C36.7831 73.1434 37.5561 71.2783 37.5566 69.3334V49.78C37.557 47.8351 36.7848 45.9697 35.4099 44.5941C34.0349 43.2185 32.1698 42.4455 30.2249 42.445C28.28 42.4446 26.4146 43.2168 25.039 44.5917C23.6634 45.9667 22.8904 47.8318 22.8899 49.7767Z"
              fill="#DCDE9F"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
          >
            <g clip-path="url(#clip0_31_571)">
              <path
                d="M67.7232 14.9733C62.6232 12.6733 57.1566 10.9733 51.4399 10.0067C51.389 9.99689 51.3363 10.0032 51.2891 10.0247C51.2419 10.0462 51.2026 10.0818 51.1766 10.1267C50.4766 11.3567 49.6966 12.96 49.1499 14.2267C43.0869 13.3208 36.9229 13.3208 30.8599 14.2267C30.251 12.8229 29.5644 11.4541 28.8032 10.1267C28.7774 10.0813 28.7384 10.0448 28.6913 10.0222C28.6443 9.99956 28.5915 9.99182 28.5399 9.99999C22.8266 10.9667 17.3599 12.6667 12.2566 14.97C12.2127 14.9884 12.1754 15.0198 12.1499 15.06C1.77656 30.31 -1.06677 45.1833 0.329893 59.87C0.33378 59.906 0.344945 59.9408 0.36271 59.9723C0.380474 60.0038 0.404467 60.0314 0.433226 60.0533C6.48787 64.4614 13.241 67.8194 20.4099 69.9866C20.4599 70.002 20.5133 70.002 20.5633 69.9865C20.6132 69.9711 20.6573 69.9409 20.6899 69.9C22.2325 67.8369 23.5996 65.6481 24.7766 63.3566C24.7929 63.3253 24.8023 63.2908 24.8042 63.2556C24.806 63.2203 24.8003 63.185 24.7873 63.1521C24.7744 63.1193 24.7545 63.0896 24.7291 63.065C24.7036 63.0405 24.6732 63.0217 24.6399 63.01C22.4866 62.1991 20.4002 61.2205 18.3999 60.0833C18.364 60.0628 18.3337 60.0337 18.3118 59.9986C18.2898 59.9635 18.277 59.9235 18.2743 59.8822C18.2717 59.8409 18.2793 59.7996 18.2966 59.7619C18.3139 59.7243 18.3402 59.6916 18.3732 59.6666C18.7932 59.3566 19.2132 59.0333 19.6132 58.71C19.6492 58.6809 19.6926 58.6624 19.7385 58.6565C19.7844 58.6506 19.8311 58.6576 19.8732 58.6767C32.9632 64.5566 47.1399 64.5566 60.0766 58.6767C60.1189 58.6565 60.166 58.6486 60.2125 58.6539C60.2591 58.6592 60.3032 58.6775 60.3399 58.7066C60.7399 59.0333 61.1566 59.3566 61.5799 59.6666C61.6132 59.6911 61.64 59.7234 61.6578 59.7607C61.6756 59.7979 61.6839 59.8391 61.6819 59.8804C61.68 59.9216 61.6678 59.9618 61.6465 59.9972C61.6252 60.0326 61.5954 60.0622 61.5599 60.0833C59.5666 61.23 57.4932 62.2 55.3166 63.0066C55.2831 63.0188 55.2527 63.0379 55.2272 63.0627C55.2018 63.0876 55.1819 63.1176 55.169 63.1507C55.1561 63.1838 55.1503 63.2193 55.1522 63.2549C55.1541 63.2904 55.1635 63.3251 55.1799 63.3566C56.3799 65.6466 57.7532 67.8266 59.2632 69.8966C59.2946 69.9391 59.3384 69.9709 59.3885 69.9876C59.4386 70.0043 59.4926 70.0051 59.5432 69.99C66.7244 67.8288 73.4886 64.4692 79.5499 60.0533C79.5795 60.0326 79.6043 60.0059 79.6227 59.9748C79.6411 59.9438 79.6526 59.9092 79.6566 59.8733C81.3232 42.8933 76.8632 28.14 67.8266 15.0667C67.8044 15.0242 67.7677 14.9911 67.7232 14.9733ZM26.7332 50.9266C22.7932 50.9266 19.5432 47.3633 19.5432 42.9933C19.5432 38.62 22.7299 35.06 26.7332 35.06C30.7666 35.06 33.9866 38.65 33.9232 42.9933C33.9232 47.3666 30.7366 50.9266 26.7332 50.9266ZM53.3166 50.9266C49.3732 50.9266 46.1266 47.3633 46.1266 42.9933C46.1266 38.62 49.3099 35.06 53.3166 35.06C57.3499 35.06 60.5699 38.65 60.5066 42.9933C60.5066 47.3666 57.3532 50.9266 53.3166 50.9266Z"
                fill="#DCDE9F"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_571">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="info" style={{ color: "#DCDE9F" }}>
          <p className='info-p'  >
            COPYRIGHT @ 2022 Dive Into Skills
          </p>
          <p className='info-p'>Developed by: Ahmad Raza</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
