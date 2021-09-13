const router = require('express').Router();

const homeController = require("../app/controllers/homeController");
const sistemaFederalAutomationController = require("../app/controllers/sistemaFederalAutomationsController");
const testamentoAutomationController = require("../app/controllers/testamentoAutomationController");
const testsController = require("../app/controllers/testsController");
const civilAutomationController = require("../app/controllers/civilAutomationController");

// PREENCHER CERTIDÃO CARTÓRIO
router.use('/certificate-system', sistemaFederalAutomationController.fillCertificate);

// CERTIDÕES DE TESTAMENTO
router.use('/testamento/:id', testamentoAutomationController.fillTestamento);
router.use('/testamento', testamentoAutomationController.fillTestamentoGet);
router.use('/testamento/acompanhamento/:id', testamentoAutomationController.monitoringCertificate);

// CERTIDÕES CIVIS
router.use('/civil/nascimento/:id', civilAutomationController.fillCertificateNascimento);

// OUTROS
router.use('/testes', testsController.test);
router.use('/form', testsController.form);
router.use('/login-gmail', testsController.gmail);

/* ROOT */
router.use('/', homeController.index);

module.exports = router;