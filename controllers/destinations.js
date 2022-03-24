const Flight = require('../models/flight')


module.exports = {
    create,
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        // console.log(flight.destinations)
        flight.save(function(err) {
            // console.log(err)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}