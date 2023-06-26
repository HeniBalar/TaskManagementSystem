const User = require("../../model/user");

exports.updateUser = async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.user._id)
        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.DOB = req.body.DOB || user.DOB;
            user.mobile_no = req.body.mobile_no || user.mobile_no;

            const updatedUser = await user.save();
            res.json({
                user: "user updated succussfully",
                updatedUser
            })
        } else {
            res.status(401).send("user not found")
        }

    } catch (e) {
        res.status(500).send(e)
    }

    //------By ID-----
    //  const _id = req.params.id
    //  try {
    //     const user = await User.findById(_id)
    //     if (user) {
    //         user.name = req.body.name || user.name;
    //         user.email = req.body.email || user.email;
    //         user.DOB = req.body.DOB || user.DOB;
    //         user.mobile_no = req.body.mobile_no || user.mobile_no;

    //         const updatedUser = await user.save();
    //         res.json({
    //             user: "user updated succussfully",
    //             updatedUser
    //         })
    //     } else {
    //         res.status(401).send("user not found")
    //     }

    // } catch (e) {
    //     res.status(500).send(e)
    // }


}
