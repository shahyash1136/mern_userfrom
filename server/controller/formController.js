const express = ('express');
const mongoose = ('mongoose');

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

exports.getData = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Data.findById(id);
        res.status(200).json(data);

    } catch (error) {
        res.status(404).json({
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
exports.updateData = async (req, res) => {
    const data = req.body;
    const id = req.params.id;
    try {
        // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        const updatedData = await Data.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        res.status(200).json(updatedData)
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        })
    }
}