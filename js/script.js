$("button").click(function() {
    var bla = $('input:text').val();


    if (bla.toLowerCase() === "student") {
        $('.button a').attr('href', 'student.html');
    }

    if (bla.toLowerCase() === "teacher") {
        $('.button a').attr('href', 'teacher.html');
    }
});

// $(document).keypress(function(e) {
//     if(e.which == 13) {
//         $("button").click();
//     }
// });
