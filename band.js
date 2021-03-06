const mongoose = require('mongoose');

const bandSchema = new mongoose.Schema ({
    bandName: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    }
})

const Band = mongoose.model('Band', bandSchema);

module.exports = Band;