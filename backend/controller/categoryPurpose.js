const categoryPurposeModel = require("../model/categoryPurposeModel");

exports.createCategoryPurpose = async (req, res)=>{
    try {
        const {name} = req.body;
        //validation 
        if (!name){
            return res.status(400).json({success: false, message : "Category Name is required"});
        }
        //check categorypurpose already exit or not
        const categoryExit = await categoryPurposeModel.findOne({name});
        if(categoryExit){
            return res.status(200).json({success: false, message : "Category alrady Exit"});
        }

        //create a new category
        const newCategory = await categoryPurposeModel.create({name});
        return res.status(201).json({success: true, mesage : "Category Created", newCategory});
        
    } catch (error) {
        return res.status(500).json({success: false, message : 'internal server error'})
        
    }

}



//get all category purpose

exports.getAllCategoryPurpose = async (req, res)=>{
    try {
        const allCategoryPurpose = await categoryPurposeModel.find({});
        if(!allCategoryPurpose){
            return res.status(404).json({success: false, message : "No Category Purpose Found"});   
        }

        return res.status(200).json({success: true, message: "Category purpose found", allCategoryPurpose});

        
    } catch (error) {
        return res.status(500).json({success: false, message : 'internal server error'})
        
    }
}


//update category purpose
exports.updateCategoryPurpose = async (req, res)=>{
    try {
        const {id} = req.params;
        const {name} = req.body;
        const updateCategory = await categoryPurposeModel.findByIdAndUpdate(id, { name }, { new: true });
        return res.status(200).json({success: false, message : "category purpose updated successfully", updateCategory});
        
    } catch (error) {
        return res.status(500).json({success: false, message : 'internal server error'});
        
    }
}


//delete category purpose 
exports.deleteCategoryPurpose = async (req ,res)=>{
    try {
        const {id} = req.params;
        const deleteCategory = await categoryPurposeModel.findByIdAndDelete(id);
        return res.status(200).json({success: false, message: "Category Purpose Deleted succssfully"});
        
    } catch (error) {
        return res.status(500).json({success: false, message : "internal server error"})
        
    }
}