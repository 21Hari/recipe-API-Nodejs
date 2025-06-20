const getAllFactory = (ElementModel) => {
    return async (req, res) => {
        try {
            const element = await ElementModel.find()
            console.log(element)
            res.status(200).json({
                message: "Get Method is Called",
                status: "sucess",
                element
            })

        } catch (err) {
            res.status(400).json({
                message: err.message,
                status: "Failure"
            })
        }

    }
}

const getBasedIdFactory = (ElementModel) => {
    return async (req, res) => {
        try {
            const { id } = req.params
            console.log(id)
            const element = await ElementModel.findById(id)
            console.log(element)
            res.status(200).json({
                message: "Unique Id based get method called",
                status: "Success",
                element
            })
        } catch (err) {
            res.status(400).json({
                message: err.message,
                status: "Failure"
            })

        }

    }
}

const createFactory = (ElementModel) => {
    return async (req, res) => {
        try {
            const data = req.body
            console.log(data)
            const element = await ElementModel.create(data)
            console.log(element)
            res.status(200).json({
                message: "Post method is called",
                status: "Sucess",
                element
            })
        } catch (err) {
            res.status(400).json({
                message: err.message,
                status: "Failure"
            })
        }

    }
}

const updateFactory = (ElementModel) => {
    return async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body
            const element = await ElementModel.findByIdAndUpdate(id, data, { new: true })
            res.status(200).json({
                massage: "Put with unique Id method is called",
                status: "Success",
                element
            })
        } catch (err) {
            res.status(400).json({
                message: err.message,
                status: "Failure"
            })

        }




    }
}

const deleteBasedIdFactory = (ElementModel) => {
    return async (req, res) => {
        try {
            const { id } = req.params
            const element = await ElementModel.findByIdAndDelete(id)

            res.status(200).json({
                massage: "get with unique Id method is called",
                status: "Success",
                element
            })
        } catch (err) {
            res.status(400).json({
                message: err.message,
                status: "Failure"
            })

        }

    }
}

module.exports = {
    getAllFactory,
    getBasedIdFactory,
    createFactory,
    updateFactory,
    deleteBasedIdFactory
}