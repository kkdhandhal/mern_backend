var mongoose = require('mongoose');


const mongodbConnect = async () => {
    try {
        const conn = mongoose.connect("mongodb://127.0.0.1:27017/itapp", { useNewUrlParser: true, });
        console.log('Mongodb Connected:'+ (await conn).connection.host);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

require('./feeder.model')
require('./user.model')
require('./office.model')
require('./intruption.model')

module.exports =  mongodbConnect;