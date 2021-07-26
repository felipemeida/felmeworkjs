const puppeteer = require('puppeteer');

async function nextStageOnForm(page, count){
    const regions = await page.$$('.align-items-center .mat-flat-button');
    await regions[count - 1].click();
    await page.waitForTimeout(300);
}

async function login(page){
    await page.goto('https://e-notariado.grantid.e-notariado.org.br/Account/Login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Did_token%2520token%26client_id%3Dbuscatestamento%26state%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS;eyJyZXR1cm5VcmwiOm51bGx9%26redirect_uri%3Dhttps%253A%252F%252Fbuscatestamento.org.br%26scope%3Dopenid%2520profile%2520cpf%2520buscatestamento%26nonce%3DAUU7YdYCW2WpXVwWFvS1wnAEaim4kxh2n5CqyLmS');
    await page.type('#Username', '04773145110');
    await page.type('#Password', '951753Pa11!');
    await page.click('.top-space-md .btn-accent');
    await page.waitForNavigation();
}

async function firstStage(page) {
    await page.type('#mat-input-8', '12/11/2016');
    await page.click('#mat-select-0');
    await page.waitForTimeout(300);
    const regions = await page.$$('.mat-option-text');
    await regions[16].click();
    await nextStageOnForm(page, 1)
    await page.click('button[mat-dialog-close]');
    await page.waitForTimeout(300);
}

async function secondStage(page) {
    await page.type('#mat-input-0', 'Felipe outro de Almeida');
    await page.type('#mat-input-1', '12/12/1993');
    await page.type('#mat-input-2', '3095233');
    await page.type('#mat-input-3', 'SSP-SP');
    await page.type('#mat-input-4', '10939779064');
    await page.type('#mat-input-5', 'Gleice de Oliveira');
    await page.type('#mat-input-6', 'Djalma dos Santos');
    // await page.click('.align-items-center .mat-flat-button');
    await nextStageOnForm(page, 2)
}

async function thirdStage(page) {
    await page.type('#mat-input-9', '078980.01.55.2016.4.00088.139.0050768-55');
    await page.click('button[class="col-md-2 mat-flat-button mat-primary"]');
}

async function fillCertificate(page){
    await page.goto('https://buscatestamento.org.br/private/orders/new');
    await page.waitForNavigation();
    await page.waitForTimeout(1500);
    await page.click('#mat-checkbox-1');
    await page.waitForTimeout(500);
    await page.click('button[type="submit"]');

    await page.goto('https://buscatestamento.org.br/private/orders/new/request');
    await page.waitForNavigation();
    await page.waitForTimeout(1500);
    await firstStage(page);
    await secondStage(page);
    await thirdStage(page);
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 700 })
    await login(page);
    await fillCertificate(page);
    //await browser.close();
})();