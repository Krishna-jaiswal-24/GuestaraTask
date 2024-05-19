import Category from "../models/Category.js";

// Create category
export const createCategory = async (req, res) => {
	const {name, image, description, taxApplicability, tax, taxType} = req.body;
	try {
		const category = new Category({name, image, description, taxApplicability, tax, taxType});
		await category.save();
		res.status(201).json(category);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Get all categories
export const getAllCategories = async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Get category by name or ID
export const getCategoryByIdOrName = async (req, res) => {
	const {id, name} = req.query;
	try {
		const category = id ? await Category.findById(id) : await Category.findOne({name});
		if (!category) {
			return res.status(404).json({message: 'Category not found'});
		}
		res.status(200).json(category);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};


// Edit category attributes
export const editCategory = async (req, res) => {
	const {id} = req.params;
	const updates = req.body;
	try {
		const category = await Category.findByIdAndUpdate(id, updates, {new: true});
		if (!category) {
			return res.status(404).json({message: 'Category not found'});
		}
		res.status(200).json(category);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};
