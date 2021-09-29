class InterfaceCertificateService {
    constructor(dataCertificate) {
        this.dataCertificate = dataCertificate;
    }

    start() {
        throw new Error('You need implement the "start" method');
    }
}

module.exports = InterfaceCertificateService;