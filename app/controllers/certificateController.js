const Certificate = require("../services/automations/Certificate");

module.exports.fillCertificate = async function (req, res) {
    let certificate = new Certificate(req.params.id);
    await certificate.fillCertificate();
}