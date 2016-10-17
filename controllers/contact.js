'use strict';


module.exports = function(server) {

    server.get('/kontakt', function(req, res) {

        res.render('contact', {title: "Kontakt"});

    });

    server.get('/kontakt/send', function(req, res) {
       
            req.flash('success', 'Deine Nachricht wurde erfolgreich verschickt!');
            res.redirect('/');
     

       

    });

};
