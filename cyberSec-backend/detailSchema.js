const { default: mongoose, Schema, Mongoose } = require("mongoose");

const detailSchema = new Schema(
  {
    cardOwner: String,
    cardNumber: String,
    expMonth: String,
    expYear: String,
    CVV: String,
  },
  { versionKey: false, collection: "Cards" }
);

const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;
