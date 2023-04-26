import User from "../models/user.js";
import bcrypt from "bcryptjs";

class UserControllers {
    // [GET] /users
    getList(req, res) {
        User.find({})
            .select("-passwordHash")
            .then((users) => {
                if (!users.length)
                    return res.status(400).send("User Collection is empty");
                res.status(200).json(users);
            })
            .catch((err) => res.json(err));
    }

    // [POST] /users/register
    register(req, res) {
        const newUser = new User(req.body);
        newUser.passwordHash = bcrypt.hashSync(req.body.password, 10);
        newUser
            .save()
            .then((user) => {
                if (!user)
                    return res.status(400).send("User cannot be created");
                res.status(201).json({
                    mesg: "User register success",
                    user,
                });
            })
            .catch((err) => res.status(500).json(err));
    }

    // [POST] /users/login
    login(req, res) {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (
                    user &&
                    bcrypt.compareSync(req.body.password, user.passwordHash)
                ) {
                    res.status(200).json({
                        mesg: "Login is success",
                        user,
                    });
                } else {
                    res.status(400).send("Email or password is wrong");
                }
            })
            .catch((err) => res.status(500).json(err));
    }
}

export default new UserControllers();
