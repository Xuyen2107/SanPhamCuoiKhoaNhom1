export function watchMovieHTML(allMovies, nameCondition) {
   let result = "";
   let arr = allMovies.filter((allMovies) => allMovies.name === nameCondition);

   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];

      result += `
      <div>
               <div class="watch-title">
                  <a href="./Home.html" title="Phim Mới">
                     <i class="fa-solid fa-house"></i>
                     Phim mới
                  </a>
                  <i class="fa-solid fa-angle-right"></i>
                  <span> Xem Phim </span>
                  <i class="fa-solid fa-angle-right"></i>
                  <span>${Item.name}</span>
               </div>

               <div class="watch-video">
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

               <div class="watch-note">
                  <p>Phim Xem tốt nhất trên trình duyệt Safari, FireFox hoặc Chrome. Đừng tiếc 1 comment bên dưới để đánh giá phim hoặc báo lỗi.</p>
               </div>
               <div class="hr">
                  <hr />
               </div>

               <div class="watch-rate">
               <div class="like-share">
               <div
                  class="fb-like"
                  data-href="${Item.link2}"
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
               <p id="ketQua"></p>
           </div>
           <div id="like-rate" class="like-rate">
               (
               <span id="rate-like">${Item.rate}</span>
                   /10)
           </div>
       </div>
               <hr class="hr1" />
               <div class="watch-name">
                  <p>${Item.name}</p>
                  <span>Xem nội dung chi tiết <a href="${Item.link1}">[Tại Đây]</a></span>
               </div>
               <div class="fb-comments" data-href="http://127.0.0.1:5500/WebXemPhim/HTML/${Item.link1.split("/").pop()}" data-width="100%" data-numposts="10"></div>
            </div>
      `;
   }
   return result;
}
