import login from "../modules/login"
import Joi from "joi"
import bcrypt from "bcryptjs"


const loginJoi = Joi.object({
  

    password: Joi.string().min(3)
    .max(30),
        

    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})



const login = async (req, res) => {
const {error, value} = loginJoi.validate(req.body)

if (error) {
    return res.status(404).json({msg : "invalid credantial", details: error.details})
}

const existsUser = await log.findOne({email: value.email})
if (!existsUser) {
    return res.status(404).json({msg : "Plzz create user"})
}




let newUser = new signup({...value})

await newUser.save()

res.status(201).json({
    msg: "user login successful",
    newUser: newUser,
  });


}

export {login}