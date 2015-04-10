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
