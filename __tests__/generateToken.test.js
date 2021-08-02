const Token = require("../app/resources/certificate-system/token/Token");
test('Error in generateToken', async () => {
    const token = new Token();
    await token.generateToken();
    expect(token.getError()).toBe(false);
});

test('Error in getToken', async () => {
    let getToken = '';
    const token = new Token();
    await token.generateToken();
    if (!token.getError()) {
        getToken = token.getToken();
    }
    expect(getToken.length > 100).toBe(true);
});