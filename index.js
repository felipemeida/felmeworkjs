const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://testepainel.cartoriofederal.com/login');
    await page.type('#email', 'almeida.dy.felipe@gmail.com');
    await page.type('#password', 'fel12345');
    await page.click('.offset-md-4 .btn-primary');
    await page.waitForNavigation();
    await page.goto('https://testepainel.cartoriofederal.com/sale/atendimento');
    //await page.waitForNavigation();
    await page.waitForTimeout(500);
    await page.screenshot({path: "example1.png"});
    await page.goto('https://testepainel.cartoriofederal.com/report/certificate');
    await page.waitForTimeout(500);
    await page.screenshot({path: "example2.png"});
    await browser.close();


    //https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp


    // const qualquerUrl = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.69i59j0l7.1726j0j4&sourceid=chrome&ie=UTF-8`;
    // await page.goto(qualquerUrl);
    // // await page.screenshot({path: 'example.png'});
    //
    // const resultado = await page.evaluate(() => {
    //     return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
    // });

    // Get the "viewport" of the page, as reported by the page.
    // const dimensions = await page.evaluate(() => {
        // return {
        //     width: document.documentElement.clientWidth,
        //     height: document.documentElement.clientHeight,
        //     deviceScaleFnactor: window.devicePixelRatio,
        // };
    // });

    // console.log('Dimensions:', dimensions);

    //await browser.close();
})();