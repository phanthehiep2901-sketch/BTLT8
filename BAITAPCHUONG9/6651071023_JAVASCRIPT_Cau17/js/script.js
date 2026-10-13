$(document).ready(function () {

    // Bắt sự kiện click vào tiêu đề Accordion
    $('.accordion-header').click(function () {
        const currentContent = $(this).next('.accordion-content');

        // Ẩn tất cả các khối nội dung khác ngoại trừ khối nội dung tương ứng tiêu đề được click
        $('.accordion-content').not(currentContent).slideUp();

        // Toggle (hiện / ẩn) khối nội dung của tiêu đề vừa click
        currentContent.slideToggle();
    });

});