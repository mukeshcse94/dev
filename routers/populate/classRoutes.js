const express = require('express');
const router = express.Router();

const classCont = require('../../controllers/populate/class');

router.route("/").get(classCont.all);
router.route("/").post(classCont.createClass);
router.route("/:id").put(classCont.updateClass);


module.exports = router;
