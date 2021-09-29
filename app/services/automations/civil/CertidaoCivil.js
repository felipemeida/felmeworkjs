const Account = require("../../../models/account");
const InterfaceCertificateService = require("../InterfaceCertificateService");

class CertidaoCivil extends InterfaceCertificateService{
    async start(){
        const account = await this.getCivilAccount();
        if (account) {
            const certificate = this.instanceAutomationClass();
            certificate.setAccount(account);
            certificate.setCertidao(this.dataCertificate);
            await certificate.start();
        }
    }

    instanceAutomationClass(){
        throw new Error('You need implement Instance Automation Class');
    }

    async getCivilAccount(){
        const account = await Account.findOne({
            where: {
                type: 'eletronica-registrocivil',
            },
            order: [
                ['updatedAt', 'ASC']
            ]
        });
        if (account) {
            await account.increment(['count']);
        }
        return account;
    }
}

module.exports = CertidaoCivil;