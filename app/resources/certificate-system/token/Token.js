const axios = require("axios");
const config = require('config');

class Token {
    constructor() {
        this.error = false;
        this.token = '';
    }

    generateToken() {
        const apiUrl = config.get('backend.baseUrl') + '/api/auth/login';
        return axios.post(
            apiUrl, {
                email: config.get('backend.user'),
                password: config.get('backend.password')
            })
            .then((response) => {
                this.response = response
                this.error = !(response.status >= 200 && response.status < 300);

            }).catch((response) => {
                this.response = response
                this.error = true
            })
    }

    getToken(){
        return this.response.data.access_token;
    }

    getResponse(){
        return this.response
    }

    getError(){
        return this.error
    }
}

module.exports = Token;