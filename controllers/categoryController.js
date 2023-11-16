const Category = require('../models/Category.js');

exports.getCategories = async (req, res) => {
    const searchedCategory = await Category.find();
    res.status(200).send({ searchedCategory });
};

exports.getCategoryById = async (req, res) => {
    const categoryID = req.params.id;
    const searchedCategory = await Category.findById(categoryID);
    res.status(200).send({ searchedCategory });
};
