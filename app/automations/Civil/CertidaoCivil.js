const Automation = require("../Automation");
const {processCertificate} = require("../../helpers/certificateHelper");
const {ufToOrderNumber} = require("../../helpers/ufHelper");

class CertidaoCivil extends Automation {
    constructor() {
        super();
        this.certificateData = '';
        this.certidao = '';
        this.account = '';
    }
x
    setCertidao(certidao) {
        this.certificateData = certidao;
        this.certidao = processCertificate(certidao);
    }

    setAccount(account) {
        this.account = account;
    }

    async nextStage() {
        await this.page.click('button.btn-info');
        await this.page.waitForTimeout(this.time(300));
    }

    async login() {
        await this.page.goto('https://www.registrocivil.org.br/login');
        await this.page.type('[name="email"]', this.account.user);
        await this.page.type('[name="password"]', this.account.password);
        await this.page.click('[type="submit"]');
        await this.page.waitForTimeout(this.time(3000));
    }

    async ufSelect() {
        await this.page.waitForSelector('.multiselect');
        await this.page.waitForTimeout(this.time(200));
        await this.page.click('.multiselect');
        await this.page.waitForSelector('.multiselect__option');
        await this.page.waitForTimeout(this.time(200));

        const regions = await this.page.$$('.multiselect__element');
        await regions[ufToOrderNumber(this.certidao.uf.value)].click();

        await this.page.waitForSelector('[name="completeName"]', {timeout: 300000});
        await this.page.waitForTimeout(this.time(300));
    }

    async format(){
        await this.page.click('#digitalCopy');
    }

    async end(){
        await this.page.waitForSelector('label.custom-control-label');
        await this.page.click('label.custom-control-label');
        await this.page.waitForTimeout(this.time(200));
        await this.nextStage();
        await this.nextStage();
        await this.nextStage();
    }
}

module.exports = CertidaoCivil;