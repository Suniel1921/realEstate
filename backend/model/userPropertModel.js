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
  images: { type: [String], required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  propertyListingCategory: { type: Schema.Types.ObjectId, ref: 'PropertyListingCategory', required: true },
  isVerified: { type: Boolean, default: false }
}, { timestamps: true });

const userPropertyModel = mongoose.model('UserProperty', userPropertySchema);
module.exports = userPropertyModel;






// const mongoose = require('mongoose');

// const PropertySchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   propertyType: {
//     type: String,
//     required: true,
//   },
//   condition: {
//     type: String,
//     required: true,
//   },
//   roadProperty: {
//     type: String,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   district: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   facilities: {
//     type: [String],
//     required: true,
//   },
//   furnishing: {
//     type: String,
//     required: true,
//   },
//   facedTowards: {
//     type: String,
//     required: true,
//   },
//   floors: {
//     type: Number,
//     required: true,
//   },
//   living: {
//     type: Number,
//     required: true,
//   },
//   bathrooms: {
//     type: Number,
//     required: true,
//   },
//   kitchen: {
//     type: Number,
//     required: true,
//   },
//   beds: {
//     type: Number,
//     required: true,
//   },
//   images: {
//     type: [String], // Assuming you're storing image URLs or paths
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//   },
//   phone: {
//     type: String,
//     required: true,
//   },
//   propertyListingCategory: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'PropertyListingCategory',
//     required: true,
//   },
// });

// module.exports = mongoose.model('Property', PropertySchema);
