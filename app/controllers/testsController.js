'use strict';
const Gmail = require("../automations/Gmail");
const TesteAutomation = require("../automations/TesteAutomation");
const Email = require("../utils/email/email");

module.exports.form = async function  (req, res) {
    res.render('pages/form');
}

module.exports.gmail = async function  (req, res) {
    const gmail = new Gmail();
    await gmail.start();
    res.render('done');
}

module.exports.test = async function  (req, res) {
    const email = new Email();
    email.to = 'almeida.dy.felipe@gmail.com';
    email.subject = 'Título do e-mail';
    email.messageText = 'Message do e-mail';
    await email.send();
    console.log(email.getResult())
}