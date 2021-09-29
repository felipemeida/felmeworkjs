const CertidaoCivil = require("./CertidaoCivil");
const CertidaoObitoAutomation = require("../../../automations/Civil/CertidaoObito");

class CertidaoObito extends CertidaoCivil {
    instanceAutomationClass() {
        return new CertidaoObitoAutomation();
    }
}
module.exports = CertidaoObito;