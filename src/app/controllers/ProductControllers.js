import Product from "../models/product.js";
import Catagory from "../models/catagory.js";

class ProductControllers {
    // [GET] /products
    listProducts(req, res) {
        Product.find({})
            .populate("catagory")
            // .select("name image -_id")
            .then((products) => {
                res.status(200).json(products);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    // [GET] /produts/:id
    getById(req, res) {
        Product.findById(req.params.id)
            .populate("catagory")
            .then((product) => {
                if (!product)
                    return res.status(404).send("Product is not found");
                res.status(200).json(product);
            })
            .catch((err) => {
                res.status(400).send("Product ID is invalid");
            });
    }

    // [POST] /products
    async add(req, res) {
        const catagory = await Catagory.findById(req.body.catagory);
        if (!catagory) {
            return res.status(404).send("Catagory is not found");
        }

        const newProduct = new Product(req.body);
        newProduct
            .save()
            .then((product) => {
                res.status(201).json({
                    mesg: "Add new product success",
                    product,
                });
            })
            .catch((err) => res.status(500).send("Catagory invalid"));
    }

    //[PUT] /product/:id
    //[DELETE] /product/:id
}

export default new ProductControllers();
