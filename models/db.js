var mongoose = require('mongoose');


const mongodbConnect = async () => {
    try {
        const conn = mongoose.connect("mongodb://localhost:27017/itapp", { useNewUrlParser: true, });
        console.log('Mongodb Connected:{conn.connection.host}');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

require('./feeder.model')
require('./user.model')
require('./office.model')

module.exports =  mongodbConnect;