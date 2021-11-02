const Mains = require('../models/mainModels');

exports.all = async (req, res) => {
  try {
    Mains.find()
      .sort({ date: -1 })
      .then(main => res.json(main));
  } catch (err) {
    console.log(err)
  }
}

exports.getOne = async (req, res) => {
  try {
    Mains.findById(req.params.id)
      .then(main => res.json(main))
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newItems = new Mains({
      title: req.body.title,
      details: req.body.details,
      title: req.body.title
    })

    newItems.save().then(item => res.json(item));
  } catch (err) {
    console.log(err)
  }
}

exports.updates = async = (req, res) => {
  try {
    Mains.findByIdAndUpdate(req.params.id, {
      details: req.body.details,
      title: req.body.title,
    }, { new: true }).then(data => { res.json(data) })
  } catch (err) {
    res.status(404).json({ success: false })
  }
}

exports.remove = async (req, res) => {
  try {
    Mains.findByIdAndRemove(req.params.id)
      .then(main => main.remove().then(() => res.json({ success: true })))
  } catch (err) {
    res.status(404).json({ success: false })
  }
}