import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const CartSchema = new Schema({
  title: String,
});

const CartModel = mongoose.model('Cart', CartSchema);

export default CartModel