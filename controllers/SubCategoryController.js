import SubCategory from "../models/Subcategory.js";

// Create a sub-category
export const createSubCategory = async (req, res) => {
	const {name, image, description, taxApplicability, tax, category} = req.body;
	try {
		const subCategory = new SubCategory({name, image, description, taxApplicability, tax, category});
		await subCategory.save();
		res.status(201).json(subCategory);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Get all sub-categories
export const getAllSubCategories = async (req, res) => {
	try {
		const subCategories = await SubCategory.find();
		res.status(200).json(subCategories);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Get all sub-categories under a category
export const getSubCategoriesByCategory = async (req, res) => {
	const {categoryId} = req.params;
	try {
		const subCategories = await SubCategory.find({category: categoryId});
		res.status(200).json(subCategories);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Get sub-category by name or ID
export const getSubCategoryByIdOrName = async (req, res) => {
	const {id, name} = req.query;
	try {
		const subCategory = id
			? await SubCategory.findById(id)
			: await SubCategory.findOne({name});
		if (!subCategory) {
			return res.status(404).json({message: 'SubCategory not found'});
		}
		res.status(200).json(subCategory);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

// Edit sub-category attributes
export const editSubCategory = async (req, res) => {
	const {id} = req.params;
	const updates = req.body;
	try {
		const subCategory = await SubCategory.findByIdAndUpdate(id, updates, {new: true});
		if (!subCategory) {
			return res.status(404).json({message: 'SubCategory not found'});
		}
		res.status(200).json(subCategory);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};