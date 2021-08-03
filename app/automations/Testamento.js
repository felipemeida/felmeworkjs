const puppeteer = require('puppeteer');
const {ufToOrderNumber} = require("../helpers/ufHelper");
const {findBySlug} = require("../helpers/certificateHelper");

class Testamento {
    constructor() {
        this.page = '';
        this.form = {};
    }

    async nextStageOnForm(count){
        const regions = await this.page.$$('.align-items-center .mat-flat-button');
        await regions[count - 1].click();
        await this.page.waitForTimeout(300);
    }

    async login(){
        await this.page.goto('https://e-notariado.grantid.e-notariado.org.br/Account/Login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dbuscatestamento%26state%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fbuscatestamento.org.br%26scope%3Dopenid%2520profile%2520cpf%2520buscatestamento%26nonce%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS');
        await this.page.type('#Username', '04773145110');
        await this.page.type('#Password', '951753Pa11!');
        await this.page.click('.top-space-md .btn-accent');
        await this.page.waitForNavigation();
    }

    async firstStage() {
        // field data óbito
        await this.page.waitFor('#mat-input-8');
        await this.page.type('#mat-input-8', this.form.data_obito);
        await this.page.click('#mat-select-0');
        await this.page.waitForTimeout(300);
        await this.page.waitFor('.mat-option-text');
        const regions = await this.page.$$('.mat-option-text');
        // position of uf in number to select
        await regions[ufToOrderNumber(this.form.uf)].click();
        await this.nextStageOnForm(1)
        await this.page.click('button[mat-dialog-close]');
        await this.page.waitForTimeout(300);
    }

    async secondStage() {
        await this.page.waitFor('#mat-input-0');
        await this.page.type('#mat-input-0', this.form.nome_falecido);
        await this.page.type('#mat-input-1', this.form.data_nascimento);
        await this.page.type('#mat-input-2', this.form.registro_geral);
        await this.page.type('#mat-input-3', this.form.orgao_emissor);
        await this.page.type('#mat-input-4', this.form.cpf_falecido);
        await this.page.type('#mat-input-5', this.form.nome_mae);
        await this.page.type('#mat-input-6', this.form.nome_pai);
        await this.nextStageOnForm(2)
    }

    async thirdStage() {
        await this.page.waitFor('#mat-input-9');
        await this.page.type('#mat-input-9', this.form.matricula_obito);
        await this.page.click('button[class="col-md-2 mat-flat-button mat-primary"]');
    }

    async fillCertificate(){
        // await this.page.goto('https://buscatestamento.org.br/private/orders/new');
        // await this.page.waitForNavigation();
        // await this.page.waitForTimeout(1500);
        // await this.page.click('#mat-checkbox-1');
        // await this.page.waitForTimeout(500);
        // await this.page.click('button[type="submit"]');
        // await this.page.waitForTimeout(100);

        await this.page.goto('https://buscatestamento.org.br/private/orders/new/request');
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(1500);
        await this.firstStage();
        await this.secondStage();
        await this.thirdStage();
    }

    async start(dataCertificate) {
        this.processDataTestamento(dataCertificate)
        const browser = await puppeteer.launch({ headless: false, slowMo: 10 });
        this.page = await browser.newPage();
        await this.page.setViewport({ width: 1280, height: 700 })
        await this.login();
        await this.fillCertificate();
        await this.page.waitForTimeout(5000);
        //await browser.close();
    }

    processDataTestamento(dataCertificate) {
        this.form.nome_falecido  = findBySlug(dataCertificate, 'nome-falecido');
        this.form.data_obito  = findBySlug(dataCertificate, 'data-obito');
        this.form.nome_mae  = findBySlug(dataCertificate, 'nome-mae');
        this.form.nome_pai  = findBySlug(dataCertificate, 'nome-pai');
        this.form.registro_geral  = findBySlug(dataCertificate, 'registro-geral');
        this.form.orgao_emissor  = findBySlug(dataCertificate, 'orgao-emissor');
        this.form.cpf_falecido  = findBySlug(dataCertificate, 'cpf-falecido');
        this.form.uf  = findBySlug(dataCertificate, 'uf');
        this.form.matricula_obito  = findBySlug(dataCertificate, 'matricula-obito');
        this.form.data_nascimento  = findBySlug(dataCertificate, 'data-nascimento');
    }
}
module.exports = Testamento;