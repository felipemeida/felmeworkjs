const Account = require("../../../models/account");
const Certificates = require("../../../resources/certificate-system/Certificates");
const CertidaoNascimento = require("../../../automations/Civil/CertidaoNascimento");

async function fillCertificateCertidaoNascimento(id){
    const certificates = new Certificates();
    const dataCertificate = await certificates.getById(id);

    const account = await Account.findOne({
        where: {
            type: 'eletronica-registrocivil',
        },
        order: [
            ['updatedAt', 'ASC']
        ]
    });

    if (account) {
        await account.increment(['count']);

        const certidaoNascimento = new CertidaoNascimento();
        certidaoNascimento.setAccount(account);
        certidaoNascimento.setCertidao(dataCertificate);
        await certidaoNascimento.start();

    }
}

module.exports = {
    fillCertificateCertidaoNascimento,
}
