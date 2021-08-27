const Certificate = require("../../models/Certificate");
const Certificates = require("../../resources/certificate-system/Certificates");

async function saveCertificate() {

    const certificates = new Certificates();
    const certificatesToWatch = await certificates.certificateToWatch();

    for (const certificateItem of certificatesToWatch) {
        const certificate = await Certificate.create({
            protocol: certificateItem.certidao_protocolo,
            type: "testamento",
        });
        await certificate.save();
    }
}

module.exports = {
    saveCertificate
}
