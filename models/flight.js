const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: {
            values: ['American', 'Southwest', 'United'],
            // message: '{VALUE} is not supported'
        }
    },
    airport: {
        type: String,
        default: 'DEN',
        enum: {
            values: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
            // message: '{VALUE} is not supported',
        }
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: { type: Date, default: Date.now() + 365*24*60*60000 },
    })


module.exports = mongoose.model('Flight', flightSchema);