const express = require('express');
var esd = express.Router();


const mongoose = require('mongoose');
const mongodbConnect = require('../../models/db');
const ESD = mongoose.model('ESD');

function isNumber(value) {
    const conv = +value;
    if (conv) {
        return true;
    } else {
        return false;
    }
}

// feeder.get('/esd/:fdr_loccode', async (req, res) => {
//     const fdr_loccode = req.params.fdr_loccode;
//     const feeders = await Feeder.find({fdr_loccode:fdr_loccode}).limit(20);
//     res.json(feeders);
// })

// feeder.get('/list/:fdr_adm_sdn/search/:fdr_string', async (req, res) => {
//   const searchString = req.params.fdr_string;
//   const fdr_adm_sdn = req.params.fdr_adm_sdn;
//   if (isNumber(searchString) && searchString.length > 2) {
//         fdernumber = Number(searchString);
//           regExp = new RegExp( req.body.fdr_code , "i");
//                         //$where: "/^67.*/.test(this.fdr_code)" 
//             const feeders = await Feeder.find({$and:[{fdr_adm_sdn:fdr_adm_sdn},{$where: "/^"+fdernumber+".*/.test(this.fdr_code)"}]}).limit(20);
//             res.json(feeders);
//   }
//   else {

//       regExp = new RegExp( searchString , "i");
//       //console.log(req.body.fdr_name+":"+regExp.toString());
//       const feeders = await Feeder.find({$and:[{fdr_adm_sdn:fdr_adm_sdn},{fdr_name : {$regex : regExp}}]}).limit(20);
//       res.json(feeders);
//     }
//  })

feeder.post('/esd/create', async (req, res) => { 
    console.log("Post Request served" + req.body.fdr_company);
    // await Feeder.findOne({ fdr_code: req.body.fdr_code }).then((docs) => {
        
    // })
    const esd_entry = new ESD({
        esd_id: req.body.esd_id,
        esd_fdr_code: req.body.esd_fdr_code,
        esd_st_date: req.body.esd_st_date,
        esd_st_time: req.body.esd_st_time,
        esd_end_date: req.body.esd_end_date,
        esd_end_time: req.body.esd_end_time,
        esd_duration: req.body.esd_duration,
        esd_cons_affected: req.body.esd_cons_affected,
        esd_reason: req.body.esd_reason,
        esd_action: req.body.esd_action,
        esd_lc_by: req.body.esd_lc_by
        // fdr_name: req.body.fdr_name,
        // fdr_category: req.body.fdr_category
        
    });
    await esd_entry.save()
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

module.exports = esd;