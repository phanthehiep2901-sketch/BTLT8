// Sử dụng jQuery để xóa option đang được chọn
function removecolor() {
    $("#colorSelect option:selected").remove();
}

/* 
// Nếu không dùng jQuery mà dùng JavaScript DOM thuần, bạn có thể dùng đoạn mã này:
function removecolor() {
    var x = document.getElementById("colorSelect");
    if (x.selectedIndex !== -1) {
        x.remove(x.selectedIndex);
    }
}
*/