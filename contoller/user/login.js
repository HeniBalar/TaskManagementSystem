const bcrypt = require('bcrypt');
const User = require('../../model/user');

exports.loginform = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            console.log("all input required")
            res.status(400).send("all input required")
        }

        const user = await User.findOne({ email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = await user.generateAuthToken()
            res.status(201).send({ user, token });
        } else {
            throw new Error("Invalid UserName & Password")
        }

    } catch (error) {
        console.log("err...", error)
        res.status(201).send({ error: error.message })
    }
}

