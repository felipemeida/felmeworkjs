const router = require('express').Router();

const homeController = require("../app/controllers/homeController");
const sistemaFederalAutomationController = require("../app/controllers/sistemaFederalAutomationsController");
const testamentoAutomationController = require("../app/controllers/testamentoAutomationController");
const testsController = require("../app/controllers/testsController");
const civilAutomationController = require("../app/controllers/civilAutomationController");

router.use('/certificate-system', sistemaFederalAutomationController.fillCertificate);
router.use('/testamento/:id', testamentoAutomationController.fillTestamento);
router.use('/testamento', testamentoAutomationController.fillTestamentoGet);
router.use('/acompanhamento/:id', testamentoAutomationController.monitoringCertificate);
router.use('/certificate', testamentoAutomationController.getCertificate);

router.use('/civil/nascimento/:id', civilAutomationController.fillCertificateNascimento);
router.use('/civil/nascimento', civilAutomationController.fillCertificateNascimento);

router.use('/testes', testsController.test);
router.use('/form', testsController.form);
router.use('/login-gmail', testsController.gmail);

/* ROOT */
router.use('/', homeController.index);

module.exports = router;