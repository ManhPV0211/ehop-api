import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    richDescription: { type: String, default: "" },
    image: { type: String, default: "" },
    images: [{ type: String }],
    brand: { type: String, default: "" },
    price: { type: Number, default: 0 },
    catagory: { type: mongoose.Schema.Types.ObjectId, ref: "Catagory" },
    countInStock: { type: Number, require: true, min: 0, max: 255 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    dateCreate: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
