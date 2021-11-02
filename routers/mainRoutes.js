const express = require('express');
const router = express.Router();

const mainsRoutes = require('../controllers/mainControllers')

router.route("/").get(mainsRoutes.all);
router.route("/:id").get(mainsRoutes.getOne);
router.route("/").post(mainsRoutes.creates);
router.route("/:id").put(mainsRoutes.updates);
router.route("/:id").delete(mainsRoutes.remove);

module.exports = router;

