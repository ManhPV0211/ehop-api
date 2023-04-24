import mongoose from "mongoose";

export async function connect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1/eshop_database_dev");
        console.log("Connected to DB");
    } catch {
        console.log("Connect DB False");
    }
}
