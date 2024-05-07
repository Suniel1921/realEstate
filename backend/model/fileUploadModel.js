// const mongoose = require("mongoose");

// const fileUploadSchema = new mongoose.Schema({
//     image: {
//         type: String,
//     },
//     heading: {
//         type: String,
//         required: [true, 'Heading is required'],
//     },
//     price: {
//         type: Number,
//         required: [true, "Price is required"],
//     },
//     address: {
//         type: String,
//         required: [true, "Address is required"],
//     },
//     phone: {
//         type: Number,
//         required: [true, "Phone is required"],
//     }
// });

// const fileUploadModel = mongoose.model('fileUploadModel', fileUploadSchema);

// module.exports = fileUploadModel;






const mongoose = require("mongoose");

const fileUploadSchema = new mongoose.Schema({
    images: [{
        type: String,
    }],
    heading: {
        type: String,
        required: [true, 'Heading is required'],
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"],
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"],
    }
});

const fileUploadModel = mongoose.model('fileUploadModel', fileUploadSchema);

module.exports = fileUploadModel;
