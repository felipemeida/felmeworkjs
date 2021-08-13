const {startSistemaFederal} = require("../automations/sistemafederal");

module.exports.fillCertificate = async function (req, res) {
    await startSistemaFederal();
    res.send('Done!');
}

