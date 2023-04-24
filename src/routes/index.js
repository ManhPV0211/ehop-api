import productRoutes from "./productRoutes.js";
import catagoryRoutes from "./catagoryRoutes.js";

function initWebRoutes(app) {
    app.use("/products", productRoutes);

    app.use("/catagory", catagoryRoutes);
}

export default initWebRoutes;
