describe('triangleIdentifier', function() {

    it('is an equilaterial triangle for a user input where side length a is equal to both b and c', function() {
        expect(triangleIdentifier(3,3,3)).to.equal('Equilateral');
    });

    it('is an equilateral triangle for a user input where side length b is equal to both a and c', function() {
        expect(triangleIdentifier(3,3,3)).to.equal('Equilateral')
    });

    it('is an isosceles triangle for a user input where side lengths a and b are equal, but not c', function() {
        expect(triangleIdentifier(3,3,2)).to.equal('Isosceles');
    });

    it('is an isosceles triangle for a user input where side lengths a and c are equal, but not b', function() {
        expect(triangleIdentifier(3,2,3)).to.equal('Isosceles');
    });

    it('is an isosceles triangle for a user input where side lengths b and c are equal, but a', function() {
        expect(triangleIdentifier(2,3,3)).to.equal('Isosceles');
    });

    it('is a scalene triangle for a user input where side length a does not equal b or c', function() {
        expect(triangleIdentifier(3,4,5)).to.equal('Scalene');
    });

    it('is a scalene triangle for a user input where side length b does not equal a or c', function() {
        expect(triangleIdentifier(3,4,5)).to.equal('Scalene');
    });

    it('is not a triangle for a user input where side length a is at least as long as b and c combined', function() {
        expect(triangleIdentifier(2,1,1)).to.equal('Not a triangle');
    });

    it('is not a triangle for a user input where side length b is at least as long as a and c combined', function() {
        expect(triangleIdentifier(1,2,1)).to.equal('Not a triangle');
    });
});
