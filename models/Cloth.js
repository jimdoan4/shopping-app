const mongoose = require('../db/connections.js');
const Schema = mongoose.Schema;

const ClothSchema = new Schema({
	name: String,
	size: Number,
	image: String,
	price: Number,
	description: String,
	category: String
});

module.exports = mongoose.model('Cloth', ClothSchema);