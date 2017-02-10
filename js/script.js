$(document).ready(function() {
    $("button").click(function() {
        var bla = $('input:text').val().trim();


        if (bla.toLowerCase() === "student") {
            $('.button a').attr('href', 'student.html');
        }

        if (bla.toLowerCase() === "teacher") {
            $('.button a').attr('href', 'teacher.html');
        }
    });

    $("#menu-toggle").click(function() {
        $("#side-bar").toggle();
    });

    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);

        if ($(window).width() > 500) {
            $('#side-bar').show();
        } else {
            $('#side-bar').hide();
        }
    });

    
});
