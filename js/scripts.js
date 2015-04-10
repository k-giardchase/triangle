var triangleIdentifier = function(a, b, c) {
    if( a===b && a === c && b===c) {
        return "Equilateral";
    } else if (a===b) {
        return "Isosceles";
    }
}
