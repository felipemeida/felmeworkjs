const puppeteer = require('puppeteer');
var path = require('path');

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setViewport({width: 1280, height: 800})
    await page.goto('http://localhost:3000/form');
    const elementHandle = await page.$("input[type=file]");
    await elementHandle.uploadFile(path.join(__dirname, '../storage/upload/localhost.pdf'));
})();