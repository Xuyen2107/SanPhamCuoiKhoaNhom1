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
