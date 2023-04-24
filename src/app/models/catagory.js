import mongoose from "mongoose";

const Schema = mongoose.Schema;

const catagorySchema = new Schema({
    name: { type: String, require: true },
    color: { type: String },
    icon: { type: String },
});

export default mongoose.model("Catagory", catagorySchema);
