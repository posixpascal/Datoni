'use strict';


//var PageModel = require('../models/page');


module.exports = function (app) {
	var render = function(page, title){
		var p = page;
		return function (req, res){
			res.render('pages/' + p, {title: title});
		};
	};



    app.get('/pages/:pageId', function (req, res) {
        
        res.render('pages', {}); // PageModel.byId(pageId) ^^
        
    });

    app.get('/oeffnungszeiten', render('oeffnungszeiten', 'Öffnungszeiten'));
    app.get('/anfahrt', render('anfahrt', 'Anfahrt'));
    app.get('/poweredby', render('poweredby', 'Poweredby'));
    app.get('/mindestbestellwert', render('mindestbestellwert', 'Mindestbestellwert'));
    app.get('/impressum', render('impressum', 'Impressum'));
    app.get('/about-cookies', render('about-cookies', 'Über Cookies'));
    app.get('/disclaimer', render('disclaimer', 'Disclaimer'));
    app.get('/datenschutz', render('datenschutz', 'Datenschutzerklärung'));

};
