const express = require('express');
const router = express.Router();

const studentsCont = require('../../controllers/populate/students');


router.route("/").get(studentsCont.all);
router.route("/").post(studentsCont.createStudent);
router.route("/:id").put(studentsCont.updateStudent);


module.exports = router;
