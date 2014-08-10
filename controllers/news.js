'use strict';


var NewsModel = require('../models/news');


module.exports = function (app) {

    var model = new NewsModel();


    app.get('/news', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('news', model);
            }
        });
    });

};
