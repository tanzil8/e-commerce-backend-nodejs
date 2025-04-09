import signup from "../modules/signupModule copy.js"
import Joi from "joi"
import bcrypt from "bcryptjs"


const signupJoi = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string().min(3)
    .max(30),
        

    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})



const createSignup = async (req, res) => {
const {error, value} = signupJoi.validate(req.body)

if (error) {
    return res.status(404).json({msg : "invalid credantial", details: error.details})
}

const existsUser = await signup.findOne({email: value.email})
if (existsUser) {
    return res.status(404).json({msg : "user already register"})
}

const hashPassword = await  bcrypt.hash(value.password, 10)

value.password = hashPassword


let newUser = new signup({...value})

await newUser.save()

res.status(201).json({
    msg: "user signup successful",
    newUser: newUser,
  });


}

export {createSignup}