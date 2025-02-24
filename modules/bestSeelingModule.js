import mongoose from 'mongoose';

// Define the schema for the flashProduct
const bestSeelingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Adds createdAt and updatedAt fields automatically
});

// Create the model for flashProduct using the schema
const bestSeeling = mongoose.model('bestSeeling', bestSeelingSchema);

export default bestSeeling;
