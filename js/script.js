$(document).ready(function() {
    loginClick();
    registrationClick();

    $("#menu-toggle").click(function() {
        $("#side-bar").toggle();
    });

    // Constant check of window resize
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


function loginClick() {
  $("button").click(function() {
      var bla = $('input:text').val().trim();

      if (bla.toLowerCase() === "student") {
          $('.button a').attr('href', 'student.html');
      }

      if (bla.toLowerCase() === "teacher") {
          $('.button a').attr('href', 'teacher.html');
      }
  });
}

function registrationClick() {
  $("#regis-button").click(function() {
    var rEmail = $("#rEmail").val();

    if(rEmail.indexOf("@") != -1) {
      $("#regis-confirm").css("display", "inline-block");
      $("#regis-form").hide();
    }
    else {
      alert("invalid email")
    }
  })
}
