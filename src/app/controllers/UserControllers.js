import User from "../models/user.js";

class UserControllers {
    // [GET] /users/list
    getList(req, res) {
        User.find({})
            .then((users) => {
                // if (!users.length)
                //     res.status(400).send("Users Collection is empty");
                // else {
                //     res.status(200).json(users);
                // }
                res.status(200).json(users);
            })
            .catch((err) => res.status(500).json(err));
    }

    // [POST] /users/register
    register(req, res) {
        const newUser = new User(req.body);
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
}

export default new UserControllers();
