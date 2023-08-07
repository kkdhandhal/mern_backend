const express = require('express');
var feeder = express.Router();


const mongoose = require('mongoose');
const mongodbConnect = require('../../models/db');
const Feeder = mongoose.model('Feeder');

function isNumber(value) {
    const conv = +value;
    if (conv) {
        return true;
    } else {
        return false;
    }
}

feeder.get('/list', async (req, res) => {
    const feeders = await Feeder.find({}).limit(20);
    res.json(feeders);
})

feeder.get('/list/search/:fdr_string', async (req, res) => {
  const searchString = req.params.fdr_string;
  
  if (isNumber(searchString) && searchString.length > 2) {
        fdernumber = Number(searchString);
          regExp = new RegExp( req.body.fdr_code , "i");
          // const feeders = await Feeder.find({ fdr_code: req.body.fdr_code });
            //$where: "/^67.*/.test(this.fdr_code)" 
            const feeders = await Feeder.find({$where: "/^"+fdernumber+".*/.test(this.fdr_code)"}).limit(20);
            res.json(feeders);
  }
  else {

      regExp = new RegExp( searchString , "i");
      //console.log(req.body.fdr_name+":"+regExp.toString());
      const feeders = await Feeder.find({fdr_name : {$regex : regExp}}).limit(20);
      res.json(feeders);
    }
 })

feeder.post('/create', async (req, res) => { 
    console.log("Post Request served" + req.body.fdr_company);
    // await Feeder.findOne({ fdr_code: req.body.fdr_code }).then((docs) => {
        
    // })
    const feeder_entry = new Feeder({
        fdr_company: req.body.fdr_company,
        fdr_circle: req.body.fdr_circle,
        fdr_divsion: req.body.fdr_divsion,
        fdr_ss: req.body.fdr_ss,
        fdr_sdn: req.body.fdr_sdn,
        fdr_code: req.body.fdr_code,
        fdr_name: req.body.fdr_name,
        fdr_category: req.body.fdr_category
        
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

module.exports = feeder;