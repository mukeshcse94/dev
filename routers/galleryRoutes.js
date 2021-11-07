const express = require('express');
const router = express.Router();

const upload = require("../middlewares/multer");
const mainsRoutes = require('../controllers/mainControllers')

router.route("/").get(mainsRoutes.all);

router.route("/:id").get(mainsRoutes.getOne);
router.route("/detail/:galleryId").get(mainsRoutes.getById);
router.route("/add").post(mainsRoutes.creates);
router.route("/upload/:galleryId", upload.array("image", 3)).put(mainsRoutes.updates);
router.route("/removeImage/:galleryId").delete(mainsRoutes.remove);

module.exports = router;

