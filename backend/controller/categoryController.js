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
            return res.status(200).send({success : false, message : "category Alrady Exit"});

        }

        //create new category
        const newCategory = await categoryModel.create({categoryName});
        return res.status(201).json({success : true, message : "Category Created", newCategory});

        
    } catch (error) {
        return res.status(500).send({success: false, message : 'internal server error'});
        
    }
}




//get all category purpose
exports.getAllCategory = async (req, res) => {
    try {
        const allCategory = await categoryModel.find({});
        if (!allCategory || allCategory.length === 0) {
            return res.status(404).json({ success: false, message: "No Category Purpose Found" });   
        }

        return res.status(200).json({ success: true, message: "Category purposes found", allCategory });
        
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
}



//update category purpose
exports.updateCategory = async (req, res)=>{
    try {
        const {id} = req.params;
        const {categoryName} = req.body;
        const updateCategory = await categoryModel.findByIdAndUpdate(id, { categoryName }, { new: true });
        return res.status(200).json({success: false, message : "category purpose updated successfully", updateCategory});
        
    } catch (error) {
        return res.status(500).json({success: false, message : 'internal server error'});
        
    }
}


//delete category purpose 
exports.deleteCategory = async (req ,res)=>{
    try {
        const {id} = req.params;
        const deleteCategory = await categoryModel.findByIdAndDelete(id);
        return res.status(200).json({success: false, message: "Category Purpose Deleted succssfully"});
        
    } catch (error) {
        return res.status(500).json({success: false, message : "internal server error"})
        
    }
}


