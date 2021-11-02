const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
  title: { type: String, required: true },
  details: { type: String, required: true }
});

module.exports = mains = mongoose.model('mains', MainSchema);