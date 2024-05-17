const express = require('express');
const router = express.Router();
const Model = require('../Models/ContactModel');

router.post('/add', (req, res) => {
    console.log(req.body);
// Storing data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
});

router.get('/getall', (req, res) => {
    Model.find({}) //empty brackets will give all the data
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});
// since mongodb automatically generates id so we can use it also
router.get('/getbyid/:id', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    }); 
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });   
});


router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });

});
module.exports = router;