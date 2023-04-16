// lấy giá trị từ khóa tìm kiếm từ bộ nhớ trình duyệt
var searchText = localStorage.getItem("searchText");

// xuất kết quả tìm kiếm ra màn hình
var searchResult = document.getElementById("search-result");
searchResult.innerHTML = "Kết quả tìm kiếm cho: " + searchText;

// xoá giá trị từ khóa tìm kiếm khỏi bộ nhớ trình duyệt
localStorage.removeItem("searchText");
