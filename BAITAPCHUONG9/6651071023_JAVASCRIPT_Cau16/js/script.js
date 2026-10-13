$(document).ready(function () {

    // Hàm kiểm tra định dạng email chuẩn bằng Regex
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // 1. Xử lý sự kiện click nút "Add Row"
    $('#btnAddRow').click(function () {
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const birthdate = $('#birthdate').val().trim();

        // Kiểm tra trống các ô input
        if (name === '' || email === '' || birthdate === '') {
            alert('Vui lòng nhập đầy đủ thông tin: Name, Email và Birthdate!');
            return;
        }

        // Kiểm tra định dạng Email
        if (!validateEmail(email)) {
            alert('Email không đúng định dạng! Vui lòng nhập lại (VD: example@gmail.com)');
            $('#email').focus();
            return;
        }

        // Tạo chuỗi HTML cho hàng mới trong bảng
        const newRow = `
            <tr>
                <td style="text-align: center;"><input type="checkbox" class="record-select"></td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${birthdate}</td>
            </tr>
        `;

        // Thêm hàng mới vào tbody của bảng
        $('#userTable tbody').append(newRow);

        // Xóa trắng dữ liệu đã nhập trong form
        $('#name').val('');
        $('#email').val('');
        $('#birthdate').val('');
    });

    // 2. Xử lý sự kiện click nút "Delete Row"
    $('#btnDeleteRow').click(function () {
        // Tìm các checkbox đang được chọn trong tbody và xóa hàng <tr> chứa checkbox đó
        const selectedCheckboxes = $('#userTable tbody .record-select:checked');

        if (selectedCheckboxes.length === 0) {
            alert('Vui lòng tích chọn ít nhất 1 hàng để xóa!');
            return;
        }

        // Xóa các hàng được tích chọn
        selectedCheckboxes.closest('tr').remove();
    });

});