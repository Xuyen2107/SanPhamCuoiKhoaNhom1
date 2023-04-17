export function movieIntroHTML(allMovies, nameCondition) {
   let result = "";
   let arr = allMovies.filter((allMovies) => allMovies.name === nameCondition);
   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];

      result +=
         `
        <div>
               <div class="intro-title">
                  <a href="./Home.html" title="Xem Phim">
                     <i class="fa-solid fa-house"></i>
                     Phim mới
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                  <span>
                     Giới Thiệu Phim
                     <i class="fa-solid fa-angle-right"></i>
                  </span>
                  <span class="intro-name">${Item.name}</span>
               </div>

               <div class="intro-info">
                  <a href="${Item.link2}" class="icon-play"><i class="fa-solid fa-circle-play"></i></a>
                  <img src="${Item.image}" alt="" class="info-img-1"/>
                  <img src="${Item.image}" alt="" class="info-img-2"/>
                  <div class="info-place">
                     <p class="place-name">${Item.name}</p>
                     <p class="place-e-name">${Item.eName}</p>
                     <div class="place-watch">
                        <a href="##" id="watch-trailer">
                           <i class="fa-brands fa-youtube"></i>
                           Trailer
                        </a>

                        <a href="${Item.link2}">
                           <i class="fa-regular fa-circle-play"></i>
                           Xem Phim
                        </a>
                     </div>
                  </div>
               </div>

               <div class="intro-content">
                  <div class="intro-rate">
                     <div class="like-share">
                        <span>Thich</span>
                        <span>Chia se</span>
                     </div>
                     <div class="rate-star" style="color: white">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                     </div>

                     <ul class="content-info">
                        <li>
                           <label>Đang Phát: </label>
                           <span style="color: red;">${Item.nowPlaying}</span>
                        </li>
                        <li>
                           <label>Năm Phát Hành: </label>
                           <span>${Item.year}</span>
                        </li>
                        <li>
                           <label>Quốc Gia: </label>
                           <span>${Item.country}</span>
                        </li>
                        <li>
                           <label>Thể Loại: </label>
                           <span>${Item.category}</span>
                        </li>
                        <li>
                           <label>Đạo Diễn: </label>
                           <span>${Item.director}</span>
                        </li>
                        <li>
                           <label>Thời Lượng: </label>
                           <span>${Item.time}</span>
                        </li>
                        <li>
                           <label>Diễn Viên: </label>
                           <span>${Item.actor}</span>
                        </li>
                     </ul>
                     <div id="trailer">
                        <hr class="content-hr" />
                        <div class="trailer-video">
                           <iframe
                              width="100%"
                              height="100%"
                              src="${Item.iframe}"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                           ></iframe>
                        </div>
                     </div>
                     <hr class="content-hr" />
                     <div class="content-review">
                        <p>Nội dung phim và review:</p>
                        <span>${Item.review}</span>
                     </div>
                  </div>
               </div>
               <div class="fb-comments" data-href="http://127.0.0.1:5500/WebXemPhim/HTML/${Item.link1.split("/").pop()}" data-width="100%" data-numposts="10"></div>
            </div>
            
        `;
   }
   return result;
}

//select all elements
const stars = document.querySelectorAll(".star-widget i");
const message = document.querySelector("#ketQua");
//loop through the stars

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove("active");
        });

        const rating = index1 + 1;

        switch (rating) {
            case 1:
              message.innerHTML = "Dở tệ ";
              break;
            case 2:
              message.innerHTML = "Dở";
              break;
            case 3:
              message.innerHTML = "Không hay";
              break;
            case 4:
              message.innerHTML = "Không hay lắm";
              break;
            case 5:
              message.innerHTML = "Bình thường";
              break;
            case 6:
              message.innerHTML = "Xem Được";
              break;
            case 7:
              message.innerHTML = "Có vẻ hay";
              break;
            case 8:
              message.innerHTML = "Hay";
              break;
            case 9:
              message.innerHTML = "Rất hay";
              break;
            case 10:
              message.innerHTML = "Tuyệt phẩm";
              break;
            default:
              message.innerHTML = "";
              break;
          }
    });
});
