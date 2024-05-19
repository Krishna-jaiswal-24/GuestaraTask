import express from 'express';
import {
	createItem,
	editItem,
	getAllItems,
	getItemByIdOrName,
	getItemsByCategory,
	getItemsBySubCategory,
	searchItemByName
} from '../controllers/itemController.js';

const router = express.Router();

router.post('/item', createItem);
router.get('/items', getAllItems);
router.get('/items/by-category/:id', getItemsByCategory);
router.get('/items/by-subcategory/:id', getItemsBySubCategory);
router.get('/item', getItemByIdOrName);
router.put('/item/:id', editItem);
router.get('/items/search', searchItemByName);


export default router;
