import express from "express";
import userControllers from "../app/controllers/UserControllers.js";

const router = express.Router();

router.post("/register", userControllers.register);

router.get("/list", userControllers.getList);

export default router;
