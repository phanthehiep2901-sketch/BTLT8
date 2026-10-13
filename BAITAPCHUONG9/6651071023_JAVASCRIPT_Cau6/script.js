function getOptions() {
    // 1. Đếm tổng số lượng phần tử option trong dropdown list (#mySelect)
    var count = $("#mySelect option").length;
    
    // 2. Lấy nội dung chữ (text) của tất cả các option
    var itemsList = [];
    $("#mySelect option").each(function() {
        itemsList.push($(this).text());
    });
    
    // 3. Hiển thị thông báo qua cửa sổ cảnh báo (alert)
    alert("Số lượng các mục: " + count + "\nDanh sách các mục:\n- " + itemsList.join("\n- "));
}

/* 
// Nếu sử dụng JavaScript DOM thuần (không dùng jQuery), bạn có thể viết hàm như sau:
function getOptions() {
    var selectElement = document.getElementById("mySelect");
    var count = selectElement.options.length;
    var itemsList = [];
    
    for (var i = 0; i < count; i++) {
        itemsList.push(selectElement.options[i].text);
    }
    
    alert("Số lượng các mục: " + count + "\nDanh sách các mục:\n- " + itemsList.join("\n- "));
}
*/