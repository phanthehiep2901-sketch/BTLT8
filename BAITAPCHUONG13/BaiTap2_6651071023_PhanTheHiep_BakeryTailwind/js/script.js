// Xử lý sự kiện click vào icon Hamburger trên Mobile (Yêu cầu 4 & 12)
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            // Toggle class hidden / flex
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            } else {
                mobileMenu.classList.remove('flex');
                mobileMenu.classList.add('hidden');
            }
        });
    }
});