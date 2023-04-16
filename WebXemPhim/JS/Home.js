import { allMovies } from "../DATA/DataALLMovies.js";
import { generateHTML } from "../DATA/FunctoinCard.js";
import { homeGenerateHTML } from "../DATA/HomeFunction.js";

document.querySelectorAll(".card-1");
const phimLeHTML = homeGenerateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 0, 1);
document.querySelectorAll(".card-1")[0].innerHTML = phimLeHTML;
const phimBoHTML = homeGenerateHTML(allMovies, (Item) => Item.category.includes("Phim Bộ"), 0, 1);
document.querySelectorAll(".card-1")[1].innerHTML = phimBoHTML;
const phimRapHTML = homeGenerateHTML(allMovies, (Item) => Item.category.includes("Phim Chiếu Rạp"), 0, 1);
document.querySelectorAll(".card-1")[2].innerHTML = phimRapHTML;

document.querySelectorAll(".home-row-2");
const phimLe1HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 1, 7);
document.querySelectorAll(".home-row-2")[0].innerHTML = phimLe1HTML;
const phimBo1HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 1, 7);
document.querySelectorAll(".home-row-2")[1].innerHTML = phimBo1HTML;
const phimRap1HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Chiếu Rạp"), 1, 7);
document.querySelectorAll(".home-row-2")[2].innerHTML = phimRap1HTML;

document.querySelectorAll(".home-row-3");
const phimLe2HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 7, 12);
document.querySelectorAll(".home-row-3")[0].innerHTML = phimLe2HTML;
const phimBo2HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Lẻ"), 7, 12);
document.querySelectorAll(".home-row-3")[1].innerHTML = phimBo2HTML;
const phimRap2HTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Chiếu Rạp"), 7, 12);
document.querySelectorAll(".home-row-3")[2].innerHTML = phimRap2HTML;

const phimSapChieuHTML = generateHTML(allMovies, (Item) => Item.category.includes("Phim Sắp Chiếu"), 0, 10);
document.getElementById("card-11").innerHTML = phimSapChieuHTML;
