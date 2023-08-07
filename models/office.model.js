const mongoose = require('mongoose');

var officeSchema = new mongoose.Schema({
   // _id: false,
    // _id: {
    //     type: Number,
    //      unique: true,
    //     // index: true,
    //      required: true,
    // },
   
    ofc_code: {
        type: Number,
        required: 'This field is required',
        index: true,
        unique: true
    },
    ofc_name: {
        type: String,
        required: 'This field is required'
    },
    ofc_address: {
        type: String,
        required: 'This field is required'
    },
    ofc_email: { type: String },
    ofc_phone: {    type: String },
    ofc_type: {type: String},
    
    
});

mongoose.model('Office',officeSchema);
