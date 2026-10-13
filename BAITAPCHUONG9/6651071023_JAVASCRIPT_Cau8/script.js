$(document).ready(function () {
    $(".btn-op").click(function () {
        // Lấy giá trị từ 2 ô input
        var num1 = parseFloat($("#num1").val());
        var num2 = parseFloat($("#num2").val());
        var op = $(this).val(); // Lấy toán tự từ nút vừa bấm (+, -, x, /, ^)
        var result = 0;

        // Kiểm tra xem dữ liệu nhập vào có hợp lệ không
        if (isNaN(num1) || isNaN(num2)) {
            alert("Vui lòng nhập đầy đủ và chính xác hai số!");
            return;
        }

        // Tính toán theo từng phép toán
        switch (op) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "x":
                result = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    alert("Không thể chia cho 0!");
                    return;
                }
                result = num1 / num2;
                break;
            case "^":
                result = Math.pow(num1, num2);
                break;
        }

        // Hiển thị kết quả vào ô kết quả
        $("#result").val(result);
    });
});