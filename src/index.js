// Library
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// My Configs
import initWebRoutes from "./routes/index.js";
import * as db from "./configs/dbConfig.js";

// Loads environment variables
dotenv.config();

const PORT = process.env.PORT;
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, async () => {
    await db.connect();

    initWebRoutes(app);

    console.log(`Server is running on http://localhost:${PORT}`);
});
