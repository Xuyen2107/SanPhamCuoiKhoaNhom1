import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/FunctoinCard.js";

$(document).ready(function () {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
   const categoryParam = urlParams.get("Phim");

   if (categoryParam === "Phim2023") {
      $("#category-text").text("Phim 2023");
      $(".title-home span").text("Phim 2023");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2023, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2022") {
      $("#category-text").text("Phim 2022");
      $(".title-home span").text("Phim 2022");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2022, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2021") {
      $("#category-text").text("Phim 2021");
      $(".title-home span").text("Phim 2021");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2021, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2020") {
      $("#category-text").text("PHIM 2020");
      $(".title-home span").text("Phim 2020");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2020, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2019") {
      $("#category-text").text("Phim 2019");
      $(".title-home span").text("Phim 2019");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2019, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2018") {
      $("#category-text").text("Phim 2018");
      $(".title-home span").text("Phim 2018");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2018, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2017") {
      $("#category-text").text("Phim 2017");
      $(".title-home span").text("Phim 2017");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2017, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2016") {
      $("#category-text").text("Phim 2016");
      $(".title-home span").text("Phim 2016");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2016, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2015") {
      $("#category-text").text("Phim 2015");
      $(".title-home span").text("Phim 2015");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2015, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2014") {
      $("#category-text").text("Phim 2014");
      $(".title-home span").text("Phim 2014");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2014, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2013") {
      $("#category-text").text("Phim 2013");
      $(".title-home span").text("Phim 2013");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2013, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2012") {
      $("#category-text").text("Phim 2012");
      $(".title-home span").text("Phim 2012");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2012, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2011") {
      $("#category-text").text("Phim 2011");
      $(".title-home span").text("Phim 2011");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2011, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else if (categoryParam === "Phim2010") {
      $("#category-text").text("Phim 2010");
      $(".title-home span").text("Phim 2010");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === 2010, 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   } else {
      $("#category-text").text("PHIM TRƯỚC 2010");
      $(".title-home span").text("Phim Trước 2010");

      const phimLeHTML = generateHTML(allMovies, (Item) => Item.year === "Phim Khoa Học", 0, 25);
      document.getElementById("card").innerHTML = phimLeHTML;
   }
});
