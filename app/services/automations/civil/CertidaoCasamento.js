const CertidaoCivil = require("./CertidaoCivil");
const CertidaoCasamentoAutomation = require("../../../automations/Civil/CertidaoCasamento");

class CertidaoCasamento extends CertidaoCivil {
    instanceAutomationClass() {
        return new CertidaoCasamentoAutomation();
    }
}
module.exports = CertidaoCasamento;