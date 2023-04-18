import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/FunctoinCard.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");

   if (categoryParam === "PhimAnime") {
      $("#category-text").text("PHIM ANIME");
      $(".title-home span").text("Phim Anime");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Anime"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimPhieuLuu") {
      $("#category-text").text("PHIM PHIÊU LƯU");
      $(".title-home span").text("Phim Phiêu Lưu");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Phiêu Lưu"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimVoThuat") {
      $("#category-text").text("PHIM VÕ THUẬT");
      $(".title-home span").text("Phim Võ Thuật");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Võ Thuật"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimHanhDong") {
      $("#category-text").text("PHIM HÀNH ĐÔNG");
      $(".title-home span").text("Phim Hành Động");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Hành Động"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimCoTrang") {
      $("#category-text").text("PHIM CỔ TRANG");
      $(".title-home span").text("Phim Cổ Trang");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Cổ Trang"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimMaKinhDi") {
      $("#category-text").text("PHIM MA - KINH DỊ");
      $(".title-home span").text("Phim Ma - Kinh Dị");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Ma - Kinh Dị"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimVienTuong") {
      $("#category-text").text("PHIM VIỄN TƯỞNG");
      $(".title-home span").text("Phim Viễn Tưởng");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Viễn Tưởng"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimTinhCam") {
      $("#category-text").text("PHIM TÌNH CẢM");
      $(".title-home span").text("Phim Tình Cảm");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Tình Cảm"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimHaiHuoc") {
      $("#category-text").text("PHIM HÀI HƯỚC");
      $(".title-home span").text("Phim Hài Hước");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Hài Hước"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "PhimTamLy") {
      $("#category-text").text("PHIM TÂM LÝ");
      $(".title-home span").text("Phim Tâm Lý");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Tâm Lý"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else {
      $("#category-text").text("PHIM KHOA HỌC");
      $(".title-home span").text("Phim Khoa Học");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Khoa Học"), 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   }
});
