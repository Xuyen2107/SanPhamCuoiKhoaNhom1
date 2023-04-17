import { allMovies } from "../DATA/DataALLMovies.js";
import { movieIntroHTML } from "../DATA/FunctionGioiThieuPhim.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");
   const film = allMovies.find((x) => x.link1.split("=").pop() == categoryParam);
   const phim = movieIntroHTML(allMovies, film.name);
   document.getElementById("movie-intro").innerHTML = phim;
});

document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("watch-trailer").addEventListener("click", function () {
      const $trailer = document.getElementById("trailer");
      $trailer.style.display = "block";
      $trailer.scrollIntoView({ behavior: "smooth" });
   });
});
