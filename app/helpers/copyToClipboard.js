const clipboardy = require("clipboardy");
module.exports.selectorToClipboard = async function (page, selector) {
    let alert = await page.$eval(selector, (element) => {
        return element.innerHTML
    })
    alert = alert.replace('Pedido ', '');
    await clipboardy.write(alert);
}