const CertidaoCivil = require("./CertidaoCivil");
const CertidaoNascimentoAutomation = require("../../../automations/Civil/CertidaoNascimento");

class CertidaoNascimento extends CertidaoCivil {
    instanceAutomationClass() {
        return new CertidaoNascimentoAutomation();
    }
}
module.exports = CertidaoNascimento