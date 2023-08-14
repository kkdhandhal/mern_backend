const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

var esdSchema = new mongoose.Schema({
    // esd_id: {
    //     type: Number,
    //     required:'This field is required'
    // },
    esd_fdr_code: {
        type: Number,
        required: 'This field is required',
    },
    esd_st_date: {
        type: Date,
        required: 'This field is required'
    },
    esd_st_time: {
        type: String,
        required: 'This field is required'
    },
    esd_end_date: {
        type: Date,
        required: 'This field is required'
    },
    esd_end_time: {
        type: String,
        required: 'This field is required'
    },
    esd_duration: {
        type: Number,
        required: 'This field is required'
    },
    esd_cons_affected: {
            type:Number
    },
    esd_reason: {
        type: String,
        required:'This field is required'
    },
    esd_action: {
        type: String,
        required:'This field is required'
    },
    esd_lc_by: {
        type: String,
        required:'This field is required'
    },
});

mongoose.model('ESD',esdSchema);
