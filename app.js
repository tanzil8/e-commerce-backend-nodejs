import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'; // Loads environment variables from a .env file


const app = express();
const port = process.env.PORT || 3000; // Use port from environment or default to 3000

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection setup
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Use the FlashRoute for any requests to /api/flashproducts



// Define a simple route for root
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Error handling for unsupported routes (optional)
app.use((req, res) => {
  res.status(404).send('Route not found!');
});

// Start server 
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
