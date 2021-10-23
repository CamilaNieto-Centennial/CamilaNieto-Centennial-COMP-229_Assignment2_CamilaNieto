let mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create a model class
const ContactSchema = new Schema({
    contactName: String,
    contactNumber: String,
    emailAddress: String
},
{
    collection: "contacts" //collection name
});

const Model = mongoose.model('Contact', ContactSchema);

module.exports = Model;