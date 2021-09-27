const mongoose = require('../config/dbConfig');
const autoIncrement = require('mongoose-auto-increment');

const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    standard: Number,
    attendance: Number
});

studentSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin, 'students');

module.exports = mongoose.model('students', studentSchema);