const BuscaTestamento = require("./BuscaTestamento");
const {selectorToClipboard} = require("../../helpers/copyToClipboard");

class BuscaTestamentoAcompanhamento extends BuscaTestamento {

    constructor() {
        super();
        this.id = '';
    }

    setId(id){
        this.id = id;
    }

    async automation() {
        await this.login();
        await this.page.type('#mat-input-0', this.id);
        await this.page.waitForTimeout(this.time(100));
        let status = await this.page.$eval('.mat-row .cdk-column-status', (element) => {
            return element.innerHTML
        })
        status = status.replace('<!---->', '');
        status = status.trim();
        console.log(status);
    }
}

module.exports = BuscaTestamentoAcompanhamento