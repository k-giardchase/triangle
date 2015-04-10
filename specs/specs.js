describe('triangleIdentifier', function() {

    it('is an equilaterial triangle for a user input where all side lengths are equal', function() {
        expect(triangleIdentifier(1,1,1)).to.equal('Equilateral');
    });

    it('is an isosceles triangle for a user input where side lengths a and b are equal, but not c', function() {
        expect(triangleIdentifier(1,1,2)).to.equal('Isosceles');
    });
});
