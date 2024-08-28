const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  mynid: {
    type: String,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
    business : {
    type: Object,
  },
  vehicle : {
    type: Object,
  },
  driver : {
    type: Object,
  },
  paymentProfile : {
    type: Object,
  },
  invoiceDetails : {
    type: Object,
  },
  listingFee : {
    type: Object,
  },
  created_by: {
    type: String,
    required: false,
  },
  comments : {
    type: Object,
  },
  referral_code: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
