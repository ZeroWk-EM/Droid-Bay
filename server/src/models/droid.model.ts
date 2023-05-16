import { IDroid } from "../interface/droid.interface";
import { Schema, model } from "mongoose";

const ProductSchema = new Schema<IDroid>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  status: { type: String, required: true },
  price: {
    type: Number,
    enum: {
      values: ["New", "Used"],
      message:
        "{VALUE} is not supported, see the documentation for see acceptable values",
    },
    required: true,
  },
  auction: {
    type: {
      minPrice: { type: Number, required: true },
      startAuct: {type:Date, required: true},
      endAuct: {type:Date,required:true}
    },
    require: false,
  },
  shipping_price: { type: Number, required: true },
  seller: { type: String, required: true },
});

export default model<IDroid>("droids", ProductSchema);
