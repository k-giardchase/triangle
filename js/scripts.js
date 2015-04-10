var triangleIdentifier = function(a, b, c) {
  if((a >= (b +c)) || (b >= (a + c)) || (c >= (a + b))) {
    return "unfortunately, dear user, not a triangle";
  } else {
      if( a===b && a === c && b===c) {
        return "equilateral triangle";
      } else if ((a===b) || (a===c) || (b===c)) {
          return "isosceles triangle";
        } else {
          return "scalene triangle";
        }
    }
}

$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    var a = parseInt($('input#side_a').val());
    var b = parseInt($('input#side_b').val());
    var c = parseInt($('input#side_c').val());

    var result = triangleIdentifier(a, b, c);

    $('.triangle_result').empty();
    $('.triangle_result').text(result);

    $('#facts').hide();
    $('#result').show();
    event.preventDefault();
  });
});
