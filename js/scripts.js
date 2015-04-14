var triangleIdentifier = function(a, b, c) {
  if((a >= (b +c)) || (b >= (a + c)) || (c >= (a + b))) {
    return "invalid";
  } else {
      if( a===b && a === c && b===c) {
        return "equilateral";
      } else if ((a===b) || (a===c) || (b===c)) {
          return "isosceles";
        } else {
          return "scalene";
        }
    }
}

$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    var a = parseInt($('input#side_a').val());
    var b = parseInt($('input#side_b').val());
    var c = parseInt($('input#side_c').val());

    var result = triangleIdentifier(a, b, c);

    $("#triangle-image").removeClass();

    if(result === "invalid") {
      alert("Sorry not a valid triangle.");
    }
    else if(result === "equilateral") {
      $("#triangle-image").addClass('equilateral-triangle');
      $(".equilateral").append("<li>" + a + ", " + b + ", " + c + "</li>");
    }
    else if(result === "isosceles") {
      $("#triangle-image").addClass('isosceles-triangle');
      $(".isosceles").append("<li>" + a + ", " + b + ", " + c + "</li>");
    }
    else {
      $("#triangle-image").addClass('scalene-triangle');
      $(".scalene").append("<li>" + a + ", " + b + ", " + c + "</li>");
    }

    $("#triangle-image").addClass("rotate");

    $('.triangle_result').empty();
    $('.triangle_result').text(result);

    $('#facts').hide();
    $('#result').show();
    event.preventDefault();
  });
});
