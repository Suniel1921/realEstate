const fs = require('fs');
const categoryModel = require("../model/categoryModel");
const categoryPurposeModel = require("../model/categoryPurposeModel");
const fileUploadModel = require("../model/fileUploadModel");
const cloudinary = require("cloudinary").v2;

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



// exports.imageUpload = async (req, res) => {
//     try {
//         const { heading, price, address, phone } = req.body;
//         const files = req.files && req.files.images ? req.files.images : null;

//         if (!files || !Array.isArray(files)) {
//             return res.status(400).json({ success: false, message: "No files uploaded" });
//         }

//         const fileUploadPromises = files.map(async file => {
//             const fileType = file.name.split('.').pop().toLowerCase();
//             if (!(await isFileSupported(fileType))) {
//                 return res.status(400).json({ success: false, message: 'File format is not supported' });
//             }
//             const response = await uploadFileToCloudinary(file, 'userImages', 90);
//             return response.secure_url;
//         });

//         const uploadedImages = await Promise.all(fileUploadPromises);

//         const fileData = await fileUploadModel.create({
//             images: uploadedImages,
//             heading,
//             price,
//             address,
//             phone
//         });

//         return res.status(201).json({ success: true, message: 'User created successfully', fileData });
//     } catch (error) {
//         console.error("Error while uploading files:", error);
//         return res.status(500).json({ success: false, message: `Error while uploading files: ${error.message}` });
//     }
// };





exports.imageUpload = async (req, res) => {
    try {
        const { heading, price, address, phone, categoryId, categoryPurposeId } = req.body;
        const files = req.files && req.files.images ? req.files.images : null;

        if (!files || !Array.isArray(files)) {
            return res.status(400).json({ success: false, message: "No files uploaded" });
        }

        const fileUploadPromises = files.map(async file => {
            const fileType = file.name.split('.').pop().toLowerCase();
            if (!(await isFileSupported(fileType))) {
                return res.status(400).json({ success: false, message: 'File format is not supported' });
            }
            const response = await uploadFileToCloudinary(file, 'userImages', 90);
            return response.secure_url;
        });

        const uploadedImages = await Promise.all(fileUploadPromises);

        // Find category and category purpose documents
        const category = await categoryModel.findById(categoryId);
        const categoryPurpose = await categoryPurposeModel.findById(categoryPurposeId);

        console.log("Category:", category);
        console.log("Category Purpose:", categoryPurpose);

        if (!category || !categoryPurpose) {
            return res.status(404).json({ success: false, message: "Category or Category Purpose not found" });
        }

        const fileData = await fileUploadModel.create({
            images: uploadedImages,
            heading,
            price,
            address,
            phone,
            category: category._id,
            categoryPurpose: categoryPurpose._id
        });

        return res.status(201).json({ success: true, message: 'User created successfully', fileData });
    } catch (error) {
        console.error("Error while uploading files:", error);
        return res.status(500).json({ success: false, message: `Error while uploading files: ${error.message}` });
    }
};



exports.totalFlat = async (req, res) => {
    try {
        const flatCategoryIds = await fileUploadModel.distinct('category', { /* add query condition if necessary */ });
        const totalFlat = await fileUploadModel.countDocuments({ category: { $in: flatCategoryIds } });
        return res.status(200).json({ success: true, totalFlat });
    } catch (error) {
        console.error("Error while counting flats:", error);
        return res.status(500).json({ success: false, message: "Error while counting flats" });
    }
};

exports.totalLand = async (req, res) => {
    try {
        const landCategoryIds = await fileUploadModel.distinct('category', { /* add query condition if necessary */ });
        const totalLand = await fileUploadModel.countDocuments({ category: { $in: landCategoryIds } });
        return res.status(200).json({ success: true, totalLand });
    } catch (error) {
        console.error("Error while counting land:", error);
        return res.status(500).json({ success: false, message: "Error while counting land" });
    }
};





// get all data
exports.getAllData = async (req, res) => {
    try {
        const allData = await fileUploadModel.find({})
            .populate('category').populate('categoryPurpose');
        if (allData.length === 0) {
            return res.status(400).json({ success: false, message: "No data found" });
        }
        return res.status(200).json({ success: true, message: "All Data found", allData });
    } catch (error) {
        return res.status(500).json({ success: false, message: `Internal Server Error ${error}` });
    }
};



//get single data
exports.getSingleData = async (req, res) => {
    try {
        const { id } = req.params;
        const singleData = await fileUploadModel.findOne({ _id: id });

        if (!singleData) {
            return res.status(404).json({ success: false, message: "Single data not found" });
        }

        return res.status(200).json({ success: true, message: "Single data found", singleData });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};





exports.updateProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const { heading, price, address, phone, categoryId, categoryPurposeId } = req.body;

        // Find the property by ID
        const property = await fileUploadModel.findById(propertyId);

        if (!property) {
            return res.status(404).json({ success: false, message: "Property not found" });
        }

        // Update property fields
        if (heading) property.heading = heading;
        if (price) property.price = price;
        if (address) property.address = address;
        if (phone) property.phone = phone;
        if (categoryId) property.category = categoryId;
        if (categoryPurposeId) property.categoryPurpose = categoryPurposeId;

        // Save the updated property
        await property.save();

        return res.status(200).json({ success: true, message: 'Property updated successfully', property });
    } catch (error) {
        console.error("Error while updating property:", error);
        return res.status(500).json({ success: false, message: `Error while updating property: ${error.message}` });
    }
};



//delete property

exports.deleteProperty = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const property = await fileUploadModel.findByIdAndDelete(propertyId);

        if (!property) {
            return res.status(404).json({ success: false, message: "Property not found" });
        }

        return res.status(200).json({ success: true, message: 'Property deleted successfully' });
    } catch (error) {
        console.error("Error while deleting property:", error);
        return res.status(500).json({ success: false, message: `Error while deleting property: ${error.message}` });
    }
};









