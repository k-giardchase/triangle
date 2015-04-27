$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    var sideA = parseInt($('input#side_a').val());
    var sideB = parseInt($('input#side_b').val());
    var sideC = parseInt($('input#side_c').val());

    var triangle = {
      a: sideA,
      b: sideB,
      c: sideC,
      type:
      function() {
        if((this.a >= (this.b + this.c)) || (this.b >= (this.a + this.c)) || (this.c >= (this.a + this.b))) {
          return "invalid";
        }
        else {
          if( this.a === this.b && this.a === this.c && this.b === this.c) {
            return "equilateral";
          }
          else if ((this.a === this.b) || (this.a === this.c) || (this.b === this.c)) {
            return "isosceles";
          }
          else {
            return "scalene";
          }
        }
      }
    }

    var result = triangle.type();

    $("#triangle-image").removeClass();

    if(result === "invalid") {
      alert("Sorry not a valid triangle.");
    }
    else if(result === "equilateral") {
      $("#triangle-image").addClass('equilateral-triangle');
      $(".equilateral").append("<li>" + triangle.a + ", " + triangle.b + ", " + triangle.c + "</li>");
    }
    else if(result === "isosceles") {
      $("#triangle-image").addClass('isosceles-triangle');
      $(".isosceles").append("<li>" + triangle.a + ", " + triangle.b + ", " + triangle.c + "</li>");
    }
    else {
      $("#triangle-image").addClass('scalene-triangle');
      $(".scalene").append("<li>" + triangle.a + ", " + triangle.b + ", " + triangle.c + "</li>");
    }

    $("#triangle-image").addClass("rotate");

    $('.triangle_result').empty();
    $('.triangle_result').text(result);

    $('#facts').hide();
    $('#result').show();

    $('#side_c').val("");
    $('#side_b').val("");
    $('#side_a').val("").focus();
    event.preventDefault();
  });
});
