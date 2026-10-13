$(document).ready(function () {
    $('.tab-menu a').click(function (e) {
        e.preventDefault();

        // 1. Lấy ID của Tab được click từ thẻ href
        const targetTab = $(this).attr('href');

        // 2. Kích hoạt nút tab tương ứng
        $('.tab-menu li').removeClass('active');
        $(this).parent('li').addClass('active');

        // 3. Hiển thị nội dung tương ứng
        $('.tab-panel').removeClass('active');
        $(targetTab).addClass('active');
    });
});