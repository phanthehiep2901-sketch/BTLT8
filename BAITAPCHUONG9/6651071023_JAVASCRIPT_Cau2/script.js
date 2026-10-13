function getFormvalue(event) {
    // Ngăn chặn trang reload lại khi submit form
    if (event) {
        event.preventDefault();
    }

    // Kết hợp DOM và jQuery: Lấy form bằng đối tượng jQuery rồi dùng find() để chọn input
    var $form = $('#form1');
    var firstName = $form.find('input[name="fname"]').val();
    var lastName = $form.find('input[name="lname"]').val();

    // Hiển thị giá trị ra hộp thoại alert
    alert(firstName + " " + lastName);
}