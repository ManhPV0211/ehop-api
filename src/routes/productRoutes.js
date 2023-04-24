import express from "express";
import productControllers from "../app/controllers/ProductControllers.js";

const router = express.Router();

router.get("/:id", productControllers.getById);

router.get("/", productControllers.listProducts);

router.post("/", productControllers.add);

export default router;
