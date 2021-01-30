const Data = require('./../models/formModel');

exports.getAllUserData = async (req, res) => {
    try {
        const formData = await Data.find();
        res.status(200).json(formData)
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}
exports.createUserData = async (req, res) => {
    const newformData = new Data(req.body)
    try {
        await newformData.save();

        res.status(201).json(newformData)
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}
exports.deleteData = async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null,
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}
/* exports.updateData = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
} */