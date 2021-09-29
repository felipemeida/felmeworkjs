const CertidaoCivil = require("./CertidaoCivil");

class CertidaoNascimento extends CertidaoCivil {
    async automation(){
        await this.login();
        await this.page.goto('https://www.registrocivil.org.br/birth-certificate');

        await this.ufSelect();

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
        await this.format();
        await this.nextStage();

        await this.end();
    }
}

module.exports = CertidaoNascimento;