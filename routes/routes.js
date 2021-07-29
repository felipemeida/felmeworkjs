const router = require('express').Router();

const homeController = require("../app/controllers/homeController");
const automationsController = require("../app/controllers/automationsController");

router.use('/certificate-system', automationsController.fillCertificate);
router.use('/testamento', automationsController.fillTestamento);
router.use('/certificate', automationsController.getCertificate);
router.use('/', homeController.index);

module.exports = router;