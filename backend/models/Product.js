const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  stock: { type: Number, default: 0 },
  image: { type: String }, // Base64-encoded image string
});

module.exports = mongoose.model('Product', productSchema);