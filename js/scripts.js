var triangleIdentifier = function(a, b, c) {
    if((a >= (b +c)) || (b >= (a + c))) {
        return "Not a triangle";
    } else {
        if( a===b && a === c && b===c) {
            return "Equilateral";
        } else if ((a===b && a!==c && b!==c) || (a===c && a!==b && c!==b) || (b===c && a!==b && a!==c)) {
            return "Isosceles";
        } else if (a!==b && a!==c && b!==c) {
            return "Scalene";
        }
    }


}
