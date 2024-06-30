const fs = require('fs');
const cloudinary = require('cloudinary').v2;
const Property = require('../model/userPropertModel');
const mongoose = require('mongoose'); // Add mongoose to check for ObjectId validation
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 10MB in bytes

async function isFileSupported(type) {
  const supportedTypes = ['jpg', 'jpeg', 'png'];
  return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder, resource_type: 'auto' };
  if (quality) {
    options.quality = quality;
  }
  const result = await cloudinary.uploader.upload(file.tempFilePath, options);
  // Delete the temporary file after upload
  fs.unlink(file.tempFilePath, (err) => {
    if (err) {
      console.error(`Failed to delete temp file ${file.tempFilePath}:`, err);
    }
  });
  return result;
}

exports.userRegisterProperty = async (req, res) => {
  try {
    let files = req.files && req.files.images ? req.files.images : [];
    let uploadedImages = [];

    if (!Array.isArray(files)) {
      files = [files];
    }

    const fileUploadPromises = files.map(async (file) => {
      const fileType = file.name.split('.').pop().toLowerCase();
      const fileSize = file.size;

      if (fileSize > MAX_FILE_SIZE) {
        throw new Error(`File size too large. Got ${fileSize}. Maximum is ${MAX_FILE_SIZE}.`);
      }

      if (!(await isFileSupported(fileType))) {
        throw new Error('File format is not supported');
      }

      const response = await uploadFileToCloudinary(file, 'userImages', 90);
      return response.secure_url;
    });

    uploadedImages = await Promise.all(fileUploadPromises);

    const { propertyListingCategoryId, ...restBody } = req.body;

    if (!mongoose.Types.ObjectId.isValid(propertyListingCategoryId)) {
      return res.status(400).json({ success: false, message: 'Invalid property listing category ID' });
    }

    const propertyData = {
      ...restBody,
      images: uploadedImages,
      propertyListingCategory: propertyListingCategoryId // Ensure the correct field name
    };

    const property = new Property(propertyData);
    await property.save();
    res.status(201).json({ success: true, property });
  } catch (error) {
    console.error('Error while registering property:', error);
    res.status(500).json({ success: false, message: `Error while registering property: ${error.message}` });
  }
};





//get all user property
exports.getAllUserProperty = async (req, res) => {
    try {
        const allProperties = await Property.find();
        
        if (allProperties.length === 0) {
            return res.status(404).json({ success: false, message: 'No properties found' });
        }

        res.status(200).json({ success: true, message: 'all user property fetched', allProperties });
    } catch (error) {
        console.error("Error while fetching properties:", error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};


//get single user property
exports.singleUserProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const singleProperty = await Property.findById(id);

    if (!singleProperty) {
      return res.status(404).json({ success: false, message: 'No single property found' });
    }

    return res.status(200).json({ success: true, message: 'Single user property found', singleProperty });
  } catch (error) {
    console.error("Error while fetching property:", error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};




//get related products based on category

exports.getRelatedProducts = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL path parameters
    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({ success: false, message: "Property not found" });
    }

    const propertyListingCategory = property.propertyListingCategory; // Retrieve the property listing category from the property

    // Query the database to find related products based on the property listing category
    const relatedProducts = await Property.find({
      propertyListingCategory: propertyListingCategory, // Filter by the same property listing category
      _id: { $ne: id } // Exclude the current property itself
    }).limit(5); // Limiting to 5 related products for example

    res.json({ success: true, relatedProducts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


