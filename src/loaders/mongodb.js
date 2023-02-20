const mongoose = require('mongoose');

async function startDB(){

    await mongoose.connect('mongodb+srv://drenofbueno:Basilides2018@pyx.puzgtvv.mongodb.net/test');
}

module.exports = startDB;