var Student = require('../../models/populate/students');

exports.all = async (req, res) => {
  try {
    Student.find({}).exec((err, docs) => {
      if (err) throw (err);
      res.json(docs)
    })
  } catch (err) {
    console.log(err)
  }
};

exports.createStudent = async (req, res) => {
  try {
    let student = new Student();
    student.name = req.body.name;
    student.age = req.body.age;
    student.subject = req.body.subject;
    student.save((err) => {
      if (err) res.json({ "error": err });
      else res.json(student)
    })
  } catch (err) {
    console.log(err)
  }
};

exports.updateStudent = async (req, res) => {
  try {
    Student.findOneAndUpdate({ _id: req.param.id },
      { $set: { age: req.body.age } }, { new: true }, (err, doc) => {
        if (err) throw (err);
        else res.json(doc)
      })
  } catch (err) {
    console.log(err)
  }
};




// app.put('/students/:id', (req, res) => {
//   Student.findOneAndUpdate({ _id: req.param.id },
//     { $set: { age: req.body.age } }, { new: true }, (err, doc) => {
//       if (err) throw (err);
//       else res.json(doc)
//     })
// })