var mongoose = require('mongoose')
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String, unique: true },
  students: [{ type: 'ObjectId', ref: 'Student' }]
})
//students is refress like objectId not data
// in a class can be many students
//should be ref name == schemma name

module.exports = mongoose.model("Class", classSchema);
