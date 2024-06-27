$(document).ready(function () {
    // Al pasar el mouse sobre la imagen
    $('.imagen').mouseenter(function () {
        $(this).animate({
            width: '25%' // Tamaño aumentado de la imagen
        }, 'fast');
    });
    $('.imagen').mouseleave(function() {
        $(this).animate({
            width: '50%' // Restaurar tamaño original de la imagen
        }, 'fast');
    });

    $('.icon').mouseenter(function () {
        $(this).animate({
            width: '40px' // Tamaño aumentado de la imagen
        }, 'fast');
    });
    $('.icon').mouseleave(function() {
        $(this).animate({
            width: '30px' // Restaurar tamaño original de la imagen
        }, 'fast');
    });

});