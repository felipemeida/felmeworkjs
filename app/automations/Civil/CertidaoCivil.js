const Automation = require("../Automation");
const {processCertificate} = require("../../helpers/certificateHelper");

class CertidaoCivil extends Automation {
    constructor() {
        super();
        this.certidao = '';
        this.account = '';
    }
x
    setCertidao(certidao) {
        this.certidao = processCertificate(certidao);
    }

    setAccount(account) {
        this.account = account;
    }

    async nextStage() {
        await this.page.click('button.btn-info');
        await this.page.waitForTimeout(this.time(200));
    }

    async login() {
        await this.page.goto('https://www.registrocivil.org.br/login');
        await this.page.type('[name="email"]', this.account.user);
        await this.page.type('[name="password"]', this.account.password);
        await this.page.click('[type="submit"]');
        await this.page.waitForTimeout(this.time(3000));
    }
}

module.exports = CertidaoCivil;