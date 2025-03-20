const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    market: String,
    no: Number,
    yes: Number,
    isRowDisabled: Boolean
});

const Market = mongoose.model('Market', marketSchema);

module.exports = Market;
