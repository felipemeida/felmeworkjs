const {callAutomationFillTestamento, monitoringTestamento} = require("../services/automations/testamento/buscaTestamento");

module.exports.fillTestamento = async function (req, res) {
    await callAutomationFillTestamento(req.params.id);
    res.send('Enviado!');
}

module.exports.fillTestamentoGet = async function (req, res) {
    await callAutomationFillTestamento(req.query.id);
    res.send('Enviado!');
}

module.exports.monitoringCertificate = async function (req, res) {
    await monitoringTestamento();
    res.send('done')
}