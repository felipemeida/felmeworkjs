const Gmail = require("../automations/Gmail");
const TesteAutomation = require("../automations/TesteAutomation");

module.exports.form = async function  (req, res) {
    res.render('pages/form');
}

module.exports.gmail = async function  (req, res) {
    const gmail = new Gmail();
    await gmail.start();
    res.render('done');
}

module.exports.test = async function  (req, res) {
    const testeAutomation = new TesteAutomation();
    testeAutomation.start().then(res.send('finalizado'));
    res.send('executando');
}