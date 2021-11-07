var Class = require('../../models/populate/class');


exports.all = async (req, res) => {
  try {
    Class.find({}).populate('students').exec((err, docs) => {
      //populate fields which want to pass
      if (err) throw (err);
      res.json(docs)
    })
  } catch (err) {
    console.log(err)
  }
};

exports.createClass = async (req, res) => {
  try {
    let cl = new Class();
    cl.name = req.body.name;
    cl.students = [];
    cl.save((err) => {
      if (err) res.json({ "error": err });
      else res.json(cl)
    })
  } catch (err) {
    console.log(err)
  }
};

exports.updateClass = async (req, res) => {
  try {
    Class.findOneAndUpdate({ _id: req.params.id },
      { $push: { students: req.body.studentsId } }, { new: true }, (err, doc) => {
        //$push used to push data in students array, we push studentsId
        if (err) throw (err);
        else res.json(doc)
      })
  } catch (err) {
    console.log(err)
  }
};




