const Automation = require("../Automation");

class CertidaoCivil extends Automation {
    constructor() {
        super();
        this.certidao = '';
    }
    setCertidao(certidao) {
        this.certidao = certidao;
    }

    async nextStage(){
        await this.page.click('button.btn-info');
        await this.page.waitForTimeout(this.time(200));
    }

    async login() {
        await this.page.goto('https://www.registrocivil.org.br/login');
        await this.page.type('[name="email"]', 'andrearuy60@gmail.com');
        await this.page.type('[name="password"]', '10203040Pa!');
        await this.page.click('[type="submit"]');
        await this.page.waitForTimeout(this.time(3000));
    }
}

module.exports = CertidaoCivil;