const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/flights')

mongoose.connection.on('connected', function() {
    console.log(`Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`)
})