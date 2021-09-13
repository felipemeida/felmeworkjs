'use strict';
const nodemailer = require('nodemailer');
const config = require('config');
const Result = require("../result/result");

class Email {

    constructor () {
        this._result = new Result();
        this._to = [];
        this._subject = '';
        this._messageHtml = '';
        this._messageText = '';
    }

    instanceOfMailer(){
        return nodemailer.createTransport({
            host: config.get('email.host'),
            port: config.get('email.port'),
            secure: config.get('email.secure'),
            auth: {
                user: config.get('email.user'), // generated ethereal user
                pass: config.get('email.password'), // generated ethereal password
            },
        });
    }

    async send() {
        let email = this.instanceOfMailer();
        await email.sendMail({
            from: config.get('email.from'),
            to: this.to,
            subject: this.subject,
            text: this.messageText,
            html: this.messageHtml,
        }, this.callBack);
    }

    callBack(error, success){
        if (!error) {
            this._result.error = true;
            this._result.message = 'Erro no envio do e-mail!';
            this._result.info = error;
        } else {
            this._result.error = false;
            this._result.message = 'E-mail enviado com sucesso!';
            this._result.info = success;
        }
    }

    getResult(){
        return this._result;
    }

    set to ($email){
        this._to.push($email);
    }

    get to () {
        return this._to;
    }
    set subject ($subjectString){
        this._subject = $subjectString;
    }

    get subject () {
        return this._subject;
    }
    set messageHtml ($messageHTMLString){
        this._messageHtml = $messageHTMLString;
    }

    get messageHtml () {
        return this._messageHtml;
    }
    set messageText ($message){
        this._messageText = $message;
    }

    get messageText () {
        return this._messageText;
    }
}

module.exports = Email;