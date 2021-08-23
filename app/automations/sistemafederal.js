const puppeteer = require('puppeteer');

async function startSistemaFederal() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://teste.cartoriofederal.com');
    const selector = '.input_radio_II';
    await page.waitForSelector(selector);
    await page.waitForTimeout(300);
    await page.click(selector);
    await page.waitForTimeout(500);
    await page.type('#nome-solicitante', 'Felipe de Almeida Gonçalves');
    await page.type('#email-solicitante', 'almeida.dy.felipe@gmail.com');
    await page.type('#telefone', '61982219259');
    await page.select('#uf_1', 'DF');
    await page.select('#cidade_1', 'Brasília');
    await page.select('#uf_1', 'DF');
    await page.waitForTimeout(1000);
    await page.select('#cidade_1', '792');
    await page.waitForTimeout(1000);
    await page.select('#cartorio_1', '3265');

    await page.type('#nome-certidao_1', 'Felipe de Almeida');
    await page.type('#nome-mae_1', 'Gleicimar de Almeida');
    await page.type('#nome-pai_1', 'Djalma Pereira');
    await page.type('#data-nascimento_1', '12/12/1993');

    await page.type('#numero-livro_1', '10');
    await page.type('#numero-folha_1', '20');
    await page.type('#numero-termo_1', '30');
    await page.waitForTimeout(1000);

    await page.click('.pay-button');
    await page.waitForTimeout(1000);

    await page.type('#cep', '72130901');
    // await page.type('#cidade', '30');
    // await page.type('#uf', '30');
    // await page.type('#bairro', '30');
    await page.type('#numero-endereco', '30');
    await page.type('#complemento-endereco', 'complemento endereço');

    await page.type('#cardNumber', '4235647728025682');
    await page.type('#securityCode', '123');
    await page.type('#cardExpirationMonth', '12');
    await page.type('#cardExpirationYear', '2025');
    await page.type('#cardholderName', 'APRO');
    await page.type('#docNumber', '04735853162');
    await page.waitForTimeout(200);
    await page.type('#installments', '1');
    await page.waitForTimeout(1000);
    await page.click('.card_enable .disparar-pixel-pagamento');
    await page.waitForTimeout(2000);
    await page.click('.card_enable .disparar-pixel-pagamento');
}

module.exports = { startSistemaFederal };