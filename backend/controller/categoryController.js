const categoryModel = require("../model/categoryModel");


exports.createCategory = async (req, res)=>{
    try {
        const {categoryName} = req.body;
        //validation
        if(!categoryName){
            return res.status(400).json({success: false, message: "Category Name is required"});
        }
       

        //check category name is already exit or not in db
        const categoryExit = await categoryModel.findOne({categoryName});
        if(categoryExit){
            return res.status(400).json({success : false, message : "category Alrady Exit"});

        }

        //create new category
        const newCategory = await categoryModel.create({categoryName});
        return res.status(201).json({success : true, message : "Category Created", newCategory});

        
    } catch (error) {
        return res.status(500).send({success: false, message : 'internal server error'});
        
    }
}


exports.getAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryModel.find({});
        if (!allCategory || allCategory.length === 0) {
            return res.status(404).json({ success: false, message: "No Category Found" });   
        }

        return res.status(200).json({ success: true, message: "Categories found", allCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { categoryName } = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, { categoryName }, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, message: "Category updated successfully", updatedCategory });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        return res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}
