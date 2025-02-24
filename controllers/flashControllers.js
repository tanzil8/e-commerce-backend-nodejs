import FlashProduct from "../modules/flashModule.js";


const createFlashProduct = async (req, res) => {
    try {
        const body = req.body;
   
      body.image = req.file ? req.file.path : null


        const flashData = new FlashProduct(body);
    
        // Save the data to MongoDB
        await flashData.save();
    
        // Send a success response
        res.status(201).json({
          msg: "Flash product uploaded successfully",
          flashData: flashData,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error uploading flash product",
          error: error.message,
        });
      }
}
const getFlashProduct = async (req, res) => {
    try {
        const body = req.body;
   
        const flashData = await FlashProduct.find(body);
    
        // Send a success response
        res.status(201).json({
          msg: "Flash product get successfully",
          flashData: flashData,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error get flash product",
          error: error.message,
        });
      }
}
const getFlashProductByid = async (req, res) => {
    try {
        const {id} = req.params;
   
        const flashData = await FlashProduct.findOne({_id: id});
    
        // Send a success response
        res.status(201).json({
          msg: "Flash product get by id successfully",
          flashData: flashData,
        });
      } catch (error) {
        // Send an error response if something goes wrong
        res.status(500).json({
          msg: "Error get flash product by id",
          error: error.message,
        });
      }
}
const deleteFlashProductById = async (req, res) => {
    try {
      const { id } = req.params;  // Get ID from URL params (e.g., /:id)
  

  
      // Delete the flash product by ID
      const flashData = await FlashProduct.findByIdAndDelete({_id: id});
  
    
     
      // Send success response
      res.status(200).json({
        msg: "Flash product deleted successfully",
        flashData: flashData,
      });
    } catch (error) {
      // Send error response if something goes wrong
      res.status(500).json({
        msg: "Error deleting flash product",
        error: error.message,
      });
    }
  };
  
export {createFlashProduct, getFlashProduct, getFlashProductByid, deleteFlashProductById}