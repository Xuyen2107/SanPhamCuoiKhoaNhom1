import { allMovies } from "../DATA/DataALLMovies.js";
import { watchMovieHTML } from "../DATA/FunctoionWacth.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");
   const film = allMovies.find((x) => x.link2.split("=").pop() == categoryParam);
   const phim = watchMovieHTML(allMovies, film.name);
   document.getElementById("watch").innerHTML = phim;
});

document.addEventListener("DOMContentLoaded", function () {
   const stars = document.querySelectorAll(".star-widget i");
   const message = document.querySelector("#ketQua");
   const rateLike = document.querySelector("#rate-like");
   //loop through the stars
   let ratingCount = 0;

   stars.forEach((star, index1) => {
      star.addEventListener("click", () => {
         // Lấy vị trí của ngôi sao được nhấn
         const position = Array.from(stars).indexOf(star);
         // Cập nhật giá trị rate-like
         rateLike.innerText = position + 1;
         stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
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
});
