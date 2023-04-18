export function movieIntroHTML(allMovies, nameCondition) {
   let result = "";
   let arr = allMovies.filter((allMovies) => allMovies.name === nameCondition);
   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];

      result += `
      <div>
      <div class="intro-title">
         <a href="./Home.html" title="Xem Phim">
            <i class="fa-solid fa-house"></i>
            Phim mới
         </a>
         <i class="fa-solid fa-angle-right"></i>
         <span> Giới Thiệu Phim </span>
         <i class="fa-solid fa-angle-right"></i>
         <span class="intro-name">${Item.name}</span>
      </div>

      <div class="intro-info">
         <a href="${Item.link2}" class="icon-play"><i class="fa-solid fa-circle-play"></i></a>
         <img src="${Item.image}" alt="${Item.name}" class="info-img-1" />
         <img src="${Item.image}" alt="${Item.name}" class="info-img-2" />
         <div class="info-place">
            <p class="place-name">${Item.name}</p>
            <p class="place-e-name">${Item.eName}</p>
            <div class="place-watch">
               <button type="button" id="watch-trailer">
                  <i class="fa-brands fa-youtube"></i>
                  Trailer
               </button>

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
               <div
                  class="fb-like"
                  data-href="http://127.0.0.1:5500/WebXemPhim/HTML/${Item.link1.split("/").pop()}"
                  data-width=""
                  data-layout="standard"
                  data-action="like"
                  data-size="large"
                  data-share="true"
               ></div>
            </div>
            <p class="mess">Đánh giá phim:</p>
            <div id="star-container">
               <div class="star-widget">
                  <i class="fa-solid fa-star" title="Dở tệ"></i>
                  <i class="fa-solid fa-star" title="Dở"></i>
                  <i class="fa-solid fa-star" title="Không hay"></i>
                  <i class="fa-solid fa-star" title="Không hay lắm"></i>
                  <i class="fa-solid fa-star" title="Bình thường"></i>
                  <i class="fa-solid fa-star" title="Xem Được"></i>
                  <i class="fa-solid fa-star" title="Có vẻ hay"></i>
                  <i class="fa-solid fa-star" title="Hay"></i>
                  <i class="fa-solid fa-star" title="Rất hay"></i>
                  <i class="fa-solid fa-star" title="Tuyệt phẩm"></i>
                  <div id="like-rate" class="like-rate">(<span id="rate-count">0</span>/10)</div>
               </div>
               <p id="ketQua"></p>
            </div>
            <hr class="content-hr" />
            <ul class="content-info">
               <li>
                  <label>Đang Phát: </label>
                  <span style="color: red">${Item.nowPlaying}</span>
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
               <span>
                  ${Item.review}
            </div>
         </div>
      </div>
      <div class="fb-comments" data-href="http://127.0.0.1:5500/WebXemPhim/HTML/${Item.link1.split("/").pop()}" data-width="100%" data-numposts="10"></div>
   </div>
`;
   }
   return result;
}
