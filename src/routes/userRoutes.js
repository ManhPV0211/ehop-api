import express from "express";
import userControllers from "../app/controllers/UserControllers.js";

const router = express.Router();

router.post("/login", userControllers.login);

router.post("/register", userControllers.register);

router.get("/", userControllers.getList);

export default router;
