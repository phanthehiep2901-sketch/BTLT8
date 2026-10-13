$(document).ready(function () {
    $('#themeToggle').change(function () {
        if ($(this).is(':checked')) {
            // Khi "On" -> Nền Sáng
            $('body').removeClass('dark-theme').addClass('light-theme');
            $('#themeText').text('Trạng thái: On (Nền Sáng)');
        } else {
            // Khi "Off" -> Nền Tối
            $('body').removeClass('light-theme').addClass('dark-theme');
            $('#themeText').text('Trạng thái: Off (Nền Tối)');
        }
    });
});