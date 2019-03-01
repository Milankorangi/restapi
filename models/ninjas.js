const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create ninja schema and model
const NinjaSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name field is required']
    },
    add: {
        type: String,
        required: [true, 'Address field is required']
    }
});

const Ninja = mongoose.model('ninja', NinjaSchema);


module.exports = Ninja;