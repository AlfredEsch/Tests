const chai = require('chai');
const expect = chai.expect;
const mata = require('./kood');

describe('mata', () => {
    it('summa', () => {
        const tulemus = mata(10, 5);
        expect(tulemus.summa).to.equal(15);
    });

    it('vahe', () => {
        const tulemus = mata(10, 5);
        expect(tulemus.vahe).to.equal(5);
    });

    it('jagatis', () => {
        const tulemus = mata(10, 5);
        expect(tulemus.jagatis).to.equal(2);
    });

    it('korrutis', () => {
        const tulemus = mata(10, 5);
        expect(tulemus.korrutis).to.equal(50);
    });
});