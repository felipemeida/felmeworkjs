const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false, devtools: true});
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 800})
    await page.goto('https://10fastfingers.com/typing-test/portuguese');
    //await page.waitForNavigation();
    await page.waitForTimeout(60000);
    const texts = await page.$$('#row1');
    for (let i=0;i<texts.length;i++) {
        let value = await texts[i].evaluate(el => el.textContent)
        await page.type('#inputfield', value);
    }
})();