'use strict';
var request = require('request');

module.exports = function(app) {

    app.get('/api', function(req, res) {
        res.json({
            success: true,
            message: 'Datoni - Public API - v1'
        });

    });

    app.post('/geoapi', function(req, result) {
        var longitude = req.body.longitude;
        var latitude = req.body.latitude;

        // proxy environment
        var r = request.defaults();
        r('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true', function(err, response, body) {
            result.json(JSON.parse(body));

        });



    });
};
