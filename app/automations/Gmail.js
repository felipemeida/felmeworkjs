const Automation = require("./Automation");

class Gmail extends Automation{
    async automation (){
        await this.login();
        await this.page.goto('https://buscatestamento.org.br/private/orders/decda115-a035-4459-a906-4c0a895cab3f');
        await this.page.waitForTimeout(this.time(3000));
        await this.page.click('.px-4 [class="mat-flat-button mat-primary ng-star-inserted"]');
    }

    async login(){
        await this.page.goto('https://e-notariado.grantid.e-notariado.org.br/Account/Login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dbuscatestamento%26state%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fbuscatestamento.org.br%26scope%3Dopenid%2520profile%2520cpf%2520buscatestamento%26nonce%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS');
        await this.page.type('#Username', '04773145110');
        await this.page.type('#Password', '951753Pa11!');
        await this.page.click('.top-space-md .btn-accent');
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(this.time(4000));
    }

    // async automation() {
    //     await this.page.goto('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
    //     //await this.page.waitForNavigation({waitUntil: 'domcontentloaded', timeout: this.time(1500)});
    //     await this.page.waitForTimeout(this.time(2500));
    //     await this.page.type('#identifierId', 'almeida.dy.felipe@gmail.com');
    //     await this.page.click('#identifierNext');
    //     await this.page.type('[type="password"]', '4Up13916');
    //     await this.page.click('#passwordNext');
    //     await this.end();
    // }
}
module.exports = Gmail;