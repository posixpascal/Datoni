'use strict';

var DEBUG = false;

// requirejs config
requirejs.config({
    baseUri: '/public/js/',
    paths: {
        'jquery': '/components/jquery/jquery.min'

    },
    'packages': [{
            'name': 'lodash',
            'location': '/components/lodash/dist',
            'main': 'lodash'
        }, {
            'name': 'modernizr',
            'location': '/components/modernizr',
            'main': 'modernizr'
        }, {
            'name': 'foundation',
            'location': '/components/foundation/js',
            'main': 'foundation'
        }, {
            'name': 'pizzaRechner',
            'location': '/js/',
            'main': 'pizzarechner.js'
        }, {
            'name': 'progressButton',
            'location': '/js/vendor',
            'main': 'progressButton.js'
        }, {
            'name': 'classie',
            'location': '/js/vendor',
            'main': 'classie.js'
        }, {
            'name': 'geolib',
            'location': '/js/',
            'main': 'geolib.js'
        },

    ]
    });

require(['jquery', 'lodash', 'modernizr', 'app', 'foundation', 'pizzaRechner', 'geolib'], function ($, _, Modernizr, app, fn, pizzaRechner, geolib) {
    $(document).foundation();
    $('.slider-container').slideDown('slow');
    $(app.initialize);

    $(function () {
        new pizzaRechner().render('#pizza-widget');
    });

    var datoniCoords = {
        latitude: 50.3001955,
        longitude: 8.2628681
    };
    var calcMinOrder = function calcMinOrder(distance) {
        DEBUG && console.log(distance + 'm');
    };
    var handleCity = function handleCity(city, distance) {
        var km = Math.round(distance / 1000) + "km";
        var cities = {
            // level 0
            'Bad Camberg': {
                'minbestellwert': '0'
            },
            'Würges': {
                'minbestellwert': '0'
            },
            'Erbach': {
                'minbestellwert': '0'
            },

            // level 1
            'Schwickershausen': {
                'minbestellwert': '8'
            },
            'Oberselters': {
                'minbestellwert': '8'
            },
            'Gnadenthal': {
                'minbestellwert': '8'
            },

            // level 2
            'Eisenbach': {
                'minbestellwert': '12'
            },
            'Dombach': {
                'minbestellwert': '12'
            },
            'Walsdorf': {
                'minbestellwert': '12'
            },

            // level 3
            'Bechtheim': {
                'minbestellwert': '14'
            },
            'Beuerbach': {
                'minbestellwert': '14'
            },
            'Niederselters': {
                'minbestellwert': '14'
            },
            'Wallrabenstein': {
                'minbestellwert': '14'
            },
            'Steinfischbach': {
                'minbestellwert': '14'
            },
            'Dauborn': {
                'minbestellwert': '14'
            },


            // level 4
            'Münster': {
                'minbestellwert': '20'
            },
            'Haintchen': {
                'minbestellwert': '20'
            },
            'Esch': {
                'minbestellwert': '20'
            },
            'Hasselbach': {
                'minbestellwert': '20'
            },
            'Weyer': {
                'minbestellwert': '20'
            },
            'Oberbrechen': {
                'minbestellwert': '20'
            },

            // level 5
            'Riedelbach': {
                'minbestellwert': '25'
            },
            'Reichenbach': {
                'minbestellwert': '25'
            },
            'Wörsdorf': {
                'minbestellwert': '25'
            },
            'Niederbrechen': {
                'minbestellwert': '25'
            },
            'Heftrich': {
                'minbestellwert': '25'
            },
            'Wiesbaden': {
                'mindestbestellwert': '25'
            }


        };
        if (cities.hasOwnProperty(city)) {
            $('.mindestbestellwert').fadeOut();
            $('.panel-content').html('Standort: ' + city + "</span>")
                .append('<br/><br/>Mindestbestellwert: ' + cities[city].mindestbestellwert + "€")
                .append('<br/><br/>Ungef&auml;hre Entfernung: ' + km);

        } else {
            $('.mindestbestellwert').fadeOut();
            $('.panel-content').html('Standort: ' + city + '<br/>')
                .append('<br/>Leider liegt kein Mindestbestellwert vor!<br/> Sie k&ouml;nnen uns unter <a href="tel:+496434909940">06434 909940</b> telefonisch kontaktieren');

        }
    };
    $('.mindestbestellwert').on('click', function () {
        if (typeof navigator.geolocation === 'undefined') {
            DEBUG && alert('Oh nein! Es scheint als k&ouml;nne dein Browser seinen Standort nicht &uuml;bermitteln! :(');
            $('.mindestbestellwert').removeClass('successful').addClass('error');
        } else {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                position.coords._csrf = $('meta[name="csrf-token"]').attr('content');
                $.ajax({
                    url: '/geoapi',
                    data: position.coords,
                    method: 'POST',
                    type: 'POST',
                    success: function (data) {
                        var city = data.results[0].address_components[3].long_name;
                        handleCity(city, geolib.getDistance(
                            position.coords,
                            datoniCoords
                        ));

                    }
                });
            });
        }
    });
});



require(['jquery', 'progressButton', 'classie', 'geolib'], function ($, progressButton, classie) {
    window.classie = classie;
    $(function () {
        [].slice.call(document.querySelectorAll('.progress-btn')).forEach(function (bttn) {
            new ProgressButton(bttn, {
                callback: function (instance) {
                    var progress = 0,
                        interval = setInterval(function () {
                            progress = Math.min(progress + Math.random() * 0.1, 1);
                            instance._setProgress(progress);

                            if (progress === 1) {
                                instance._stop(1);
                                clearInterval(interval);
                            }
                        }, 200);
                }
            });
        });
    });
    var menuToggled = false;
    var toggleMenu = function(){
        if (!menuToggled){
            $(".mobile_nav").css("height", $(".mobile_nav ul").height());
        } else {
           $(".mobile_nav").css("height", 0);
        }
        menuToggled = !menuToggled;
    };
    //$(".menu-toggle").click(toggleMenu);
    $(".menu-toggle").on("click", toggleMenu);

});
