const CertidaoCivil = require("./CertidaoCivil");

class CertidaoCasamento extends CertidaoCivil {
    async automation(){
        await this.login();
        await this.page.goto('https://www.registrocivil.org.br/marriage-certificate');

        await this.ufSelect();

        await this.page.type('[name="firstConjugateName"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="secondConjugateName"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="date-of-marriage"]', this.certidao.nome_certidao.value);

        await this.nextStage();

        await this.page.type('[name="bookNumber"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="sheetNumber"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="termNumber"]', this.certidao.nome_certidao.value);

        await this.nextStage();
        await this.format();
        await this.nextStage();

        await this.end();
    }
}
module.exports = CertidaoCasamento;