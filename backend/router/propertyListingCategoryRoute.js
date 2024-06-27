const express = require ("express");
const router = express.Router();
const controller = require ("../controller/propertyListingCategoryController");

router.post('/create-property-listing', controller.createPropertyListingCategory);
router.get('/all-property-listing', controller.getAllPropertyListing);
router.delete('/delete-property-listing/:id', controller.deletePropertyListing);


module.exports = router;