const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const Course = new Schema({
    //tạo models
    name: { type: String, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', Course);