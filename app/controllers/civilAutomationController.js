const {fillCertificateCertidaoNascimento} = require("../services/automations/civil/certidaoNascimento");

module.exports.fillCertificateNascimento = async function (req, res) {
    await fillCertificateCertidaoNascimento(req.params.id);
    res.send('done');
}