const Resources = require("../Resources");
const http = require('axios')

module.exports = class Certificates extends Resources {
    async getById() {
        const certificate = await http.get(`${this._baseUrl}/api/free/certificate/${10371}`);
        return certificate.data;
    }
}