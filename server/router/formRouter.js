const express = require('express');
const formController = require('./../controller/formController');
const router = express.Router();

router.route('/')
    .get(formController.getAllUserData)
    .post(formController.createUserData);

router.route('/:id')
    .get(formController.getData)
    .patch(formController.updateData)
    .delete(formController.deleteData);

module.exports = router;