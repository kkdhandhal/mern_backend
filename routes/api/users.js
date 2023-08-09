const express = require('express');
var user = express.Router();


const mongoose = require('mongoose');
//const mongodbConnect = require('../../models/db');
const User = mongoose.model('User');


user.get('/list', async (req, res) => {
    const offices = await Office.find({});
    res.json(offices);
})

user.post('/create/', async (req, res) => { 
    //console.log("Post Request served" + req.body.fdr_company);
    //  await User.findOne({$and:[{ usr_name: req.body.usr_name },{ usr_pass: req.body.usr_pass }]}).then((docs) => {
    //    if (docs.length > 0) {
    //      res.send(200).json(docs);
    //    }
    //    else {
    //      res.send(500).json({"error":"Username or Password is wrong"});
    //    }
    //  })
    const user_entry = new User({
        usr_id: req.body.usr_id,
        usr_name: req.body.usr_name,
        usr_nameinit: req.body.usr_nameinit,
        usr_firstname: req.body.usr_firstname,
        usr_midname: req.body.usr_midname,
        usr_lastname: req.body.usr_lastname,
        usr_sdnloc: req.body.usr_sdnloc,
        usr_mobno: req.body.usr_mobno,
        usr_pass: req.body.usr_pass,
        usr_isact: req.body.usr_isact
    });
    await user_entry.save()
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

user.post('/login/', async (req, res) => { 
    //console.log("Post Request served" + req.body.fdr_company);
  await User.findOne({ $and: [{ usr_name: req.body.usr_name }, { usr_pass: req.body.usr_pass }] }).then((docs) => {
    
       if (docs != null) {
         res.send(docs);
       }
       else {
              res.status(500).send({
              message:
                 "Username and Password are wrong",
            });
       }
     })
    // const feeder_entry = new User({
    //     usr_id: req.body.usr_id,
    //     usr_name: req.body.usr_name,
    //     usr_nameinit: req.body.usr_nameinit,
    //     usr_firstname: req.body.usr_firstname,
    //     usr_midname: req.body.usr_midname,
    //     usr_sdnloc: req.body.usr_sdnloc
    // });
    // await feeder_entry.save()
    // .then((data) => {
    //   res.send(data);
    // })
    // .catch((err) => {
    //   res.status(500).send({
    //     message:
    //       err.message || "Some error occurred while creating the Message.",
    //   });
    // });
});

module.exports = user;