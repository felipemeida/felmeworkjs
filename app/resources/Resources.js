const config = require('config');
// const Token = require("./example/token/Token");

module.exports = class Resources {
    constructor() {
        this._baseUrl = config.get('backend.baseUrl');
    }

    async _getHeaders() {
        const token = new Token();
        await token.generateToken();

        if (!token.getError()) {
            return {
                'Authorization': `Bearer ${token.getToken()}`
            }
        } else {
            return '';
        }
    }
}