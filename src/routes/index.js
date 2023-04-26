import productRoutes from "./productRoutes.js";
import catagoryRoutes from "./catagoryRoutes.js";
import userRouters from "./userRoutes.js";

import authMiddleware from "../app/middlewares/authMiddleware.js";

function initWebRoutes(app) {
    app.use("/users", userRouters);

    app.use(authMiddleware);

    app.use("/products", productRoutes);

    app.use("/catagory", catagoryRoutes);
}

export default initWebRoutes;
