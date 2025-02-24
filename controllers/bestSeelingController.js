import bestSeeling from "../modules/bestSeelingModule.js"

const createBestseelingProduct = async (req , res) =>{
    try {
        const body = req.body

        body.image = req.file ? req.file.path : null

        const bestseelingProduct = new bestSeeling(body)

        await bestseelingProduct.save()

        res.status(202).json({
            msg : "bestseelingProduct uploading successful",
            bestseelingProduct: bestseelingProduct
        })

    } catch (error) {
        res.status(404).json({
            msg : "bestseelingProduct uploading error",
            error: error
        })
    }
}
const getBestseelingProduct = async (req , res) =>{
    try {
        const body = req.body

       
        const bestseelingProduct = await bestSeeling.find(body)

      

        res.status(202).json({
            msg : "bestseelingProduct get successful",
            bestseelingProduct: bestseelingProduct
        })

    } catch (error) {
        res.status(404).json({
            msg : "bestseelingProduct get error",
            error: error
        })
    }
}
const getBestseelingProductById = async (req , res) =>{
    try {
        const {id} = req.params

    

        const bestseelingProduct = await bestSeeling.findById({_id: id})

   

        res.status(202).json({
            msg : "bestseelingProduct get by id successful",
            bestseelingProduct: bestseelingProduct
        })

    } catch (error) {
        res.status(404).json({
            msg : "bestseelingProduct get by id error",
            error: error
        })
    }
}
const deleteBestseelingProductById = async (req , res) =>{
    try {
        const {id} = req.params

    

        const bestseelingProduct = await bestSeeling.findByIdAndDelete({_id: id})

   

        res.status(202).json({
            msg : "bestseelingProduct delete  successful",
            bestseelingProduct: bestseelingProduct
        })

    } catch (error) {
        res.status(404).json({
            msg : "bestseelingProduct delete  error",
            error: error
        })
    }
}

export {createBestseelingProduct, getBestseelingProduct, getBestseelingProductById ,deleteBestseelingProductById}