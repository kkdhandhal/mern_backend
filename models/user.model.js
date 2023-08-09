const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   // _id: false,
    // _id: {
    //     type: Number,
    //      unique: true,
    //     // index: true,
    //      required: true,
    // },
    usr_id: {
        type: Number,
        unique: true,
        index: true,
        required:'This field is required'
    },
    usr_name: {
        type: String,
        required:'This field is required'
    },
    usr_nameinit: {
        type: String,
        required:'This field is required'
    },
    usr_firstname: {
        type: String,
        required:'This field is required'
    },
    usr_midname: {
        type: String,
        required:'This field is required'
    },
     usr_lastname: {
        type: String,
        required:'This field is required'
    },
    usr_sdnloc: {
        type: Number,
        required:'This field is required'
    },
    usr_mobno: {
        type: Number,
        required: 'This field is required',
    },
    usr_pass: {
        type: String,
        required: 'This field is required'
    },
    usr_isact: {
        type: Boolean,
        required: 'This field is required'
    },
    
});

mongoose.model('User',userSchema);
