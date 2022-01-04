const router = require('express').Router();

const homeController = require("../app/controllers/homeController");

router.use('/', homeController.index);

module.exports = router;