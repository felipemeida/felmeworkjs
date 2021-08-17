const Certificates = require("../resources/certificate-system/Certificates");
const BuscaTestamentoCertidao = require("../automations/BuscaTestamento/BuscaTestamentoCertidao");
const BuscaTestamentoAcompanhamento = require("../automations/BuscaTestamento/BuscaTestamentoAcompanhamento");

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
    const buscaTestamentoCertidao = new BuscaTestamentoAcompanhamento();
    buscaTestamentoCertidao.setId('B05719291');
    // const certificates = new Certificates();
    // const certificatesToWatch = await certificates.certificateToWatch();
    // console.log(certificatesToWatch);
    await buscaTestamentoCertidao.start();
}

async function callAutomation(dataCertificate){
    const buscaTestamentoCertidao = new BuscaTestamentoCertidao();
    await buscaTestamentoCertidao.start(dataCertificate.data.datas);
}