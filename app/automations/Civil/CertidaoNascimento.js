const Automation = require("../Automation");
const CertidaoCivil = require("./CertidaoCivil");

class CertidaoNascimento extends CertidaoCivil {
    async automation(){
        await this.login();
        await this.page.goto('https://www.registrocivil.org.br/birth-certificate');
        await this.page.waitForTimeout(this.time(100));
        await this.page.click('.multiselect');
        await this.page.click('.multiselect__option');

        await this.page.waitForSelector('[name="completeName"]');

        await this.page.type('[name="completeName"]', 'Felipe de Almeida Gonçalves');
        await this.page.type('[name="cpf"]', '04735853162');
        await this.page.type('[name="date-of-birth"]', '12/12/1993');
        await this.page.type('[name="parentshipOne"]', 'Djalma Pereira Gonçalves');
        await this.page.type('[name="parentshipTwo"]', 'Glecimar de Almeida');

        await this.nextStage();

        await this.page.type('[name="bookNumber"]', '10');
        await this.page.type('[name="sheetNumber"]', '20');
        await this.page.type('[name="termNumber"]', '30');
        await this.page.click('[name="bookNumber"]');

        await this.nextStage();

        await this.page.click('#digitalCopy');

        await this.nextStage();
        await this.page.waitForSelector('label.custom-control-label');
        await this.page.click('label.custom-control-label');
        await this.page.waitForTimeout(this.time(100));
        await this.nextStage();
        await this.nextStage();
    }
}

module.exports = CertidaoNascimento;