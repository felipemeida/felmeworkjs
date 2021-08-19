const {startSistemaFederal} = require("../app/automations/sistemafederal");

async function test() {
    await startSistemaFederal();
}
test();