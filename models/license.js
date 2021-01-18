const mongoose = require("mongoose");

const licenseSchema = new mongoose.Schema(
  {
    inn: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    nameCompany: {
      type: String,
      lowercase: true,
      index: true,
    },
    product: {
      type: String,
      required: true,
      text: true,
    },
    numberOfUsers: {
      type: Number,
      required: true,
      trim: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    expiry: {
      type: Date,
      required: true,
    },
    contactName: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    comment: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("License", licenseSchema);
