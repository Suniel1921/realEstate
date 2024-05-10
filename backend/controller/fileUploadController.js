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
    return await cloudinary.uploader.upload(file.tempFilePath, options);
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

        console.log("categoryId:", categoryId);
        console.log("categoryPurposeId:", categoryPurposeId);

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
