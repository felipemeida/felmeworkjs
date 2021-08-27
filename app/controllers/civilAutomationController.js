const Certificates = require("../resources/certificate-system/Certificates");
const CertidaoNascimento = require("../automations/Civil/CertidaoNascimento");

module.exports.fillCertificateNascimento = async function (req, res) {

    const certificates = new Certificates();
    const dataCertificate = await certificates.getById(req.params.id);

    const buscaTestamentoCertidao = new CertidaoNascimento();
    buscaTestamentoCertidao.setCertidao(dataCertificate);
    await buscaTestamentoCertidao.start();
}