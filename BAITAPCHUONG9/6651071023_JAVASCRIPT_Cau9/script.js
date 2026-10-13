$(document).ready(function () {

    // Xử lý nút "Clear" - Xóa tất cả dữ liệu đã nhập
    $("#btnClear").click(function () {
        $("#registerForm")[0].reset();
    });

    // Xử lý nút "Finish" - Kiểm tra (validate) dữ liệu
    $("#btnFinish").click(function () {
        
        // 1. Kiểm tra tất cả các trường có dấu * (không được rỗng hoặc chưa chọn)
        var name = $("#name").val().trim();
        var gender = $("input[name='sex']:checked").val();
        var email = $("#email").val().trim();
        var birthday = $("#birthday").val().trim();
        var address = $("#address").val().trim();
        var city = $("#city").val().trim();
        var region = $("#region").val();
        var zipcode = $("#zipcode").val().trim();

        if (!name || !gender || !email || !birthday || !address || !city || !region || !zipcode) {
            alert("Vui lòng điền/chọn đầy đủ tất cả các trường có dấu (*)");
            return;
        }

        // 2. Validate Email:
        // - Phải có đúng 1 dấu @
        // - Phía trước @ có tối đa 1 dấu chấm
        // - Phía sau @ có ít nhất 1 dấu chấm
        var parts = email.split("@");
        if (parts.length !== 2) {
            alert("Email không hợp lệ! Chỉ được chứa duy nhất 1 ký tự '@'.");
            return;
        }

        var account = parts[0];
        var domain = parts[1];

        // Đếm số dấu chấm trong account
        var accountDotCount = (account.match(/\./g) || []).length;
        if (accountDotCount > 1) {
            alert("Tên account phía trước '@' chỉ được chứa tối đa 1 dấu chấm.");
            return;
        }

        // Đếm số dấu chấm trong domain
        var domainDotCount = (domain.match(/\./g) || []).length;
        if (domainDotCount < 1) {
            alert("Tên domain phía sau '@' phải có ít nhất 1 dấu chấm.");
            return;
        }

        // 3. Validate Ngày tháng năm sinh:
        // Dạng mm/dd/yyyy hoặc mm-dd-yyyy
        // Tháng từ 1-12, năm nhỏ hơn năm hiện tại
        var dateRegex = /^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/;
        var match = birthday.match(dateRegex);

        if (!match) {
            alert("Ngày sinh không đúng định dạng! Vui lòng nhập theo dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
            return;
        }

        var month = parseInt(match[1], 10);
        var day = parseInt(match[2], 10);
        var year = parseInt(match[3], 10);
        var currentYear = new Date().getFullYear();

        if (month < 1 || month > 12) {
            alert("Tháng sinh phải nằm trong khoảng từ 1 đến 12.");
            return;
        }

        if (day < 1 || day > 31) {
            alert("Ngày sinh không hợp lệ.");
            return;
        }

        if (year >= currentYear) {
            alert("Năm sinh phải nhỏ hơn năm hiện tại (" + currentYear + ").");
            return;
        }

        // 4. Validate Zip code: Có đúng 5 chữ số
        var zipRegex = /^\d{5}$/;
        if (!zipRegex.test(zipcode)) {
            alert("Zip code phải là dãy chứa đúng 5 chữ số.");
            return;
        }

        // Nếu tất cả kiểm tra đều hợp lệ
        alert("Đăng ký thành công!");
    });
});