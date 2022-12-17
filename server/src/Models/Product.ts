import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const ProductSchema = new Schema({
  price: {
    type: Number,
    required: [true, "every item must have a price"],
    min: 0
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product