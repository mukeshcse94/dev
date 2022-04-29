const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StepperSchema = new Schema({
  name: { type: String, required: true },
  mainText: { type: String, required: true }
})

module.exports = step = mongoose.model('steps', StepperSchema);