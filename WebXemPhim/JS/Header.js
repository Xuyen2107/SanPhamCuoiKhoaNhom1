// lấy đối tượng biểu mẫu tìm kiếm
var searchForm = document.getElementById("search-form");

// thêm sự kiện "submit" vào biểu mẫu tìm kiếm
searchForm.addEventListener("submit", function (event) {
   // ngăn chặn hành động mặc định của biểu mẫu tìm kiếm
   event.preventDefault();

   // lấy giá trị từ ô input
   var searchText = document.getElementById("search-text").value;

   // lưu giá trị từ khóa tìm kiếm vào bộ nhớ trình duyệt
   localStorage.setItem("searchText", searchText);

   // chuyển hướng đến trang TimKiem.html
   window.location.href = "./TimKiem.html";
});
