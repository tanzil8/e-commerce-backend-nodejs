import mongoose from 'mongoose';

// Define the schema for the flashsignup
const loginSchema = new mongoose.Schema({
 
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
const login = mongoose.model('login', loginSchema);

export default login;
