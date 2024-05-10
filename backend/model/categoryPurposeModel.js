const mongoose = require("mongoose");

const categoryPurposeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    }
}, { timestamps: true });

const categoryPurposeModel = mongoose.model('CategoryPurposeModel', categoryPurposeSchema);
module.exports = categoryPurposeModel;
