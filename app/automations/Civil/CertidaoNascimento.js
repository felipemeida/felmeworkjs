const CertidaoCivil = require("./CertidaoCivil");
const {ufToOrderNumber} = require("../../helpers/ufHelper");

class CertidaoNascimento extends CertidaoCivil {
    async automation(){
        await this.login();
        await this.page.goto('https://www.registrocivil.org.br/birth-certificate');
        await this.page.waitForSelector('.multiselect');
        await this.page.waitForTimeout(this.time(100));
        await this.page.click('.multiselect');
        await this.page.waitForSelector('.multiselect__option');
        await this.page.waitForTimeout(this.time(100));

        const regions = await this.page.$$('.multiselect__element');
        await regions[ufToOrderNumber(this.certidao.uf.value)].click();

        await this.page.waitForSelector('[name="completeName"]', {timeout: 300000});
        await this.page.waitForTimeout(this.time(300));

        await this.page.type('[name="completeName"]', this.certidao.nome_certidao.value);
        // await this.page.type('[name="cpf"]', '');
        await this.page.type('[name="date-of-birth"]', this.certidao.data_nascimento.value);
        await this.page.type('[name="parentshipOne"]', this.certidao.nome_pai.value);
        await this.page.type('[name="parentshipTwo"]', this.certidao.nome_mae.value);

        await this.nextStage();

        await this.page.type('[name="bookNumber"]', this.certidao.numero_livro.value);
        await this.page.type('[name="sheetNumber"]', this.certidao.numero_folha.value);
        await this.page.type('[name="termNumber"]', this.certidao.numero_termo.value);
        await this.page.click('[name="bookNumber"]');

        await this.nextStage();

        await this.page.click('#digitalCopy');

        await this.nextStage();
        await this.page.waitForSelector('label.custom-control-label');
        await this.page.click('label.custom-control-label');
        await this.page.waitForTimeout(this.time(100));
        await this.nextStage();
        await this.nextStage();
        await this.nextStage();
    }
}

module.exports = CertidaoNascimento;