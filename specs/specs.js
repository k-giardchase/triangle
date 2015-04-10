describe('triangleIdentifier', function() {

    it('is an equilaterial triangle for a user input where all side lengths are equal', function() {
        expect(triangleIdentifier(1,1,1)).to.equal('Equilateral');
    });

    it('is an isosceles triangle for a user input where two side lengths are equal', function() {
        expect(triangleIdentifier(1,2,1)).to.equal('Isosceles');
    });
});
