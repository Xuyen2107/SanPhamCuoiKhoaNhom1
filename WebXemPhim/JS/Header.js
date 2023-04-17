import { allMovies } from "../DATA/DataALLMovies.js";

const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector("#search-text");
const returnSearch = document.querySelector("#return-search");

searchBox.addEventListener("input", () => {
   const searchTerm = searchInput.value.toLowerCase();
   const searchResults = allMovies.filter((movie) => {
      for (let prop in movie) {
         if (movie[prop].toString().toLowerCase().includes(searchTerm)) {
            return true;
         }
      }
      return false;
   });

   if (searchTerm === "") {
      returnSearch.innerHTML = "";
      returnSearch.style.display = "none";
   } else if (searchResults.length > 0) {
      const searchItems = searchResults
         .map((result) => {
            return `
        <li class="menu-item">
          <a href="${result.link1}" title="${result.name}">
            <img src="${result.image}" alt="${result.name}" />
            <div>
              <p>${result.name}</p>
              <p>${result.year}</p>
            </div>
          </a>
        </li>
      `;
         })
         .join("");
      returnSearch.innerHTML = `<ul id="return-card">${searchItems}</ul>`;
      returnSearch.style.display = "block";
   } else {
      returnSearch.innerHTML = `<p>No results found.</p>`;
      returnSearch.style.display = "block";
   }
});
