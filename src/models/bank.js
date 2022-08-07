const mongoose = require("mongoose");
const validator = require("validator");

const Bank = mongoose.model("Bank", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.includes("password")) {
        throw new Error("Password cannot contain password");
      }
    },
  },
});

module.exports = Bank;
