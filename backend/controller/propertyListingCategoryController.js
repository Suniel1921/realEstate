const propertyListingCategoryModel = require("../model/propertyListingCategoryModel");

//create propertyListing category
exports.createPropertyListingCategory = async (req, res) => {
    try {
        const { propertyListingName } = req.body;
        
        // Validation
        if (!propertyListingName) {
            return res.status(400).json({ success: false, message: 'Property Listing Category is required!' });
        }

        // Check if property listing category already exists
        const existingPropertyListingName = await propertyListingCategoryModel.findOne({ propertyListingName });
        if (existingPropertyListingName) {
            return res.status(400).json({ success: false, message: 'Property Listing Category Name already exists!' });
        }

        // Save new property category name in database
        const newCategoryListingName = await propertyListingCategoryModel.create({ propertyListingName });
        return res.status(201).json({ success: true, message: 'Property Listing Category created!', newCategoryListingName });
    
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}


//get all property listing category
exports.getAllPropertyListing = async (req, res)=>{
    try {
        const allPropertyListing = await propertyListingCategoryModel.find({});
        if(allPropertyListing < 0){
            return res.status(404).json({success: false, message: "No property listing available."})
        }
        return res.status(200).json({success: true, message: 'all property listing category fetched',allPropertyListing})
    } catch (error) {
        return res.status(500).jsin({success: false, message: 'internal server error'})
        
    }
}

//delete property listing category

exports.deletePropertyListing = async (req ,res)=>{
    try {        
        const {id} = req.params;
        const deletePropertyListing = await propertyListingCategoryModel.findByIdAndDelete(id);
        if(!deletePropertyListing){
            return res.status(404).json({success: false, message: 'property listing category not found'})
        }
        return res.status(200).json({success: true, message: 'property listing category deleted successfully'})
        
    } catch (error) {
        return res.status(500).json({success: false, message: 'internal server error'})
        
    }
}


