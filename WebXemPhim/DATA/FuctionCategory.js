export function movieIntro(allMovies, nameCondition) {
   let arr = allMovies.filter(nameCondition);
   for (let i = 0; i < arr.length; i++) {
      const Item = arr[i];
      const phim = document.getElementById("intro-category");
      for (let j = 0; j < Item.category.length; j++) {
         const Item1 = Item.category[j];
         const categoryLink = document.createElement("a");
         categoryLink.innerHTML = `${Item1} <span style="display: inline-block; white-space: nowrap;">&raquo;</span>`;
         categoryLink.href = `GioiThieuPhim.html?category=${encodeURIComponent(Item1)}`;
         categoryLink.title = `${Item1}`;
         phim.appendChild(categoryLink);
      }
   }
}
phim(allMovies, (Item) => Item.name.includes("Josee to Tora to Sakana-tachi"));

// document.getElementById("watch-trailer").addEventListener("click", function () {
//     const phimB = document.getElementById("trailer");
//     phimB.style.display = "block";
//     phimB.scrollIntoView({ behavior: "smooth" });
// });
