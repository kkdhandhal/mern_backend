const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
   // _id: false,
    // _id: {
    //     type: Number,
    //      unique: true,
    //     // index: true,
    //      required: true,
    // },
    usr_company: {
        type: Number,
        required:'This field is required'
    },
    usr_circle: {
        type: Number,
        required:'This field is required'
    },
    usr_divsion: {
        type: Number,
        required:'This field is required'
    },
    usr_sdn: {
        type: Number,
        required:'This field is required'
    },
    usr_code: {
        type: Number,
        required: 'This field is required',
        index: true,
        unique: true
    },
    usr_name: {
        type: String,
        required: 'This field is required'
    },
    usr_pass: {
        type: String,
        required:'This field is required'
    },
    usr_isact: {
        type: Boolean,
        required: 'This field is required'
    },
    
});

mongoose.model('User',userSchema);
