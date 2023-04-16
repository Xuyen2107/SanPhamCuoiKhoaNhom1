import { allMovies } from "../DATA/DataALLMovies.js";
import { movieIntroHTML } from "../DATA/FunctionGioiThieuPhim.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");
   if (categoryParam === "tho-san-thanh-pho-can-cu-bi-mat-shinjuku") {
      const phim1 = movieIntroHTML(allMovies, "Thợ Săn Thành Phố: Căn Cứ Bí Mật Shinjuku");
      document.getElementById("movie-intro").innerHTML = phim1;
   } else if (categoryParam === "josee-to-tora-to-sakana-tachi") {
      const phim2 = movieIntroHTML(allMovies, "Josee to Tora to Sakana-tachi");
      document.getElementById("movie-intro").innerHTML = phim2;
   } else if (categoryParam === "hibike-euphonium-movie-3-chikai-no-finale") {
      const phim3 = movieIntroHTML(allMovies, "Hibike! Euphonium Movie 3: Chikai no Finale");
      document.getElementById("movie-intro").innerHTML = phim3;
   } else if (categoryParam === "mahouka-koukou-no-rettousei-tsuioku-hen") {
      const phim4 = movieIntroHTML(allMovies, "Mahouka Koukou no Rettousei: Tsuioku-hen");
      document.getElementById("movie-intro").innerHTML = phim4;
   } else if (categoryParam === "clannad-movie") {
      const phim5 = movieIntroHTML(allMovies, "Clannad Movie");
      document.getElementById("movie-intro").innerHTML = phim5;
   } else if (categoryParam === "dau-pha-thuong-khung-tam-nien-chi-uoc") {
      const phim6 = movieIntroHTML(allMovies, "Đấu Phá Thương Khung: Tam Niên Chi Ước");
      document.getElementById("movie-intro").innerHTML = phim6;
   } else if (categoryParam === "hoc-vien-anh-hung-3-nhiem-vu-giai-cuu-the-gioi") {
      const phim7 = movieIntroHTML(allMovies, "Học Viện Anh Hùng 3: Nhiệm Vụ Giải Cứu Thế Giới");
      document.getElementById("movie-intro").innerHTML = phim7;
   } else if (categoryParam === "toa-nha-troi-dat") {
      const phim8 = movieIntroHTML(allMovies, "Tòa Nhà Trôi Dạt");
      document.getElementById("movie-intro").innerHTML = phim8;
   } else if (categoryParam === "pokemon-bien-nien-su-arceus") {
      const phim9 = movieIntroHTML(allMovies, "Pokemon: Biên Niên Sử Arceus");
      document.getElementById("movie-intro").innerHTML = phim9;
   } else if (categoryParam === "yuru-camp-movie") {
      const phim10 = movieIntroHTML(allMovies, "Yuru Camp Movie");
      document.getElementById("movie-intro").innerHTML = phim10;
   } else if (categoryParam === "that-hinh-dai-toi-moi-thu-edinburgh-phan-1") {
      const phim11 = movieIntroHTML(allMovies, "Thất Hình Đại Tội: Mối Thù Edinburgh Phần 1");
      document.getElementById("movie-intro").innerHTML = phim11;
   } else if (categoryParam === "eiga-daisuki-pompo-san") {
      const phim12 = movieIntroHTML(allMovies, "Eiga Daisuki Pompo-san");
      document.getElementById("movie-intro").innerHTML = phim12;
   } else if (categoryParam === "isekai-ojisan") {
      const phim13 = movieIntroHTML(allMovies, "Isekai Ojisan");
      document.getElementById("movie-intro").innerHTML = phim13;
   } else if (categoryParam === "hoc-vien-anh-hung-6") {
      const phim14 = movieIntroHTML(allMovies, "Học Viện Anh Hùng 6");
      document.getElementById("movie-intro").innerHTML = phim14;
   } else if (categoryParam === "cuoc-song-nong-dan-o-the-gioi-khac") {
      const phim15 = movieIntroHTML(allMovies, "Cuộc sống nông dân ở thế giới khá");
      document.getElementById("movie-intro").innerHTML = phim15;
   } else if (categoryParam === "phu-thuy-bang-kiem-se-thong-tri-the-gioi") {
      const phim16 = movieIntroHTML(allMovies, "Phù Thủy Băng Kiếm Sẽ Thống Trị Thế Giới");
      document.getElementById("movie-intro").innerHTML = phim16;
   } else if (categoryParam === "trieu-hoi-su-cuoi-cung") {
      const phim17 = movieIntroHTML(allMovies, "Triệu Hồi Sư Cuối Cùng");
      document.getElementById("movie-intro").innerHTML = phim17;
   } else if (categoryParam === "nijiyon-animation") {
      const phim18 = movieIntroHTML(allMovies, "Nijiyon Animation");
      document.getElementById("movie-intro").innerHTML = phim18;
   } else if (categoryParam === "malevolent-spirits-mononogatari-2023") {
      const phim19 = movieIntroHTML(allMovies, "Malevolent Spirits: Mononogatari");
      document.getElementById("movie-intro").innerHTML = phim19;
   } else if (categoryParam === "am-duong-su-manh-nhat-chuyen-sinh") {
      const phim20 = movieIntroHTML(allMovies, "Âm dương sư mạnh nhất chuyển sinh");
      document.getElementById("movie-intro").innerHTML = phim20;
   // } else if (categoryParam === "") {
   //    const phim2 = movieIntroHTML(allMovies, "");
   //    document.getElementById("movie-intro").innerHTML = phim2;
   } else if (categoryParam === "thanh-guom-diet-quy-phan-quyet-chien-ky-vien-tran") {
      const phim51 = movieIntroHTML(allMovies, "Thanh Gươm Diệt Quỷ: Phần Quyết Chiến Kỹ Viện Trấn");
      document.getElementById("movie-intro").innerHTML = phim51;
   } else if (categoryParam === "lupin-de-tam-vs-mat-meo") {
      const phim52 = movieIntroHTML(allMovies, "Lupin Đệ Tam Vs Mắt Mèo");
      document.getElementById("movie-intro").innerHTML = phim52;
   }
});

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("watch-trailer").addEventListener("click", function () {
      const $trailer = document.getElementById("trailer");
      $trailer.style.display = "block";
      $trailer.scrollIntoView({ behavior: "smooth" });
   });
});
