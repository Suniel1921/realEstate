const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Category Name is required'],
    }
}, { timestamps: true });

const categoryModel = mongoose.model('CategoryModel', categorySchema);
module.exports = categoryModel;
