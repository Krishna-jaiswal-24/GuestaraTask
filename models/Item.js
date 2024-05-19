import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	taxApplicability: {
		type: Boolean,
		default: false
	},
	tax: {
		type: Number,
		default: 0
	},
	baseAmount: {
		type: Number,
		required: true
	},
	discount: {
		type: Number,
		default: 0
	},
	totalAmount: {
		type: Number,
	},
	subCategory: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'SubCategory'
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	}
}, {timestamps: true});

// Pre-save hook to calculate total amount
itemSchema.pre('save', function (next) {
	this.totalAmount = this.baseAmount - this.discount;
	next();
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
