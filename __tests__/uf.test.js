const {ufToOrderNumber} = require("../app/helpers/ufHelper");

test('get uf correct number: AL', () => {
    expect(1).toBe(ufToOrderNumber('AL'));
});
test('get uf correct number: DF', () => {
    expect(6).toBe(ufToOrderNumber('DF'));
});
test('get uf correct number: RS', () => {
    expect(22).toBe(ufToOrderNumber('RS'));
});
test('get uf correct number: TO', () => {
    expect(26).toBe(ufToOrderNumber('TO'));
});