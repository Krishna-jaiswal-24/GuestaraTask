import express from 'express';
import {
	createCategory,
	editCategory,
	getAllCategories,
	getCategoryByIdOrName
} from '../controllers/CategoryController.js';

const router = express.Router();

router.post('/category', createCategory);
router.get('/categories', getAllCategories);
router.get('/category', getCategoryByIdOrName);
router.put('/category/:id', editCategory);

export default router;
//okay all routes are working fine during the testing