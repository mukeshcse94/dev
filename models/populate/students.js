var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, unique: true },
  age: Number,
  subject: String,
})

module.exports = mongoose.model("Student", studentSchema);