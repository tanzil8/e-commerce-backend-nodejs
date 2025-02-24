import product from "../modules/productModule.js";

const createproduct = async (req, res) => {
  try {
    const body = req.body;

    body.image = req.file ? req.file.path : null;

    const Data = new product(body);

    // Save the data to MongoDB
    await Data.save();

    // Send a success response
    res.status(201).json({
      msg: " product uploaded successfully",
      Data: Data,
    });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({
      msg: "Error uploading  product",
      error: error.message,
    });
  }
};
const getproduct = async (req, res) => {
  try {
    let { page, limit, search } = req.query;

    // Handle pagination and default values
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;
    const skip = (page - 1) * limit;

    let searchCriteria = {};

    // Check if search query exists and update search criteria
    if (search) {
      searchCriteria = {
        name: {
          $regex: search,
          $options: "i", // case-insensitive search
        },
      };
    }

    // Get the total number of matching products for pagination
    const totalProducts = await product.countDocuments(searchCriteria);

    // Fetch the data with pagination and sorting
    const data = await product
      .find(searchCriteria)
      .skip(skip)
      .limit(limit)
      .sort({ updatedAt: -1 }); // Assuming sorting by `updatedAt` field

    // Send a success response with pagination details
    res.status(200).json({
      msg: "Product fetched successfully",
      data: data,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(totalProducts / limit),
        totalProducts: totalProducts,
      },
    });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({
      msg: "Error fetching products",
      error: error.message,
    });
  }
};

const getproductByid = async (req, res) => {
  try {
    const { id } = req.params;

    const Data = await product.findOne({ _id: id });

    // Send a success response
    res.status(201).json({
      msg: " product get by id successfully",
      Data: Data,
    });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({
      msg: "Error get  product by id",
      error: error.message,
    });
  }
};
const deleteproductById = async (req, res) => {
  try {
    const { id } = req.params; // Get ID from URL params (e.g., /:id)

    // Delete the  product by ID
    const Data = await product.findByIdAndDelete({ _id: id });

    // Send success response
    res.status(200).json({
      msg: " product deleted successfully",
      Data: Data,
    });
  } catch (error) {
    // Send error response if something goes wrong
    res.status(500).json({
      msg: "Error deleting  product",
      error: error.message,
    });
  }
};

export { createproduct, getproduct, getproductByid, deleteproductById };
