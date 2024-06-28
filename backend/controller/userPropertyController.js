
const userPropertyModel = require("../model/userPropertModel");

exports.userRegisterProperty = async (req, res) => {
  try {
    const property = new userPropertyModel(req.body);
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
