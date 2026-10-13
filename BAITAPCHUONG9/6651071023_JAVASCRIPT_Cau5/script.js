// Danh sách các hình ảnh theo đề bài
var images = [
    {
        src: "anh3.jpg",
        width: "240",
        height: "160"
    },
    {
        src: "anh2.jpg",
        width: "320",
        height: "195"
    },
    {
        src: "anh1.jpg",
        width: "500",
        height: "343"
    }
];

function display_random_image() {
    // 1. Chọn ngẫu nhiên một chỉ số (index) trong mảng images
    var randomIndex = Math.floor(Math.random() * images.length);
    var selectedImage = images[randomIndex];

    // 2. Kiểm tra nếu chưa có thẻ <img> trong container thì tạo mới, nếu có rồi thì cập nhật
    if ($("#imageContainer img").length === 0) {
        $("#imageContainer").html(
            '<img src="' + selectedImage.src + '" width="' + selectedImage.width + '" height="' + selectedImage.height + '" alt="Random Image">'
        );
    } else {
        $("#imageContainer img").attr({
            "src": selectedImage.src,
            "width": selectedImage.width,
            "height": selectedImage.height
        });
    }
}