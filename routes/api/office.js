const express = require('express');
var office = express.Router();


const mongoose = require('mongoose');
//const mongodbConnect = require('../../models/db');
const Office = mongoose.model('Office');


office.get('/list', async (req, res) => {
    const offices = await Office.find({});
    res.json(offices);
})


office.post('/create', async (req, res) => { 
    console.log("Post Request served" + req.body.fdr_company);
    // await Feeder.findOne({ fdr_code: req.body.fdr_code }).then((docs) => {
        
    // })
    const feeder_entry = new Office({
        ofc_code: req.body.ofc_code,
        ofc_name: req.body.ofc_name,
        ofc_address: req.body.ofc_address,
        ofc_email: req.body.ofc_email,
        ofc_phone: req.body.ofc_phone,
        ofc_type: req.body.ofc_type
    });
    await feeder_entry.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    });
});

module.exports = office;