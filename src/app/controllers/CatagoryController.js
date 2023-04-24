// import catagoryServices from "../services/catagoryServices.js"

import Catagory from "../models/catagory.js";

class CatagoryController {
    // [GET] /catagory
    list(req, res) {
        Catagory.find({})
            .then((catagory) => {
                if (catagory.length) {
                    res.status(200).json(catagory);
                } else {
                    res.status(404).json({
                        mesg: "Catagory is empty",
                    });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    }

    // [GET] /catagory/:id
    getById(req, res) {
        Catagory.findById(req.params.id)
            .then((catagory) => {
                if (!catagory) {
                    res.status(404).json({
                        mesg: "Catagory is not found",
                    });
                } else {
                    res.status(200).json(catagory);
                }
            })
            .catch((err) => res.status(500).json({ err }));
    }

    // [POST] /catagory
    add(req, res) {
        const newCatagory = new Catagory(req.body);
        newCatagory
            .save()
            .then((catagory) => {
                res.status(201).json({
                    message: "Success add new catagory to db",
                    catagory,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message: "False to add catagory to db",
                    err,
                });
            });
    }

    // [DELETE] /catagory/:id
    delete(req, res) {
        Catagory.findByIdAndDelete(req.params.id)
            .then((catagory) => {
                if (catagory) {
                    res.status(200).json({
                        mesg: "The catagory is delete success",
                        success: true,
                    });
                } else {
                    res.status(404).json({
                        mesg: "Catagory not found to delete",
                        success: false,
                    });
                }
            })
            .catch((err) => {
                res.status(400).json({
                    mesg: "Delete false",
                    err,
                });
            });
    }

    updateById(req, res) {
        Catagory.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((catagory) => {
                if (!catagory) {
                    res.status(404).json({
                        mesg: "Catagory is not found to update",
                    });
                } else {
                    res.status(200).json({
                        mesg: "Catagory updated success",
                        catagory,
                    });
                }
            })
            .catch((err) => res.status(500).json(err));
    }
}

export default new CatagoryController();
