// const fileUploadModel = require("../model/fileUploadModel");
// const cloudinary = require ("cloudinary").v2

// async function isFileSupported(type) {
//     const supportedTypes = ['jpg', 'jpeg', 'png'];
//     return supportedTypes.includes(type);
// }

// async function uploadFileToCloudinary(file, folder, quality) {
//     const options = { folder, resource_type: 'auto' };
//     if (quality) {
//         options.quality = quality;
//     }
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
// }



// exports.imageUpload = async (req, res) => {
//     try {
//       const { heading, price, address, phone} = req.body;
//       const file = req.files && req.files.image ? req.files.image : null;
  
//       if (!file) {
//         return res.status(400).json({ success: false, message: "No file uploaded" });
//       }
  
//       const fileType = file.name.split('.').pop().toLowerCase();
//       if (!(await isFileSupported(fileType))) {
//         return res.status(400).json({ success: false, message: 'File format is not supported' });
//       }
  
//       const response = await uploadFileToCloudinary(file, 'userImage', 30);
//       if (!response.secure_url) {
//         return res.status(500).json({ success: false, message: "Failed to upload image" });
//       }
  
//       const fileData = await fileUploadModel.create({ heading, price, address, phone, image: response.secure_url });
  
//       return res.status(201).json({ success: true, message: 'User created successfully', fileData });
//     } catch (error) {
//       console.error("Error while uploading file:", error);
//       return res.status(500).json({ success: false, message: `Error while uploading file: ${error.message}` });
//     }
//   };




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

exports.imageUpload = async (req, res) => {
    try {
        const { heading, price, address, phone } = req.body;
        const files = req.files && req.files.images ? req.files.images : null;

        if (!files || !Array.isArray(files)) {
            return res.status(400).json({ success: false, message: "No files uploaded" });
        }

        const fileUploadPromises = files.map(async file => {
            const fileType = file.name.split('.').pop().toLowerCase();
            if (!(await isFileSupported(fileType))) {
                return res.status(400).json({ success: false, message: 'File format is not supported' });
            }
            const response = await uploadFileToCloudinary(file, 'userImages', 30);
            return response.secure_url;
        });

        const uploadedImages = await Promise.all(fileUploadPromises);

        const fileData = await fileUploadModel.create({
            images: uploadedImages,
            heading,
            price,
            address,
            phone
        });

        return res.status(201).json({ success: true, message: 'User created successfully', fileData });
    } catch (error) {
        console.error("Error while uploading files:", error);
        return res.status(500).json({ success: false, message: `Error while uploading files: ${error.message}` });
    }
};




//get all data
exports.getAllData = async (req, res) => {
    try {
        const allData = await fileUploadModel.find({});
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
