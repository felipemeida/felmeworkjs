const {ufToOrderNumber} = require("../../helpers/ufHelper");
const {findBySlug} = require("../../helpers/certificateHelper");
const {uploadPath, eraseUploadFolder, filesInUploadFolder} = require("../../helpers/storage");
const {selectorToClipboard} = require("../../helpers/copyToClipboard");
const BuscaTestamento = require("./BuscaTestamento");

class Testamento extends BuscaTestamento{
    async nextStageOnForm(count){
        const regions = await this.page.$$('.align-items-center [class="mr-3 mat-flat-button mat-primary"]');
        await regions[count - 1].click();
        await this.page.waitForTimeout(this.time(500));
    }

    async firstStage() {
        // field data óbito
        await this.page.waitForSelector('#mat-input-8');
        await this.page.type('#mat-input-8', this.form.data_obito);
        await this.page.click('#mat-select-0');
        await this.page.waitForTimeout(this.time(200));
        await this.page.waitForSelector('.mat-option-text');

        const regions = await this.page.$$('.mat-option-text');
        await regions[ufToOrderNumber(this.form.uf)].click();
        await this.nextStageOnForm(1)
        await this.page.click('button[mat-dialog-close]');
        await this.page.waitForTimeout(this.time(300));
    }

    async secondStage() {
        await this.page.waitForSelector('#mat-input-0');
        await this.page.type('#mat-input-0', this.form.nome_falecido);
        await this.page.type('#mat-input-1', this.form.data_nascimento);
        await this.page.type('#mat-input-2', this.form.registro_geral);
        await this.page.type('#mat-input-3', this.form.orgao_emissor);
        await this.page.type('#mat-input-4', this.form.cpf_falecido);
        await this.page.type('#mat-input-5', this.form.nome_mae);
        await this.page.type('#mat-input-6', this.form.nome_pai);
        await this.nextStageOnForm(2);
    }

    async thirdStage() {
        await this.page.waitForSelector('#mat-input-9');
        await this.page.type('#mat-input-9', this.form.matricula_obito);
        await this.page.click('button[class="col-md-2 mat-flat-button mat-primary"]');
        const elementsHandle = await this.page.$$("input[type=file]");
        await elementsHandle[0].uploadFile(uploadPath(this.form.link_certidao));
        await this.page.waitForTimeout(this.time(3500));
        await this.nextStageOnForm(3);
        await elementsHandle[1].uploadFile(uploadPath(this.form.link_documento));
        await this.page.waitForTimeout(this.time(3500));
        await this.nextStageOnForm(4);
    }

    async fourthStage() {
        await this.page.waitForSelector('#mat-input-7');
        //await this.page.type('#mat-input-7', '61982219259');
        await this.nextStageOnForm(5);
        //await this.nextStageOnForm(6);
        await this.page.click('[class="d-flex justify-content-center align-items-center mt-4 ng-star-inserted"] [class="mat-flat-button mat-primary"]');
        await this.page.waitForTimeout(this.time(600));
        await this.page.waitForSelector('#mat-checkbox-5-input');
        await this.page.click('[for="mat-checkbox-5-input"]');
        await this.page.type('#mat-input-15', 'SISTEMA FEDERAL');
        await this.page.click('button[class="mat-flat-button mat-primary"]');
    }

    async paymentStage() {
        await eraseUploadFolder();
        await this.page.waitForTimeout(this.time(1500));

        await this.page.waitForSelector('#cdk-step-content-1-0 button[class="mat-flat-button mat-primary"]');

        await this.page.click('#cdk-step-content-1-0 button[class="mat-flat-button mat-primary"]');
        await this.page.waitForTimeout(this.time(500));

        await selectorToClipboard(this.page, 'app-payment spa-box div.box-light h1.component-title span.ng-star-inserted');

        await this.page.click('#cdk-step-content-1-1 button[class="mat-flat-button mat-primary"]');
        await this.page.waitForSelector('[class="mat-flat-button mat-primary ng-star-inserted"]');
        await this.page.click('[class="mat-flat-button mat-primary ng-star-inserted"]');
    }

    async fillCertificate(){
        // await this.page.goto('http://localhost:3000/form');
        // await this.page.click('#download');

        //await this.page.goto('http://www.risel.com.br/politicaprivacidade/v1.pdf');
        // await this.page.click('iron-icon');
        //await this.page.goto('http://www.risel.com.br');
        // {waitUntil: 'networkidle0'}
        // await this.page.waitForTimeout(this.time(5000));
        // const pdf = await this.page.pdf({ format: 'A4'});
        // console.log(pdf);
        // fs.writeFileSync('some.pdf', pdf)

        //await this.page.screenshot({path: 'example.png'});
    }

    async automation(){

        await this.processDataTestamento(this.dataCertificate);
        await this.login();

        // await this.page.goto('https://buscatestamento.org.br/private/orders/new');
        // await this.page.waitForNavigation();
        // await this.page.waitForTimeout(1500);
        // await this.page.click('#mat-checkbox-1');
        // await this.page.waitForTimeout(500);
        // await this.page.click('button[type="submit"]');
        // await this.page.waitForTimeout(100);

        await this.page.goto('https://buscatestamento.org.br/private/orders/new/request');
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(this.time(2000));
        await this.firstStage();
        await this.secondStage();
        await this.thirdStage();
        await this.fourthStage();
        await this.paymentStage();
    }

    async processDataTestamento(dataCertificate) {
        this.form.nome_falecido  = findBySlug(dataCertificate, 'nome-falecido');
        this.form.data_obito  = findBySlug(dataCertificate, 'data-obito');
        this.form.nome_mae  = findBySlug(dataCertificate, 'nome-mae');
        this.form.nome_pai  = findBySlug(dataCertificate, 'nome-pai');
        this.form.registro_geral  = findBySlug(dataCertificate, 'registro-geral');
        this.form.orgao_emissor  = findBySlug(dataCertificate, 'orgao-emissor');
        this.form.cpf_falecido  = findBySlug(dataCertificate, 'cpf-falecido');
        this.form.uf  = findBySlug(dataCertificate, 'estado-obito');
        this.form.matricula_obito  = findBySlug(dataCertificate, 'matricula-obito');
        this.form.data_nascimento  = findBySlug(dataCertificate, 'data-nascimento');

        //need get in backend
        const files = await filesInUploadFolder();
        this.form.link_certidao  = files[0];
        this.form.link_documento  = files[1];
    }
}
module.exports = Testamento;