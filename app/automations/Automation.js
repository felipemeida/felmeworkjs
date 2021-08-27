const puppeteer = require("puppeteer");
const config = require("config");

module.exports = class Automation {
    constructor() {
        this.browser = '';
        this.dataCertificate = {};
        this.page = '';
        this.form = {};
        this.multiplierTime = config.get('performance.multiplierTime')
    }

    async start(dataCertificate) {
        this.dataCertificate = dataCertificate;
        this.browser = await puppeteer.launch({
            headless: config.get('automation.headless'),
            slowMo: config.get('performance.steps'),
            args: [config.get('automation.args')],
        });
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1280, height: 700 })
        await this.automation();
    }

    async automation() {
        throw new Error('Need implement method fillCertificate');
    }

    async end(){
        await this.browser.close();
    }

    time (timeInMilliseconds) {
        return (timeInMilliseconds * this.multiplierTime);
    }
}