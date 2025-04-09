import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email : {type: String, unique: true, required: true},
    password : {type: String,  required: true},
    fullname : {type: String, },
    gender: {type: String, enum:["male", "female"]},
    city: {type: String},
    country: {type: String},
    dob: {type: String},
    isProfileCompleted: {type: Boolean}
    
},{timestamps: true})

// Create a model from the schema
const User = mongoose.model('Users', userSchema);

// Export the model
export default User;