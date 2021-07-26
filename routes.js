const {start} = require("./automations/testamento");
const {startSistemaFederal} = require("./automations/sistemafederal");
let ejs = require('ejs');
const router = require('express').Router();

router.use('/testamento', async (req, res) => {
    await start();
    res.send('Done!')
});

router.use('/sistema-federal', async (req, res) => {
    await startSistemaFederal();
    res.send('Done!')
});

router.use('/', async (req, res) => {
    res.render('pages/home');
});

module.exports = router;