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

    var elementosAnimar = $('.animar');
    
    $(window).scroll(function() {
        // Obtener la posición actual del scroll y la altura de la ventana
        var scrollActual = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        // Iterar sobre cada elemento .animar
        elementosAnimar.each(function(index) {
            // Obtener la posición de cada elemento
            var position = $(this).offset().top;
            
            // Calcular cuándo debe aparecer el elemento
            if (scrollActual > position - windowHeight + 200) {
                // Agregar la clase 'aparecer' al elemento actual
                $(this).addClass('aparecer');
                
                // Remover el elemento actual del arreglo para que no se vuelva a animar
                elementosAnimar = elementosAnimar.not($(this));
            }
        });
    });
});