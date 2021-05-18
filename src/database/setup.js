const mongoose = require('mongoose');
require('dotenv').config();

const { MONGO_URI } = process.env;

module.exports = function () {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(result => {
        console.log("Database connected");
        app.listen(3000);
    })
    .catch(err => console.log(err)); 
}


