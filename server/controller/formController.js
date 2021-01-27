const Data = require('./../models/formModel');

exports.getAllUserData = async (req, res) => {
    try {
        const formData = await Data.find();
        res.status(200).json({
            formData,
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}
exports.createUserData = async (req, res) => {
    try {
        const newData = await Data.create(req.body);

        res.status(201).json({
            newData,
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error
        })
    }
}
/* exports.deleteData = async (req, res) => {
    try {
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
exports.updateData = async (req, res) => {
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