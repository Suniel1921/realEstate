const mongoose = require ("mongoose");

const propertyListingSchema  = new mongoose.Schema({

    propertyListingName: {
        type: String,
        required : [true, 'property Listing Category is required']
    }
},{timestamps: true})

const propertyListingCategoryModel = mongoose.model("propertyListing", propertyListingSchema);
module.exports = propertyListingCategoryModel;



