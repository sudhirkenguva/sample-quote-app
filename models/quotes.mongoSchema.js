const mongoose = require('../db');

const schema = new mongoose.Schema( {
        "quote": mongoose.SchemaTypes.String,
        "author": mongoose.SchemaTypes.String,
        "imageUrl": mongoose.SchemaTypes.String
}, {versionKey: false});

const quoteSchema = mongoose.model('quotes', schema);
module.exports = quoteSchema; 