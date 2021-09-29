const router = require('express').Router();

const homeController = require("../app/controllers/homeController");
const sistemaFederalAutomationController = require("../app/controllers/sistemaFederalAutomationsController");
const testsController = require("../app/controllers/testsController");
const certificateController = require("../app/controllers/certificateController");

// PREENCHER CERTIDÃO CARTÓRIO
router.use('/sistema-federal/nascimento', sistemaFederalAutomationController.fillCertificate);

router.use('/certificate/:id', certificateController.fillCertificate);

// OUTROS
router.use('/testes', testsController.test);
router.use('/form', testsController.form);
router.use('/login-gmail', testsController.gmail);

/* ROOT */
router.use('/', homeController.index);

module.exports = router;