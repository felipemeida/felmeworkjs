const config = require('config');

module.exports = class Resources {
    constructor() {
        this._baseUrl = config.get('backend.baseUrl');
    }
}