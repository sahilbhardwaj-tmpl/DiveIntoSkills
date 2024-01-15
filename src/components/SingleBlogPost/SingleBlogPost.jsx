import React from "react";
import "./SingleBlogPostStyles.css";
import author_pic from "../../assets/author_pic.png";
import Blog_Img from "../../assets/Blog_Img.png";
import CardData from "../Card/CardData";
import CardBuilder from "../Card/CardBuilder";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SingleBlogPost() {
 

  const data = {
    title:
      "There is no one who loves pain itself, who seeks after it and wants to have it, because it is pain",
    author: {
      image: author_pic,
      name: "Ahmad Raza",
    },
    date: "25/03/2022",
    imageUrl: Blog_Img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra arcu imperdiet lectus pharetra, at scelerisque augue ultrices. Ut in condimentum turpis. Nunc pulvinar quis nisi sed fermentum. Nulla facilisi. Aenean at augue quis elit rutrum sollicitudin. Quisque congue et magna vel condimentum. In quis sem ut magna dictum feugiat eu vel ex. Mauris elementum diam eu tempus aliquet. Mauris tempor, ex eget auctor molestie, orci justo commodo orci, sit amet placerat tellus massa sed augue. Donec non fermentum leo, at tincidunt tellus. Maecenas ac pharetra justo. Sed commodo, ligula vel aliquam varius, enim metus eleifend felis, id interdum purus nunc non lectus Aenean a magna aliquam, pulvinar elit consectetur, consectetur eros. Morbi laoreet eu enim eu ultricies. Cras rutrum sit amet tortor sed mollis. Donec non enim efficitur, porta mauris vitae, ultrices velit. Quisque et lacus mollis nibh sollicitudin tristique ut vitae nunc. Vestibulum eu est arcu. Phasellus quis neque orci. Cras vel consequat tellus, sit amet congue neque.dictum arcu nec, dapibus urna. Quisque et metus varius, rhoncus nunc a, vestibulum lacus. Aliquam eget malesuada quam. Nulla eget sapien convallis, tristique nulla et, imperdiet lorem. Quisque sed lacus tellus. Proin tincidunt sapien euismod libero aliquet, nec vulputate turpis condimentum. Sed pellentesque nibh ac fermentum venenatis. Aenean a magna aliquam, pulvinar elitdictum arcu nec, dapibus urna. Quisque et metus varius, rhoncus nunc a, vestibulum lacus. Aliquam eget malesuada quam. Nulla eget sapien convallis, tristique nulla et, imperdiet lorem. Quisque sed lacus tellus. Proin tincidunt sapien euismod libero aliquet, nec vulputate turpis condimentum. Sed pellentesque nibh ac fermentum venenatis. Aenean a magna aliquam, pulvinar elit",
  };

  return (
    <>
      
      <div className="single-blog-post">
        <h2 className="blog-title">{data.title}</h2>

        <div className="author-section">
          <div className="author-info">
            <img
              src={data.author.image}
              alt={data.author.name}
              className="author-image"
            />
            <p>{data.author.name}</p>
          </div>
          <p className="blog-date">{data.date}</p>
        </div>

        <img src={data.imageUrl} alt="Blog Image" className="blog-image" />

        <div className="blog-description">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="social_media_links">
        <h2 style={{ textAlign: "center" }}>Sharing is Caring</h2>
        <div className="social_media_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clip-path="url(#clip0_36_1244)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 50.2792C0 75.1375 18.0542 95.8083 41.6667 100V63.8875H29.1667V50H41.6667V38.8875C41.6667 26.3875 49.7208 19.4458 61.1125 19.4458C64.7208 19.4458 68.6125 20 72.2208 20.5542V33.3333H65.8333C59.7208 33.3333 58.3333 36.3875 58.3333 40.2792V50H71.6667L69.4458 63.8875H58.3333V100C81.9458 95.8083 100 75.1417 100 50.2792C100 22.625 77.5 0 50 0C22.5 0 0 22.625 0 50.2792Z"
                fill="#183114"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_1244">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.104 4.44175C35.9915 4.21675 37.5498 4.16675 49.9998 4.16675C62.4498 4.16675 64.0082 4.22091 68.8915 4.44175C73.7748 4.66258 77.1082 5.44175 80.0248 6.57091C83.079 7.72508 85.8498 9.52925 88.1415 11.8626C90.4748 14.1501 92.2748 16.9167 93.4248 19.9751C94.5582 22.8917 95.3332 26.2251 95.5582 31.1001C95.7832 35.9959 95.8332 37.5542 95.8332 50.0001C95.8332 62.4501 95.779 64.0084 95.5582 68.8959C95.3373 73.7709 94.5582 77.1042 93.4248 80.0209C92.2748 83.0796 90.4718 85.8509 88.1415 88.1417C85.8498 90.4751 83.079 92.2751 80.0248 93.4251C77.1082 94.5584 73.7748 95.3334 68.8998 95.5584C64.0082 95.7834 62.4498 95.8334 49.9998 95.8334C37.5498 95.8334 35.9915 95.7792 31.104 95.5584C26.229 95.3376 22.8957 94.5584 19.979 93.4251C16.9203 92.2749 14.1491 90.472 11.8582 88.1417C9.52642 85.8529 7.72198 83.0829 6.57067 80.0251C5.4415 77.1084 4.6665 73.7751 4.4415 68.9001C4.2165 64.0042 4.1665 62.4459 4.1665 50.0001C4.1665 37.5501 4.22067 35.9917 4.4415 31.1084C4.66234 26.2251 5.4415 22.8917 6.57067 19.9751C7.72368 16.9171 9.5295 14.1472 11.8623 11.8584C14.15 9.52717 16.9185 7.72276 19.9748 6.57091C22.8915 5.44175 26.2248 4.66675 31.0998 4.44175H31.104ZM68.5207 12.6917C63.6873 12.4709 62.2373 12.4251 49.9998 12.4251C37.7623 12.4251 36.3123 12.4709 31.479 12.6917C27.0082 12.8959 24.5832 13.6417 22.9665 14.2709C20.829 15.1042 19.2998 16.0917 17.6957 17.6959C16.175 19.1753 15.0048 20.9763 14.2707 22.9667C13.6415 24.5834 12.8957 27.0084 12.6915 31.4792C12.4707 36.3126 12.4248 37.7626 12.4248 50.0001C12.4248 62.2376 12.4707 63.6876 12.6915 68.5209C12.8957 72.9917 13.6415 75.4167 14.2707 77.0334C15.004 79.0209 16.1748 80.8251 17.6957 82.3042C19.1748 83.8251 20.979 84.9959 22.9665 85.7292C24.5832 86.3584 27.0082 87.1042 31.479 87.3084C36.3123 87.5292 37.7582 87.5751 49.9998 87.5751C62.2415 87.5751 63.6873 87.5292 68.5207 87.3084C72.9915 87.1042 75.4165 86.3584 77.0332 85.7292C79.1707 84.8959 80.6998 83.9084 82.304 82.3042C83.8248 80.8251 84.9957 79.0209 85.729 77.0334C86.3582 75.4167 87.104 72.9917 87.3082 68.5209C87.529 63.6876 87.5748 62.2376 87.5748 50.0001C87.5748 37.7626 87.529 36.3126 87.3082 31.4792C87.104 27.0084 86.3582 24.5834 85.729 22.9667C84.8957 20.8292 83.9082 19.3001 82.304 17.6959C80.8245 16.1754 79.0236 15.0051 77.0332 14.2709C75.4165 13.6417 72.9915 12.8959 68.5207 12.6917ZM44.1457 64.1292C47.4151 65.4902 51.0556 65.6739 54.4454 64.6489C57.8352 63.6239 60.764 61.4539 62.7315 58.5094C64.6991 55.5649 65.5834 52.0287 65.2334 48.5047C64.8833 44.9807 63.3207 41.6875 60.8123 39.1876C59.2133 37.5896 57.2799 36.366 55.1512 35.6049C53.0226 34.8438 50.7516 34.5641 48.5019 34.786C46.2522 35.0079 44.0796 35.7258 42.1407 36.8881C40.2017 38.0504 38.5446 39.6282 37.2886 41.5078C36.0326 43.3874 35.209 45.5221 34.877 47.7582C34.545 49.9944 34.713 52.2763 35.3687 54.4397C36.0245 56.6032 37.1518 58.5943 38.6695 60.2697C40.1872 61.9452 42.0574 63.2633 44.1457 64.1292ZM33.3415 33.3417C35.5291 31.1541 38.1262 29.4188 40.9844 28.2349C43.8426 27.051 46.9061 26.4416 49.9998 26.4416C53.0936 26.4416 56.157 27.051 59.0153 28.2349C61.8735 29.4188 64.4706 31.1541 66.6582 33.3417C68.8458 35.5293 70.5811 38.1264 71.765 40.9846C72.9489 43.8429 73.5583 46.9063 73.5583 50.0001C73.5583 53.0938 72.9489 56.1573 71.765 59.0155C70.5811 61.8737 68.8458 64.4708 66.6582 66.6584C62.2401 71.0765 56.2479 73.5585 49.9998 73.5585C43.7517 73.5585 37.7596 71.0765 33.3415 66.6584C28.9234 62.2403 26.4414 56.2482 26.4414 50.0001C26.4414 43.752 28.9234 37.7598 33.3415 33.3417ZM78.7832 29.9501C79.3253 29.4387 79.7592 28.8237 80.0594 28.1416C80.3596 27.4595 80.5199 26.7241 80.5307 25.979C80.5416 25.2338 80.4028 24.494 80.1227 23.8035C79.8425 23.1129 79.4266 22.4855 78.8997 21.9586C78.3727 21.4316 77.7454 21.0157 77.0548 20.7356C76.3642 20.4554 75.6244 20.3166 74.8793 20.3275C74.1341 20.3384 73.3987 20.4986 72.7166 20.7988C72.0345 21.099 71.4195 21.533 70.9082 22.0751C69.9136 23.1294 69.3691 24.5298 69.3903 25.979C69.4114 27.4282 69.9965 28.8121 71.0213 29.8369C72.0462 30.8618 73.4301 31.4469 74.8793 31.468C76.3285 31.4891 77.7289 30.9446 78.7832 29.9501Z"
              fill="#183114"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              d="M98.5126 20.5707C95.0335 22.1124 91.296 23.1541 87.3668 23.6249C91.421 21.199 94.4541 17.381 95.9001 12.8832C92.0911 15.1457 87.9224 16.7382 83.5751 17.5916C80.6517 14.4702 76.7795 12.4013 72.5598 11.7061C68.3401 11.0108 64.0089 11.7282 60.2386 13.7468C56.4684 15.7654 53.47 18.9723 51.7091 22.8695C49.9482 26.7668 49.5232 31.1364 50.5001 35.2999C42.7822 34.9124 35.2319 32.9064 28.3394 29.412C21.4469 25.9177 15.3661 21.0131 10.4918 15.0166C8.82513 17.8916 7.8668 21.2249 7.8668 24.7749C7.86494 27.9707 8.65193 31.1176 10.158 33.9363C11.664 36.755 13.8425 39.1584 16.5001 40.9332C13.4179 40.8352 10.4038 40.0023 7.70846 38.5041V38.7541C7.70815 43.2363 9.2586 47.5806 12.0967 51.0499C14.9349 54.5191 18.8858 56.8996 23.2793 57.7874C20.4201 58.5612 17.4224 58.6752 14.5126 58.1207C15.7522 61.9775 18.1668 65.35 21.4183 67.7663C24.6699 70.1825 28.5956 71.5215 32.646 71.5957C25.7703 76.9933 17.2788 79.9211 8.53763 79.9082C6.98922 79.9086 5.44211 79.8182 3.9043 79.6374C12.7771 85.3423 23.1057 88.37 33.6543 88.3582C69.3626 88.3582 88.8835 58.7832 88.8835 33.1332C88.8835 32.2999 88.8626 31.4582 88.8251 30.6249C92.6222 27.879 95.8998 24.4786 98.5043 20.5832L98.5126 20.5707Z"
              fill="#183114"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.16651 11.8251C4.16651 9.79398 4.97336 7.84605 6.40958 6.40983C7.8458 4.97362 9.79372 4.16676 11.8248 4.16676H88.1665C89.1731 4.16511 90.1701 4.36202 91.1004 4.7462C92.0308 5.13039 92.8763 5.6943 93.5884 6.40566C94.3005 7.11702 94.8654 7.96186 95.2506 8.8918C95.6357 9.82174 95.8337 10.8185 95.8332 11.8251V88.1668C95.8343 89.1735 95.6369 90.1706 95.2522 91.101C94.8676 92.0314 94.3033 92.8768 93.5916 93.5889C92.8799 94.301 92.0348 94.8657 91.1046 95.2509C90.1744 95.636 89.1774 95.834 88.1707 95.8334H11.8248C10.8188 95.8334 9.82258 95.6352 8.89316 95.2501C7.96374 94.8649 7.1193 94.3005 6.40811 93.5889C5.69691 92.8773 5.13289 92.0326 4.74826 91.1029C4.36364 90.1733 4.16596 89.177 4.16651 88.1709V11.8251ZM40.4498 39.1168H52.8623V45.3501C54.654 41.7668 59.2373 38.5418 66.1248 38.5418C79.329 38.5418 82.4582 45.6793 82.4582 58.7751V83.0334H69.0957V61.7584C69.0957 54.3001 67.304 50.0918 62.754 50.0918C56.4415 50.0918 53.8165 54.6293 53.8165 61.7584V83.0334H40.4498V39.1168ZM17.5332 82.4626H30.8998V38.5418H17.5332V82.4584V82.4626ZM32.8123 24.2168C32.8375 25.3612 32.6339 26.4992 32.2133 27.5639C31.7928 28.6286 31.1638 29.5986 30.3633 30.4169C29.5628 31.2352 28.6069 31.8854 27.5517 32.3293C26.4966 32.7732 25.3633 33.0018 24.2186 33.0018C23.0738 33.0018 21.9406 32.7732 20.8854 32.3293C19.8303 31.8854 18.8744 31.2352 18.0739 30.4169C17.2734 29.5986 16.6444 28.6286 16.2238 27.5639C15.8033 26.4992 15.5996 25.3612 15.6248 24.2168C15.6743 21.9703 16.6014 19.8326 18.2077 18.2613C19.8139 16.69 21.9716 15.8102 24.2186 15.8102C26.4656 15.8102 28.6232 16.69 30.2295 18.2613C31.8357 19.8326 32.7629 21.9703 32.8123 24.2168Z"
              fill="#183114"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clip-path="url(#clip0_36_1234)">
              <path
                d="M97.9168 27.1125C97.3506 25.0926 96.2476 23.2639 94.7251 21.8208C93.1596 20.3333 91.2409 19.2693 89.1501 18.7292C81.3251 16.6667 49.9751 16.6667 49.9751 16.6667C36.9057 16.518 23.8394 17.172 10.8501 18.625C8.75925 19.205 6.84414 20.2929 5.27513 21.7917C3.73346 23.275 2.6168 25.1042 2.03346 27.1083C0.632184 34.6573 -0.0486531 42.3223 0.00013019 50C-0.0498698 57.6708 0.629297 65.3333 2.03346 72.8917C2.6043 74.8875 3.7168 76.7083 5.26263 78.1792C6.80846 79.65 8.73346 80.7125 10.8501 81.275C18.7793 83.3333 49.9751 83.3333 49.9751 83.3333C63.0612 83.4822 76.1441 82.8282 89.1501 81.375C91.2409 80.8349 93.1596 79.7708 94.7251 78.2833C96.247 76.8405 97.3487 75.0116 97.9126 72.9917C99.3505 65.4456 100.05 57.7775 100 50.0958C100.108 42.3817 99.41 34.6773 97.9168 27.1083V27.1125ZM40.0085 64.2667V35.7375L66.0918 50.0042L40.0085 64.2667Z"
                fill="#183114"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_1234">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M37.7748 4.16675C35.3437 4.1673 33.0123 5.1336 31.2936 6.85308C29.5749 8.57255 28.6097 10.9043 28.6103 13.3355C28.6108 15.7666 29.5771 18.098 31.2966 19.8167C33.0161 21.5354 35.3478 22.5006 37.779 22.5001H46.9457V13.3334C46.9435 10.9029 45.977 8.57264 44.2584 6.85404C42.5398 5.13543 40.2095 4.16895 37.779 4.16675H37.7748ZM37.7748 28.6126H13.3332C10.902 28.6126 8.57044 29.5783 6.85136 31.2974C5.13227 33.0165 4.1665 35.3481 4.1665 37.7792C4.1665 40.2104 5.13227 42.542 6.85136 44.2611C8.57044 45.9801 10.902 46.9459 13.3332 46.9459H37.7748C40.206 46.9459 42.5376 45.9801 44.2566 44.2611C45.9757 42.542 46.9415 40.2104 46.9415 37.7792C46.9415 35.3481 45.9757 33.0165 44.2566 31.2974C42.5376 29.5783 40.206 28.6126 37.7748 28.6126ZM95.8332 37.7751C95.8332 35.3439 94.8674 33.0123 93.1483 31.2933C91.4292 29.5742 89.0976 28.6084 86.6665 28.6084C84.2353 28.6084 81.9038 29.5742 80.1847 31.2933C78.4656 33.0123 77.4998 35.3439 77.4998 37.7751V46.9417H86.6665C89.0976 46.9417 91.4292 45.976 93.1483 44.2569C94.8674 42.5378 95.8332 40.2062 95.8332 37.7751ZM71.3873 37.7751V13.3334C71.3873 10.9023 70.4216 8.57069 68.7025 6.8516C66.9834 5.13252 64.6518 4.16675 62.2207 4.16675C59.7895 4.16675 57.4579 5.13252 55.7388 6.8516C54.0198 8.57069 53.054 10.9023 53.054 13.3334V37.7751C53.054 40.2062 54.0198 42.5378 55.7388 44.2569C57.4579 45.976 59.7895 46.9417 62.2207 46.9417C64.6518 46.9417 66.9834 45.976 68.7025 44.2569C70.4216 42.5378 71.3873 40.2062 71.3873 37.7751ZM62.2207 95.8334C64.6518 95.8334 66.9834 94.8676 68.7025 93.1485C70.4216 91.4295 71.3873 89.0979 71.3873 86.6667C71.3873 84.2356 70.4216 81.904 68.7025 80.1849C66.9834 78.4658 64.6518 77.5001 62.2207 77.5001H53.054V86.6667C53.0551 89.0975 54.0212 91.4285 55.7401 93.1473C57.4589 94.8662 59.7898 95.8323 62.2207 95.8334ZM62.2207 71.3834H86.6665C89.0976 71.3834 91.4292 70.4176 93.1483 68.6985C94.8674 66.9795 95.8332 64.6479 95.8332 62.2167C95.8332 59.7856 94.8674 57.454 93.1483 55.7349C91.4292 54.0158 89.0976 53.0501 86.6665 53.0501H62.2248C59.7937 53.0495 57.4619 54.0148 55.7424 55.7335C54.0229 57.4521 53.0566 59.7835 53.0561 62.2147C53.0555 64.6458 54.0208 66.9776 55.7395 68.6971C57.4582 70.4165 59.7895 71.3829 62.2207 71.3834ZM4.1665 62.2209C4.1665 64.6521 5.13227 66.9836 6.85136 68.7027C8.57044 70.4218 10.902 71.3876 13.3332 71.3876C15.7643 71.3876 18.0959 70.4218 19.815 68.7027C21.5341 66.9836 22.4998 64.6521 22.4998 62.2209V53.0542H13.3332C10.902 53.0542 8.57044 54.02 6.85136 55.7391C5.13227 57.4582 4.1665 59.7898 4.1665 62.2209ZM28.6123 62.2209V86.6626C28.6118 89.0937 29.577 91.4255 31.2957 93.145C33.0144 94.8645 35.3458 95.8308 37.7769 95.8313C40.2081 95.8319 42.5399 94.8666 44.2593 93.1479C45.9788 91.4292 46.9451 89.0979 46.9457 86.6667V62.2251C46.9462 59.7939 45.981 57.4621 44.2623 55.7427C42.5436 54.0232 40.2122 53.0569 37.7811 53.0563C35.3499 53.0558 33.0181 54.021 31.2987 55.7397C29.5792 57.4584 28.6129 59.7898 28.6123 62.2209Z"
              fill="#183114"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clip-path="url(#clip0_36_1230)">
              <path
                d="M84.6542 18.7167C78.2792 15.8417 71.4459 13.7167 64.3 12.5084C64.2364 12.4962 64.1705 12.504 64.1116 12.5309C64.0526 12.5578 64.0034 12.6023 63.9709 12.6584C63.0959 14.1959 62.1209 16.2001 61.4375 17.7834C53.8588 16.651 46.1538 16.651 38.5751 17.7834C37.8139 16.0286 36.9557 14.3177 36.0042 12.6584C35.972 12.6016 35.9232 12.5561 35.8644 12.5278C35.8055 12.4995 35.7395 12.4898 35.675 12.5001C28.5334 13.7084 21.7 15.8334 15.3209 18.7126C15.266 18.7356 15.2195 18.7748 15.1875 18.8251C2.22088 37.8875 -1.33328 56.4792 0.412549 74.8375C0.417408 74.8825 0.431364 74.926 0.45357 74.9654C0.475776 75.0048 0.505766 75.0393 0.541716 75.0667C8.11002 80.5768 16.5515 84.7743 25.5125 87.4834C25.575 87.5026 25.6418 87.5025 25.7043 87.4832C25.7667 87.4639 25.8219 87.4262 25.8625 87.375C27.7909 84.7962 29.4996 82.0602 30.9709 79.1959C30.9913 79.1567 31.0031 79.1136 31.0054 79.0695C31.0077 79.0254 31.0005 78.9813 30.9843 78.9402C30.9681 78.8991 30.9433 78.862 30.9115 78.8314C30.8797 78.8007 30.8417 78.7772 30.8 78.7625C28.1084 77.7489 25.5004 76.5257 23 75.1042C22.9551 75.0786 22.9173 75.0422 22.8899 74.9983C22.8625 74.9544 22.8464 74.9044 22.8431 74.8528C22.8398 74.8011 22.8494 74.7495 22.8709 74.7025C22.8925 74.6555 22.9254 74.6145 22.9667 74.5834C23.4917 74.1959 24.0167 73.7917 24.5167 73.3875C24.5617 73.3512 24.6159 73.3281 24.6733 73.3207C24.7307 73.3133 24.789 73.3221 24.8417 73.3459C41.2042 80.6959 58.925 80.6959 75.0959 73.3459C75.1488 73.3206 75.2076 73.3108 75.2658 73.3174C75.324 73.3241 75.3792 73.3469 75.425 73.3834C75.925 73.7917 76.4459 74.1959 76.9751 74.5834C77.0167 74.6139 77.0502 74.6543 77.0725 74.7009C77.0947 74.7475 77.1051 74.7989 77.1026 74.8505C77.1001 74.9021 77.0849 74.9523 77.0583 74.9966C77.0316 75.0408 76.9945 75.0778 76.9501 75.1042C74.4584 76.5375 71.8667 77.75 69.1459 78.7584C69.1041 78.7735 69.066 78.7974 69.0342 78.8285C69.0024 78.8596 68.9776 78.897 68.9614 78.9385C68.9453 78.9799 68.9381 79.0242 68.9405 79.0686C68.9428 79.113 68.9546 79.1564 68.9751 79.1959C70.4751 82.0584 72.1917 84.7834 74.0792 87.3709C74.1185 87.424 74.1731 87.4637 74.2358 87.4845C74.2984 87.5054 74.366 87.5065 74.4292 87.4875C83.4057 84.786 91.8609 80.5866 99.4375 75.0667C99.4745 75.0409 99.5055 75.0074 99.5285 74.9686C99.5515 74.9298 99.566 74.8865 99.5709 74.8417C101.654 53.6167 96.0792 35.175 84.7834 18.8334C84.7557 18.7803 84.7099 18.7389 84.6542 18.7167ZM33.4167 63.6584C28.4917 63.6584 24.4292 59.2042 24.4292 53.7417C24.4292 48.275 28.4125 43.825 33.4167 43.825C38.4584 43.825 42.4834 48.3125 42.4042 53.7417C42.4042 59.2084 38.4209 63.6584 33.4167 63.6584ZM66.6459 63.6584C61.7167 63.6584 57.6584 59.2042 57.6584 53.7417C57.6584 48.275 61.6375 43.825 66.6459 43.825C71.6875 43.825 75.7125 48.3125 75.6334 53.7417C75.6334 59.2084 71.6917 63.6584 66.6459 63.6584Z"
                fill="#183114"
              />
            </g>
            <defs>
              <clipPath id="clip0_36_1230">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div>
        <h2
          className="Read_Related_Blogs"
          style={{ textAlign: "center", marginTop: "60px" }}
        >
          Read Related Blogs
        </h2>
        <div className="related-blogs ">
         
            {CardData.slice(0, 4).map((data, indx) => {
              return (
                
                  <CardBuilder
                    img={data.blogImg}
                    title={data.title}
                    description={data.description}
                    date={data.date}
                    author={data.author}
                  />
               
              );
            })}
         
        </div>
      </div>
    </>
  );
}

export default SingleBlogPost;
