var triangleIdentifier = function(a, b, c) {
    if((a >= (b +c)) || (b >= (a + c)) || (c >= (a + b))) {
      return "Not a triangle";
    } else {
      if( a===b && a === c && b===c) {
          return "Equilateral";
      } else if ((a===b) || (a===c) || (b===c)) {
          return "Isosceles";
        } else {
          return "Scalene";
        }
    }
}

$(document).ready(function() {
  $('form#triangle').submit(function(event) {
      debugger;
     var a = parseInt($('input#sideA').val());
     var b = parseInt($('input#sideB').val());
     var c = parseInt($('input#sideC').val());

     var result = triangleIdentifier(a, b, c);

     $('.triangle_result').empty();
     $('.triangle_result').text(result);

     $('#result').show();
     event.preventDefault();
  });
});
