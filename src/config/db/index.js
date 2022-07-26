const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/MyDB');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect error');
    }
}

module.exports = { connect }