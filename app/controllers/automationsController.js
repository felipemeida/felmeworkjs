const Certificates = require("../resources/certificate-system/Certificates");
const Testamento = require("../automations/Testamento");
const {startTestamento} = require("../automations/Testamento");
const {startSistemaFederal} = require("../automations/sistemafederal");

module.exports.fillCertificate = async function (req, res) {
    await startSistemaFederal();
    res.send('Done!');
}

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

async function callAutomation(dataCertificate){
    const testamento = new Testamento();
    await testamento.start(dataCertificate.data.datas);
}

module.exports.getCertificate = async function (req, res) {
    const certificates = new Certificates();
    const data = await certificates.getById(10371);
    res.send(data);
}