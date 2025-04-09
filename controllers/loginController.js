import { login } from "../modules/login.js";
import Joi from "joi";
import bcrypt from "bcryptjs";

const loginJoi = Joi.object({
    password: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
});

const loginUser = async (req, res) => {
    const { error, value } = loginJoi.validate(req.body);

    if (error) {
        return res.status(400).json({ msg: "Invalid credentials", details: error.details });
    }

    const existsUser = await login.findOne({ email: value.email });
    if (!existsUser) {
        return res.status(404).json({ msg: "User not found. Please create an account." });
    }

    // Compare provided password with the stored hash
    const isMatch = await bcrypt.compare(value.password, existsUser.password);
    if (!isMatch) {
        return res.status(401).json({ msg: "Incorrect password" });
    }

    res.status(200).json({
        msg: "User login successful",
        user: existsUser,
    });
};

export { loginUser };
