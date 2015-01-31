'use strict';


var kraken = require('kraken-js'),
    flash = require('connect-flash'),
    app = {};






app.configure = function configure(nconf, next) {
    // Fired when an app configures itself
    next(null);
};



app.requestStart = function requestStart(server) {
    // Fired at the beginning of an incoming request
};


app.requestBeforeRoute = function requestBeforeRoute(app) {
    app.use(flash());
    app.use(function(req, res, next) {

        next();
    });
    app.use(function(req, res, next) {
        // dust.js will pass arguments to this function, so we can't use bind
        // or a simple proxy because connect-flash will think we're adding a
        // message instead of retrieving them
        res.locals.flash = function() {
            var result = req.flash(),
                prop, messages = [],
                count;
            // if we have no flash messages, just exit cleanly.
            if (!Object.keys(result).length) {
                return undefined;
            }

            // if we do have flash messages, each message type has
            // a property in the "result" object, so we loop through
            // the properties here
            for (prop in result) {
                // make sure the property belongs to us, and that we
                // actually have some messages to show.
                if (result.hasOwnProperty(prop) && result[prop].length) {
                    for (count = 0; count < result[prop].length; count += 1) {
                        // finally, push the message inside a simple object, so
                        // we can use a single section in the dust template.
                        messages.push({
                            'type': prop,
                            'msg': result[prop][count]
                        });
                    }
                }
            }

            // all done, we should have a nice, friendly array that
            // dust.js can play with
            return messages;
        };
        next();
    });
};


app.requestAfterRoute = function requestAfterRoute(server) {
    // Fired after routing occurs
};


kraken.create(app).listen(process.env.PORT, function(err) {
    if (err) {
        console.error(err);
    }
});
