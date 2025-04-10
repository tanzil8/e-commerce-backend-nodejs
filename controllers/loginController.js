import Joi from "joi";
import jwt from "jsonwebtoken";
import 'dotenv/config';
import bcrypt from "bcryptjs";
import signup from "../modules/signupModule copy.js"

const loginJoi = Joi.object({
  password: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
});

const loginUser = async (req, res) => {
  const { error, value } = loginJoi.validate(req.body);
  console.log(error);
  
  console.log(value);

  if (error) {
    return res.status(400).json({ message: "Invalid credentials", details: error.details });
  }

  const existUser = await signup.findOne({ email: value.email }).lean();
  if (!existUser) {
    return res.status(401).json({ message: "User is not registered" });
  }

  const isPasswordValid = await bcrypt.compare(value.password, existUser.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  const payload = {
    id: existUser._id,
    email: existUser.email,
    name: existUser.name,
    role: existUser.role
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  return res.status(200).json({
    message: "Login successful",
    token,
    user: payload
  });
};

export { loginUser };
