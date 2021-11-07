const express = require('express');
const router = express.Router();

const Search = require('../models/search');


router.get('/', (req, res) => {
  Search.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


router.get("/search/:name", (req, res) => {
  var regex = new RegExp(req.params.name, 'i');
  Search.find({ name: regex }).then((result) => {
    res.status(200).json(result)
  })
})


module.exports = router;
