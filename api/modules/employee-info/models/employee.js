const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qualification: {
    type: String,
    required: true
  },
  skill: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  loginId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
