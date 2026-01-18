const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttandanceSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  punchInValue: {
    type: Date,
    default: null,
  },
  punchOutValue: {
    type: Date,
    default: null,
  },
  Workinghours: {
    type: String,
    default: null,
  },
  Workingminutes: {
    type: String,
    default: null,
  },
});

const AttandanceModel = mongoose.model("Attandance", AttandanceSchema);

module.exports = AttandanceModel;
