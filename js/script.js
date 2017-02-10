$("button").click(function() {
    var bla = $('input:text').val();


    if (bla === "student") {
        $('.button a').attr('href', 'student.html');
    }

    if (bla === "teacher") {
        $('.button a').attr('href', 'teacher.html');
    }
});

$('#button a').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
    $('button a').click();
    return false;
  }
});
