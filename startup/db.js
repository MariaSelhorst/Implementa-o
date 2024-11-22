const mongoose = require('mongoose');
const config = require('config')

module.exports = function () {
    const db = String(process.env.db);
    
    mongoose.connect(db)
        .then(() => console.log(`connected to ${db}`));
}