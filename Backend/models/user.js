const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,  
},
    last_name: {
    type: String, 
  },
  personal_number: {
    type: Number,
    unique: true,
  },
  wing: {
    type: String,
  },
  unit_number: {
    type: Number,
  },
  rank: {
    type: Number,
  },
  iscommander: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", UserSchema);