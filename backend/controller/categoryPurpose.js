const categoryPurposeModel = require("../model/categoryPurposeModel");

exports.createCategoryPurpose = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Validation 
      if (!name || typeof name !== "string") {
        return res.status(400).json({ success: false, message: "Invalid Category Name" });
      }
      // You can add more validation for the length or other constraints of the name
  
      // Check if category purpose already exists
      const categoryExist = await categoryPurposeModel.findOne({ name });
      if (categoryExist) {
        return res.status(409).json({ success: false, message: "Category already exist" });
      }
  
      // Create a new category
      const newCategory = await categoryPurposeModel.create({ name });
      return res.status(201).json({ success: true, message: "Category Created", newCategory });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
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
exports.updateCategoryPurpose = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updateCategory = await categoryPurposeModel.findByIdAndUpdate(id, { name }, { new: true });
        if (!updateCategory) {
            return res.status(404).json({ success: false, message: "Category purpose not found" });
        }
        return res.status(200).json({ success: true, message: "Category purpose updated successfully", updateCategory });
    } catch (error) {
        console.error("Error updating category purpose:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

//delete category purpose 
exports.deleteCategoryPurpose = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteCategory = await categoryPurposeModel.findByIdAndDelete(id);
        if (!deleteCategory) {
            return res.status(404).json({ success: false, message: "Category purpose not found" });
        }
        return res.status(200).json({ success: true, message: "Category purpose deleted successfully" });
    } catch (error) {
        console.error("Error deleting category purpose:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}
