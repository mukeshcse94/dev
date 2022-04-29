const Stepper = require('../models/stepperModels');

exports.all = async (req, res) => {
  try {
    Stepper.find()
      .then(ste => res.json(ste));
  } catch (err) {
    console.log(err)
  }
}

exports.getOne = async = (req, res) => {
  try {
    Stepper.findById(req.params.id)
      .then(ste => res.json(ste));
  } catch (err) {
    console.log(err)
  }
}

exports.creates = async = (req, res) => {
  try {
    const newStep = new Stepper({
      name: req.body.name,
      mainText: req.body.mainText
    })

    newStep.save().then(step => res.json(step))
  } catch (err) {
    console.log(err)
  }
}


exports.updates = async = (req, res) => {
  try {
    Stepper.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      mainText: req.body.mainText
    }, { new: true }).then(step => res.json(step))
  } catch (err) {
    console.log(err)
  }
}