
// test('get uf correct number: AL', () => {
//     expect(1).toBe(ufToOrderNumber('AL'));
// });
// test('get uf correct number: AL', () => {
//     expect(1).toBe(ufToOrderNumber('AL'));
// });
// test('get uf correct number: AL', () => {
//     expect(1).toBe(ufToOrderNumber('AL'));
// });

function validate(phone) {
    const regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
    console.log(regex.test(phone))
}

test('Phone test with String and 9 digits', () => {
    expect(validate('')).toBe(10371);
})
test('Phone test with String and 8 digits', () => {

})

test('Phone test with numbers and 9 digits', () => {

})
test('Phone test with numbers and 8 digits', () => {

})