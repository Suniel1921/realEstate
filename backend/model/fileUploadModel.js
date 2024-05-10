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
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryModel',
        required: true,
    },
    categoryPurpose: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CategoryPurposeModel',
        required: true,
    }
});

const fileUploadModel = mongoose.model('FileUploadModel', fileUploadSchema);
module.exports = fileUploadModel;
