describe('triangleIdentifier', function() {
    it('is an equilaterial triangle for a triangle where all sides are equal', function() {
        expect(triangleIdentifier(1,1,1)).to.equal('Equilateral');
    });
});
