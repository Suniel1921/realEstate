// models/Property.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userPropertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  propertyType: { type: String, required: true },
  condition: { type: String, required: true },
  roadProperty: { type: String, required: true },
  address: { type: String, required: true },
  district: { type: String, required: true },
  price: { type: Number, required: true },
  facilities: [String],
  furnishing: { type: String, required: true },
  facedTowards: { type: String, required: true },
  floors: { type: Number, required: true },
  living: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  kitchen: { type: Number, required: true },
  beds: { type: Number, required: true },
  image: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true }
});

// module.exports = mongoose.model('Property', PropertySchema);
const userPropertyModel = mongoose.model('userProperty', userPropertySchema);
module.exports = userPropertyModel;
