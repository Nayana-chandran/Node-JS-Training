const mongoose = require("mongoose");
const OnboardingSchema = new mongoose.Schema({
  uuid: {
    type: String,
    required: true,
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
    required: false,
  }
});

const Onboarding = mongoose.model("Onboarding", OnboardingSchema);
module.exports = Onboarding;
