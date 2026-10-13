$(document).ready(function () {
    $('#togglePassword').click(function () {
        const pwdInput = $('#password');
        const pwdType = pwdInput.attr('type');

        if (pwdType === 'password') {
            pwdInput.attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            pwdInput.attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});