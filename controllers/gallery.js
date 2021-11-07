const Gallery = require("../models/Gallery");
const router = require("express").Router();
const fs = require("fs");

exports.all = async (req, res) => {
  try {
    Gallery.find().exec((err, galleries) => {
      if (err)
        return res.json({
          status: false,
          message: "Server errors",
          result: err,
        });
      return res.json({
        status: false,
        message: "Data found",
        result: galleries,
      });
    });
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    gallery.save((err, newGallery) => {
      if (err)
        return res.json({
          status: false,
          message: "Server errors",
          result: err,
        });
      return res.json({
        status: true,
        message: "Gallery added",
        result: newGallery,
      });
    });
  } catch (err) {
    console.log(err)
  }
}

exports.updates = async (req, res) => {
  try {
    const inputfiles = req.files;
    const images = [];
    inputfiles.map((file) => {
      images.push(file.filename);
    });
    const galleryId = req.params.galleryId;

    Gallery.findOneAndUpdate(
      { _id: galleryId },
      { $push: { images: images } },
      { new: true },
      function (err, data) {
        if (err) {
          res.status(500).json({
            status: false,
            message: "Upload error",
            result: err,
          });
        } else {
          res.status(200).json({
            status: true,
            message: "Upload successfully!",
            result: data,
          });
        }
      }
    );
  } catch (err) {
    console.log(err)
  }
}

exports.getById = async (req, res) => {
  try {
    const galleryId = req.params.galleryId;
    Gallery.findOne({ _id: galleryId }, function (err, gallery) {
      if (err) {
        res.status(500).json({
          status: false,
          message: "Get gallery error",
          result: err,
        });
      } else {
        res.status(200).json({
          status: true,
          message: "Get gallery successfully!",
          result: gallery,
        });
      }
    });
  } catch (err) {
    console.log(err)
  }
}

exports.remove = async (req, res) => {
  try {
    const fileName = req.body.fileName;
    console.log("~~~fileName: ", fileName);

    const galleryId = req.params.galleryId;

    Gallery.findOneAndUpdate(
      { _id: galleryId },
      { $pull: { images: fileName } },
      { new: true },
      function (err, data) {
        if (err) {
          res.status(500).json({
            status: false,
            message: "Remove image error",
            result: err,
          });
        } else {
          const path = "uploads/" + fileName;
          fs.unlinkSync(path);
          res.status(200).json({
            status: true,
            message: "Remove image successfully!",
            result: data,
          });
        }
      }
    );
  } catch (err) {
    console.log(err)
  }
}


module.exports = router;
