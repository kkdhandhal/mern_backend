const mongoose = require('mongoose');

var feederSchema = new mongoose.Schema({
   // _id: false,
    // _id: {
    //     type: Number,
    //      unique: true,
    //     // index: true,
    //      required: true,
    // },
    fdr_loccode: {
        type: Number,
        required:'This field is required'
    },
     fdr_code: {
        type: Number,
        required: 'This field is required',
        index: true,
        unique: true
    },
     fdr_name: {
        type: String,
        required: 'This field is required'
    },
     fdr_type: {
        type: String,
        required: 'This field is required'
    },
    
    fdr_category: {
        type: String,
        required: 'This field is required'
    },

    fdr_adm_sdn: {
        type: Number,
        required:'This field is required'
    },
    // fdr_divsion: {
    //     type: Number,
    //     required:'This field is required'
    // },
    // fdr_ss: {
    //     type: String,
    //     required:'This field is required'
    // },
    // fdr_sdn: {
    //     type: Number,
    //     required:'This field is required'
    // },
   
   
    
});

mongoose.model('Feeder',feederSchema);
