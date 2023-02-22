const mongoose = require('mongoose');

async function startDB(){

    await mongoose.connect(`mongodb+srv://${process.env.EMAIL}:${process.env.SENHA}@pyx.puzgtvv.mongodb.net/test`);
}

module.exports = startDB;