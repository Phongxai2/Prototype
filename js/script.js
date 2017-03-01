var student = [{
        name: "Andrew S",
        merit: "100",
        points: "4"
    },
    {
        name: "Brady P",
        merit: "100",
        points: "13"
    },
    {
        name: "Cathy A",
        merit: "98",
        points: "16"
    },
    {
        name: "Drew B",
        merit: "90",
        points: "19"
    },
    {
        name: "Elise A",
        merit: "100",
        points: "0"
    },
    {
        name: "Faith j",
        merit: "100",
        points: "23"
    },
    {
        name: "George V",
        merit: "100",
        points: "17"
    },
];


$(document).ready(function() {
    loginClick();
    registrationClick();
    liveSearch();





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

function liveSearch() {

    $('#live-search-box').on('keyup', function() {
        var searchTerm = $('#live-search-box').val().toLowerCase();

        $(".profile").remove();

        for (var i = 0; i < student.length; i++) {
            if (student[i].name.toLowerCase().indexOf(searchTerm) != -1) {
                $(".tStudent-info").append(
                  "<div class='profile col-12'" + " id="+"'"+ i + "'"+">" +
                    "<div class='student-info col-4'>" +
                      student[i].name +
                    "</div>"+
                    "<div class='student-info col-4'>"+
                      "Merits: " + student[i].merit +
                    "</div>"+
                    "<div class='student-info col-4'>"+
                      "Points: " + student[i].points +
                    "</div>"+
                    "<div class='page'>" +
                      "<div class='col-4'>" +
                        "<div class='btn' id='nBtn'>" +
                        "</div>"+
                      "</div>"+
                      "<div class='col-4'>"+
                        "<div class='btn' id='merit-plus'>" +
                          "<div>+</div>" +
                        "</div>"+
                        "<div class='btn' id='merit-minus'>" +
                          "<div>-</div>" +
                        "</div>"+
                      "</div>"+
                      "<div class='col-4'>"+
                        "<div class='btn' id='point-plus'>" +
                          "<div>+</div>" +
                        "</div>"+
                        "<div class='btn' id='point-minus'>" +
                          "<div>-</div>"+
                        "</div>"+
                      "</div>"+
                    "</div>"+
                  "</div>"
              );
            }
        }

        if(searchTerm === "") {
          $(".profile").remove();
        }

        profileClick();
    });
}

function addMinus() {
  $("#merit-plus").click(function() {
    alert("hy");
  });
}

function profileClick() {
  $(".profile").click(function() {
    var profileID = $(this).attr("id");
    $("#" + profileID + " .page").toggleClass("active");
  });
}

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

        if (rEmail.indexOf("@") != -1) {
            $("#regis-confirm").css("display", "inline-block");
            $("#regis-form").hide();
        } else {
            alert("invalid email")
        }
    })
}
