const mongoose = require('mongoose');

var feederSchema = new mongoose.Schema({
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
});

mongoose.model('Feeder',feederSchema);
