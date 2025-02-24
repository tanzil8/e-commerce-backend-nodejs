import mongoose from 'mongoose';

// Define the schema for the flashsignup
const signupSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Create the model for flashsignup using the schema
const signup = mongoose.model('signup', signupSchema);

export default signup;
