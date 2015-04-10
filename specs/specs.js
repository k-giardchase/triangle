describe('triangleIdentifier', function() {

    it('is an equilaterial triangle for a user input where all side lengths are equal', function() {
        expect(triangleIdentifier(3,3,3)).to.equal('Equilateral');
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
});
