const BuscaTestamento = require("./BuscaTestamento");

class BuscaTestamentoAcompanhamento extends BuscaTestamento {

    constructor() {
        super();
        this.certidao = '';
    }

    setCertidao(certidao) {
        this.certidao = certidao;
    }

    async automation() {
        await this.login();
        await this.page.waitForTimeout(this.time(1000));
        await this.page.type('#mat-input-0', this.certidao.protocol);
        await this.page.waitForTimeout(this.time(200));
        let status = await this.page.$eval('.mat-row .cdk-column-status', (element) => {
            return element.innerHTML
        })
        await this.saveNewStatus(status);
        await this.end();
    }

    async saveNewStatus(status) {
        status = status.replace('<!---->', '');
        status = status.trim();
        if (status === 'concluído') {
            this.certidao.monitoring = false;
        }
        await this.certidao.increment('count');
        this.certidao.status = status;
        this.certidao.save();
    }
}

module.exports = BuscaTestamentoAcompanhamento