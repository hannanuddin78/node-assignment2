const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const shopSchema = new Schema(
  {
    name: {
      type: "string",
      unique: true,
      trim: true,
    },
    owner: {
      type: "string",
      trim: true,
    },
    category: {
      type: "string",
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Shop", shopSchema);