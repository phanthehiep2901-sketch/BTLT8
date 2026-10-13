$(document).ready(function () {
    $("#linkForm").submit(function (event) {
        // Ngăn chặn form gửi đi mặc định
        event.preventDefault();

        // Lấy giá trị đường link người dùng nhập vào
        var url = $("#linkInput").val().trim();

        if (url === "") {
            alert("Vui lòng nhập đường link!");
            return;
        }

        // Tự động thêm https:// nếu người dùng quên nhập giao thức
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }

        // Hiện hộp thoại xác nhận (Confirm Dialog)
        var userConfirmed = confirm("Bạn có chắc chắn muốn chuyển đến trang: " + url + " ?");

        // Nếu người dùng nhấn OK
        if (userConfirmed) {
            window.location.href = url;
        }
        // Nếu chọn Cancel thì không làm gì cả
    });
});