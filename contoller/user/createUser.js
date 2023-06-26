const validator=require("validator");
const bcrypt = require('bcrypt');

const User = require('../../model/user');

exports.registrationform = async (req, res) => {
    try {
        const { name,DOB, mobile_no, email, password } = req.body;

        if (!(name && DOB && mobile_no && email && password)) {
            console.log("data required")
            throw new Error("all field required");
        }

        if (!name.trim()) {
            throw new Error("space is not required.fill up name.")
        }else if(!/^[a-zA-Z ]*$/.test(name)){
            throw new Error("name is not valid")
        }else if(!validator.isLength(name,{min:3 ,max:30})){
            throw new Error("validation min length 3 and max length 30")
        }

        if (!mobile_no.trim()) {
            throw new Error("space is not required.fill up mobile_no.")
        }else if(!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(mobile_no)){
            throw new Error("mobile_no is not valid")
        }else if(!validator.isLength(mobile_no,{max:10})){
            throw new Error("validation mobile_no max length 30")
        }
        
        if(!email.trim()){
            throw new Error("space is not required.fill up email.")
        }else if(!/^[a-z0-9]+(([._-]?[a-z0-9]+)+)?@[a-z]{2,5}.[[a-z]{2,5}]*$/.test(email)){
            throw new Error("email is a not valid.......")
        }

        if (!password.trim()) {
            throw new Error("space is not required.fill up password.")
        }else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
            throw new Error("password is not valid..!! Please atleast one capital alphabet,one small alphabet,one numerical number and one special character")
        }else if(!validator.isLength(password,{min:6 ,max:30})){
            throw new Error("validation password min length 6 & max length 30")
        }

        const olduser= await User.findOne({email});
        if(olduser){
            throw new Error("user already exist.")
        }

        encrytedPassword = await bcrypt.hash(password, 8)

        //create user in database
        const user = await User.create({
            name,
            DOB,
            mobile_no,
            email: email.toLowerCase(),

            
            password: encrytedPassword,
        });

        const token = await user.generateAuthToken()
        // user.token = token;
        console.log("successfully ragister", user, token)
        res.status(201).send({ user, token });
    } catch (error) {
        console.log("error", error);
        res.status(400).send({ error: error.message });
    }
}

