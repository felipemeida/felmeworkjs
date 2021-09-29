const Certificates = require("../../resources/certificate-system/Certificates");
const CertidaoNascimento = require("./civil/CertidaoNascimento");
const CertidaoCasamento = require("../../automations/Civil/CertidaoCasamento");
const CertidaoObito = require("./civil/CertidaoObito");
const Testamento = require("./testamento/Testamento");

class Certificate {
    constructor(id) {
        this.id = id;
        this.certificateData = {};
    }

    async certificate() {
        this.certificateData = await this.getCertidaoById();
        let certificateData = this.instanceCertificateClass();
        certificateData.start();
    }

    async fillCertificate() {
        await this.certificate();
    }

    instanceCertificateClass() {
        let classInstance = '';
        switch (this.certificateData.data.service.slug) {
            case 'certidao-nascimento':
                classInstance = new CertidaoNascimento(this.certificateData);
                break;
            case 'certidao-casamento':
                classInstance = new CertidaoCasamento(this.certificateData);
                break;
            case 'certidao-obito':
                classInstance = new CertidaoObito(this.certificateData);
                break;
            case 'certidao-negativa-testamento':
                classInstance = new Testamento(this.certificateData);
                break;
            default:
                throw  new Error('You need implement this certificate: '+ this.certificateData.data.service.slug);
        }
        return classInstance;
    }

    async getCertidaoById() {
        const certificates = new Certificates();
        return await certificates.getById(this.id);
    }
}

module.exports = Certificate;