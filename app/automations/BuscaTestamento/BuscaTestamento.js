const Automation = require("../Automation");
const {processCertificate} = require("../../helpers/certificateHelper");

class BuscaTestamento extends Automation {
    constructor() {
        super();
        this.userName = '04773145110';
        this.password = '951753Pa11!';
        this.certificate = '';
    }

    setCertificate(certificate) {
        this.certificate = processCertificate(certificate);
    }

    async login() {
        await this.page.goto('https://e-notariado.grantid.e-notariado.org.br/Account/Login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dbuscatestamento%26state%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fbuscatestamento.org.br%26scope%3Dopenid%2520profile%2520cpf%2520buscatestamento%26nonce%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS');
        await this.page.type('#Username', this.userName);
        await this.page.type('#Password', this.password);
        await this.page.click('.top-space-md .btn-accent');
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(this.time(4000));
    }
}

module.exports = BuscaTestamento;