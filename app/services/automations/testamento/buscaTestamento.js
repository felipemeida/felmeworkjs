const BuscaTestamentoCertidao = require("../../../automations/BuscaTestamento/BuscaTestamentoCertidao");
const Certificate = require("../../../models/Certificate");
const BuscaTestamentoAcompanhamento = require("../../../automations/BuscaTestamento/BuscaTestamentoAcompanhamento");
const {saveCertificate} = require("../../../services/certificate/saveCertificate");
const Certificates = require("../../../resources/certificate-system/Certificates");

async function callAutomationFillTestamento(id) {
    const certificates = new Certificates();
    const dataCertificate = await certificates.getById(id);
    const buscaTestamentoCertidao = new BuscaTestamentoCertidao();
    await buscaTestamentoCertidao.setCertificate(dataCertificate)
    await buscaTestamentoCertidao.start();
}

async function monitoringTestamento() {
    let certificate = await Certificate.findAll({
        where: {
            type: 'testamento',
            monitoring: true
        },
        order: [
            ['updatedAt', 'ASC']
        ]
    });

    if (certificate.length > 0) {
        const buscaTestamentoCertidao = new BuscaTestamentoAcompanhamento();
        buscaTestamentoCertidao.setCertidao(certificate[0]);
        await buscaTestamentoCertidao.start();
    } else {
        await saveCertificate();
    }
}

module.exports = {
    callAutomationFillTestamento,
    monitoringTestamento
}