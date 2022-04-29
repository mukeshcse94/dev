const express = require('express');
const router = express.Router();

const steppeRoutes = require('../controllers/stepperController');

router.route("/").get(steppeRoutes.all);
router.route("/:id").get(steppeRoutes.getOne);
router.route("/").post(steppeRoutes.creates);
router.route("/:id").put(steppeRoutes.updates);

module.exports = router;