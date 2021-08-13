const Testamento = require("../automations/BuscaTestamento");
const Gmail = require("../automations/Gmail");
module.exports.form = async function  (req, res) {
    res.render('pages/form');
}

module.exports.gmail = async function  (req, res) {
    const gmail = new Gmail();
    await gmail.start();
    res.render('done');
}