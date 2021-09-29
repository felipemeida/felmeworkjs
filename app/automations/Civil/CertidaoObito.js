const CertidaoCivil = require("./CertidaoCivil");

class CertidaoObito extends CertidaoCivil {
    async automation() {
        await this.login();
        await this.page.goto('https://www.registrocivil.org.br/marriage-certificate');

        await this.ufSelect();

        await this.page.type('[name="deceasedName"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="decease-date"]', this.certidao.nome_certidao.value);

        await this.nextStage();

        await this.page.type('[name="parentshipOne"]', this.certidao.nome_certidao.value);
        await this.page.type('[name="parentshipTwo"]', this.certidao.nome_certidao.value);

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
module.exports = CertidaoObito;