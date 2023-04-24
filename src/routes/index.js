import productRoutes from "./productRoutes.js";
import catagoryRoutes from "./catagoryRoutes.js";
import userRouters from "./userRoutes.js";

function initWebRoutes(app) {
    app.use("/users", userRouters);

    app.use("/products", productRoutes);

    app.use("/catagory", catagoryRoutes);
}

export default initWebRoutes;
