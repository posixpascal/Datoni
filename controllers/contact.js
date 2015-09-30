'use strict';


module.exports = function(server) {

    server.get('/kontakt', function(req, res) {

        res.render('contact', {title: "Kontakt"});

    });

    server.post('/kontakt/send', function(req, res) {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;
        var _post = true;
        
        // post validation
        if (name === '' || typeof name === 'undefined' || name.length < 2) {
            _post = false;
            req.flash('error', 'Bitte gebe einen Namen an. (Mindestens 2 Buchstaben)');
        }

        if (email === '' || typeof email === 'undefined' || email.length < 4 || !/(.*)@(.+)\.(.*)/ig.test(email)) {
            _post = false;
            req.flash('error', 'Bitte gebe eine E-Mail Adresse an, damit wir dich kontaktieren können');
        }

        if (message === '' || typeof message === 'undefined' || message.length < 2){
            _post = false;
            req.flash('error', 'Bitte gebe eine Nachricht an, welche an uns geschickt werden soll');
        }

        if (_post){ 
            // send mail
            req.flash('success', 'Deine Nachricht wurde erfolgreich verschickt!');
            res.redirect('/');
        } else {
            res.redirect('/kontakt');
        }

       

    });

};
