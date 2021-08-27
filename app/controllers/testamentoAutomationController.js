const Certificates = require("../resources/certificate-system/Certificates");
const BuscaTestamentoCertidao = require("../automations/BuscaTestamento/BuscaTestamentoCertidao");
const BuscaTestamentoAcompanhamento = require("../automations/BuscaTestamento/BuscaTestamentoAcompanhamento");
const Certificate = require("../models/Certificate");
const {saveCertificate} = require("../services/certificate/saveCertificate");

module.exports.fillTestamento = async function (req, res) {
    const certificates = new Certificates();
    const dataCertificate = await certificates.getById(req.params.id);
    await callAutomation(dataCertificate);
    res.send('Enviado!');
}

module.exports.fillTestamentoGet = async function (req, res) {
    const certificates = new Certificates();
    const dataCertificate = await certificates.getById(req.query.id);
    await callAutomation(dataCertificate);
    res.send('Enviado!');
}

module.exports.getCertificate = async function (req, res) {
    const certificates = new Certificates();
    const data = await certificates.getById(10371);
    res.send(data);
}

module.exports.monitoringCertificate = async function (req, res) {

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
    res.send('done');
}

async function callAutomation(dataCertificate) {
    const buscaTestamentoCertidao = new BuscaTestamentoCertidao();
    await buscaTestamentoCertidao.start(dataCertificate.data.datas);
}