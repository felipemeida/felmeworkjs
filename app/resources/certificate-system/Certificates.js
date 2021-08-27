const Resources = require("../Resources");
const http = require('axios')

module.exports = class Certificates extends Resources {
    async getById(certificateId) {
        const certificate = await http.get(`${this._baseUrl}/api/certificate/${certificateId}`, {
            headers: await this._getHeaders()
        });
        return certificate.data;
    }

    async certificateToWatch(certificateId) {
        const certificate = await http.get(`${this._baseUrl}/api/certificate/monitoring`, {
            headers: await this._getHeaders()
        });
        return certificate.data;
    }
}