const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split(' ')[1];
    cb(null, `${Date.now()}_${file.originalname}.${ext}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    (file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg") && (
      file.mimetype.startsWith('image/'))
  ) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: fileFilter,
});

module.exports = upload;
