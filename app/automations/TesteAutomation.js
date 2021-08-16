const Automation = require("./Automation");
const clipboardy = require("clipboardy");

class TesteAutomation extends Automation {
    async automation() {
        await this.page.goto('https://gatry.com/promocoes');
    }
}
module.exports = TesteAutomation;