const mongoose = require('mongoose');


const FormSchema = new mongoose.Schema({
    typeAnnonce: {
        type: String,
        required: true
    },
    typeBien: {
        type: String,
        required: true
    },
    wilaya: {
        type: String,
        required: true
    },
    priceMin: {
        type: Number,
        required: true
    },
    priceMax: {
        type: Number,
        required: true
    },
   
});


const FormModel = mongoose.model('Form', FormSchema);

module.exports = FormModel;
