import express from "express";
import catagoryControllers from "../app/controllers/CatagoryController.js";

const router = express.Router();

router.get("/:id", catagoryControllers.getById);

router.get("/", catagoryControllers.list);

router.delete("/:id", catagoryControllers.delete);

router.post("/", catagoryControllers.add);

router.put("/:id", catagoryControllers.updateById);

export default router;
