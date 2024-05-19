import express from 'express';
import {
	createSubCategory,
	editSubCategory,
	getAllSubCategories,
	getSubCategoriesByCategory,
	getSubCategoryByIdOrName
} from '../controllers/subCategoryController.js';

const router = express.Router();

router.post('/subcategory', createSubCategory);
router.get('/subcategories', getAllSubCategories);
router.get('/subcategories/:categoryId', getSubCategoriesByCategory);
router.get('/subcategory', getSubCategoryByIdOrName);
router.put('/subcategory/:id', editSubCategory);

export default router;

//all apis are working fine here too