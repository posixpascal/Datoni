'use strict';


module.exports = function CategoryModel(db) {
    this.categories = [{
            name: 'Salate',
            id: '1',
            _url: '/salate',
            image: '/images/menu/salate.jpg'
        }, {
            name: 'Vorspeisen',
            id: '2',
            _url: '/vorspeisen',
            image: '/images/menu/vorspeisen.jpg'
        }, {
            name: 'Pizza',
            id: '3',
            _url: '/pizza',
            image: '/images/menu/pizza.jpg'
        }, {
            name: 'Vegetarisches',
            id: '9',
            _url: '/vegetarische-pizza',
            image: '/images/menu/vegetarische-pizza.jpg'
        },

        {
            name: 'Nudelgerichte',
            id: '4',
            _url: '/nudelgerichte',
            image: '/images/menu/nudelgerichte.jpg'
        }, {
            name: 'Überbackenes',
            id: '5',
            _url: '/ueberbackenes',
            image: '/images/menu/ueberbackene-spezialitaeten.jpg'
        }, {
            name: 'Deutsche Küche',
            id: '6',
            _url: '/deutsche-kueche',
            image: '/images/menu/deutsche-kueche.jpg'
        }, {
            name: 'Desserts',
            id: '7',
            _url: '/desserts',
            image: '/images/menu/desserts.jpg'
        }, {
            name: 'Getränke',
            id: '8',
            _url: '/getraenke',
            image: '/images/menu/getraenke.jpg'
        },
    ];


    this.products = {

        'Salate': [{
            'id': '1',
            'ingredients': ['Tomaten', 'Zwiebeln'],
            'price': '4.0',
            'description': 'Tomaten, Zwiebeln',
            'name': 'Tomatensalat'
        }, {
            'id': '2',
            'ingredients': ['Paprika', 'Gurken', 'Tomaten', 'Zwiebeln'],
            'price': '4.5',
            'description': 'Paprika, Gurken, Tomaten und Zwiebeln',
            'name': 'Gemischter Salat'
        }, {
            'id': '3',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Paprika', 'Zwiebeln', 'Schinken', 'Käse', 'Thunfisch', 'Oliven', 'Ei'],
            'price': {
                'klein': '5.00',
                'gross': '6.00'
            },
            'description': 'grüner Salat<sup>+</sup>, Tomaten, Gurken, Zwiebeln, Schinken<sup>*</sup>, Käse, Thunfisch, Oliven und Ei',
            'name': 'Insalata Italiana'
        }, {
            'id': '4',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Oliven', 'Putenfleisch-Streifen'],
            'price': '6.50',
            'description': 'grüner Salat, Tomaten, Gurken, Oliven, Putenfleisch-Streifen',
            'name': 'Toscana Salat'
        }, {
            'id': '5',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Zwiebeln', 'Oliven', 'Ei', 'Gorgonzola', 'Mozzarella', 'Gouda', 'Schafskäse'],
            'price': '7.00',
            'description': 'grüner Salat, Tomaten, Gurken, Zwiebeln, Oliven, Ei, Gorgonzola, Mozzarella, Gouda, Schafskäse',
            'name': 'Salat Quattro Formaggi'
        }, {
            'id': '6',
            'ingredients': ['Tomaten', 'Mozzarella', 'Basilikum'],
            'price': '6.50',
            'description': 'Tomaten mit Mozzarella und Basilikum',
            'name': 'Insalata Caprese'
        }, {
            'id': '7',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Paprika', 'Artischocken', 'Zwiebeln', 'Salami', 'Schinken', 'Käse', 'Thunfisch', 'milde Peperoni'],
            'price': '6.50',
            'description': 'grüner Salat, Tomaten, Gurken, Paprika, Artischocken, Zwiebeln, Salami, Schinken, Käse, Thunfisch, milde Peperoni',
            'name': 'Insalata Roma'
        }, {
            'id': '8',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Paprika', 'Mais', 'Ananas', 'Hähnchenbrust'],
            'price': '7.00',
            'description': 'grüner Salat, Tomaten, Gurken, Paprika, Mais, Ananas und saftige Hähnchenbrust',
            'name': 'Insalata Da Toni'
        }, {
            'id': '201',
            'ingredients': ['Gurken', 'Tomaten', 'Eisberg-Salat', 'Mais', 'Paprika', 'Oliven', 'Ei', 'Mozzarella', 'Artischocken'],
            'price': '7.00',
            'description': 'Gurken, Tomaten, Eisberg-Salat, Mais, Paprika, Oliven, Ei, Mozzarella und Artischocken',
            'name': 'Fitness-Salat'
        }, {
            'id': '202',
            'ingredients': ['Schafskäse', 'Oliven', 'Mais', 'Zwiebeln', 'Gurken'],
            'price': '7.00',
            'description': '150g Schafskäse, Oliven, Mais, Zwiebeln und Gurken',
            'name': 'Schafskäse mit Salat'
        }, {
            'id': '203',
            'ingredients': ['Tomaten', 'Zwiebeln', 'Gurken'],
            'price': '5.50',
            'description': 'Tomaten, Gurken und Zwiebeln',
            'name': 'Tomaten-Gurken-Salat'
        }, {
            'id': '204',
            'ingredients': ['grüner Salat', 'Mozzarella', 'Gurken', 'Tomaten', 'Oliven', 'Zwiebeln'],
            'price': '6.00',
            'description': 'grüner Salat, Mozzarella, Gurken, Tomaten, Oliven, Zwiebeln',
            'name': 'Sommer-Salat'
        }, {
            'id': '205',
            'ingredients': ['Rucola', 'Balsamico-Essig', 'Parmesankäse', 'Tomaten'],
            'price': '7.00',
            'description': 'Rucola-Salat mit Balsamico-Essig, frischer Parmesankäse und frischen Tomaten',
            'name': 'Rucola-Salat'
        }, {
            'id': '206',
            'ingredients': ['grüner Salat', 'Shrimps', 'Ananas'],
            'price': '7.00',
            'description': 'grüner Salat mit Shrimps und Ananas',
            'name': 'Shrimps-Salat'
        }, {
            'id': '207',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Mais', 'Champignons'],
            'price': '6.50',
            'description': 'grüner Salat mit Tomaten, Gurken, Mais und frischen Champignons',
            'name': 'Champignon-Salat'
        }, {
            'id': '208',
            'ingredients': ['Rucola', 'Balsamico-Essig', 'Scampi', 'Tomaten'],
            'price': '7.00',
            'description': 'Rucola-Salat mit Balsamico-Essig, Scampi und frischen Tomaten',
            'name': 'Scampi-Rucola-Salat'
        }, {
            'id': '209',
            'ingredients': ['grüner Salat', 'Tomaten', 'Gurken', 'Paprika', 'Mais', 'milde Peperoni', 'Schafskäse', 'Oliven', 'rote Zwiebeln'],
            'price': '6.50',
            'description': 'Grüner Salat mit Tomaten, Gurken, Paprika, Mais, milde Peperoni, Schafskäse, Oliven, rote Zwiebeln',
            'name': 'Bauernsalat'
        }],

        'Vorspeisen': [{
                'id': '11',
                'ingredients': ['Knoblauch', 'Käse'],
                'price': '2.80',
                'description': 'Knoblauch-Käsebrot',
                'name': 'Knoblauch-Käsebrot',
            }, {
                'id': '12',
                'ingredients': [''],
                'price': '1.50',
                'description': 'Pizzabrot (Ohne Knoblauch)',
                'name': 'Pizzabrot',
            }, {
                'id': '13',
                'ingredients': ['Tomatensoße', 'Knoblauch'],
                'price': '2.80',
                'description': 'Pizzabrot mit Tomatensoße',
                'name': 'Pizzabrot',
            },

        ],

        'Pizza': [{
                'id': '160',
                'ingredients': [],
                'price': {
                    'klein': null,
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': '',
                'name': 'Pizza Spaghetti Bolognese',
                'displaySubGroup': 'Neue Pizzen aus der neuen Karte'
            }, {
                'id': '161',
                'ingredients': [],
                'price': {
                    'klein': null,
                    'gross': '7.50',
                    'familie': null
                },
                'description': '',
                'name': 'Pizza Calzone Hollandaise',
            }, {
                'id': '162',
                'ingredients': [],
                'price': {
                    'klein': '6.0',
                    'gross': '7.00',
                    'familie': '13.5'
                },
                'description': 'Hackfleisch, frische CHampignons, Mais, scharfes Öl',
                'name': 'Pizza',
            }, {
                'id': '163',
                'ingredients': [],
                'price': {
                    'klein': '6.5',
                    'gross': '7.50',
                    'familie': '13.5'
                },
                'description': 'Sucuk, frische Champignons, Oliven, Schafskäse',
                'name': 'Pizza',
            }, {
                'id': '164',
                'ingredients': [],
                'price': {
                    'klein': '5.0',
                    'gross': '6.00',
                    'familie': '11.0'
                },
                'description': 'Crème-fraîche, Mozzarella, Knoblauch, Oregano',
                'name': 'Pizza',
            }, {
                'id': '165',
                'ingredients': [],
                'price': {
                    'klein': '6.0',
                    'gross': '7.00',
                    'familie': '14.0'
                },
                'description': 'Crème-fraîche, Schinken, Zwiebeln, Mais, Mozarella, Organo',
                'name': 'Pizza',
            }, {
                'id': '166',
                'ingredients': [],
                'price': {
                    'klein': '7.0',
                    'gross': '8.00',
                    'familie': '14.50'
                },
                'description': 'Crème-fraîche, Lachs, Spinat, Zwiebeln, Knoblauch',
                'name': 'Pizza',
            }, {
                'id': '167',
                'ingredients': [],
                'price': {
                    'klein': '5.0',
                    'gross': '6.00',
                    'familie': '11.00'
                },
                'description': 'Hollandaise Sauce, Käse',
                'name': 'Pizza',
            }, {
                'id': '168',
                'ingredients': [],
                'price': {
                    'klein': '6.5',
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Barbecue-Sauce, Peperoniwurst, Hackfleisch, Zwiebeln, scharf',
                'name': 'Pizza',
            }, {
                'id': '169',
                'ingredients': [],
                'price': {
                    'klein': '6.5',
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Hollandaise-Sauce, Schinken, Peperoni',
                'name': 'Pizza',
            },

            {
                'id': '20',
                'ingredients': ['Tomaten', 'Käse'],
                'price': {
                    'klein': '3.50',
                    'gross': '4.50',
                    'familie': '9.0'
                },
                'displaySubGroup': 'Weitere Pizzen aus unserer Speisekarte',
                'description': 'Pizza mit Tomatensoße und Käse (Magharita)',
                'name': 'Pizza Magharita'
            }, {
                'id': '21',
                'ingredients': ['Tomaten', 'Käse', 'Salami'],
                'price': {
                    'klein': '4.50',
                    'gross': '5.50',
                    'familie': '10.00'
                },
                'description': 'Pizza mit Tomatensoße, Käse und Salami',
                'name': 'Pizza Salami'
            }, {
                'id': '22',
                'ingredients': ['Tomaten', 'Käse', 'Schinken'],
                'price': {
                    'klein': '4.50',
                    'gross': '5.50',
                    'familie': '10.00'
                },
                'description': 'Pizza mit Tomatensoße, Käse und Schinken',
                'name': 'Pizza Schinken'
            }, {
                'id': '23',
                'ingredients': ['Tomaten', 'Käse', 'Peperoniwurst'],
                'price': {
                    'klein': '4.50',
                    'gross': '5.50',
                    'familie': '10.00'
                },
                'description': 'Pizza mit Tomatensoße, Käse und Peperoniwurst',
                'name': 'Pizza Peperoniwurst'
            }, {
                'id': '24',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Champignons'],
                'price': {
                    'klein': '5.00',
                    'gross': '6.00',
                    'familie': '11.00'
                },
                'description': 'Pizza mit Tomatensoße, Käse, Salami und Champignons',
                'name': 'Pizza Salami &amp; Champignons'
            }, {
                'id': '25',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Schinken', 'Champignons', 'Zwiebeln'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Tomatensoße, Käse, Salami, Schinken, Zwiebeln und Champignons',
                'name': 'Pizza Schinken, Salami, Zwiebeln &amp; Champignons',
            }, {
                'id': '26',
                'ingredients': ['Tomaten', 'Käse', 'Peperoniwurst', 'Champignons'],
                'price': {
                    'klein': '5.00',
                    'gross': '6.00',
                    'familie': '11.00'
                },
                'description': 'Pizza mit Tomatensoße, Peperoniwurst und Champignons',
                'name': 'Pizza Peperoniwurst &amp; Champignons',
            }, {
                'id': '27',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Salami'],
                'price': {
                    'klein': '5.00',
                    'gross': '6.00',
                    'familie': '11.00'
                },
                'description': 'Pizza mit Tomatensoße, Salami und Schinken',
                'name': 'Pizza Salami Schinken',
            }, {
                'id': '28',
                'ingredients': ['Tomaten', 'Käse', 'Peperoniwurst', 'Schinken, Zwiebeln'],
                'price': {
                    'klein': '5.50',
                    'gross': '6.50',
                    'familie': '12.00'
                },
                'description': 'Pizza mit Tomatensoße, Peperoniwurst, Schinken und Zwiebeln',
                'name': 'Pizza Peperoniwurst, Schinken &amp; Zwiebeln',
            }, {
                'id': '29',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Champignons', 'Paprika', 'Zwiebeln'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Tomatensoße, Salami, Zwiebeln, Paprika und Champignons',
                'name': 'Pizza Salami, Zwiebeln, Paprika &amp; Champignons',
            }, {
                'id': '30',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Paprika', 'Zwiebeln', 'Peperoni', 'scharf'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Salami, Paprika, Zwiebeln, Peperoni, scharf.',
                'name': 'Pizza Salami mit Paprika, Zwiebeln und Peperoni (scharf)'
            }, {
                'id': '31',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Ananas'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '12.00'
                },
                'description': 'Pizza mit Schinken und Ananas',
                'name': 'Pizza Hawaii'
            }, {
                'id': '32',
                'ingredients': ['Tomaten', 'Käse', 'Thunfisch', 'Zwiebeln'],
                'price': {
                    'klein': '5.50',
                    'gross': '6.50',
                    'familie': '12.50'
                },
                'description': 'Pizza mit Thunfisch und Zwiebeln',
                'name': 'Pizza Tonno'
            }, {
                'id': '33',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Salami', 'Oliven', 'Artischocken', 'Champignons'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Schinken, Salami, Oliven, Artischocken, Champignons',
                'name': 'Pizza Vier Jahreszeiten'
            }, {
                'id': '34',
                'ingredients': ['Tomaten', 'Käse', 'Mozzarella'],
                'price': {
                    'klein': '6.00',
                    'gross': '6.50',
                    'familie': '12.50'
                },
                'description': 'Pizza mit Mozzarella',
                'name': 'Pizza Mozzarella'
            }, {
                'id': '35',
                'ingredients': ['Tomaten', 'Käse', 'Oliven', 'Sardellen'],
                'price': {
                    'klein': '5.50',
                    'gross': '6.50',
                    'familie': '12.00'
                },
                'description': 'Pizza mit Oliven und Sardellen',
                'name': 'Pizza Siciliana'
            }, {
                'id': '36',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Schinken', 'Champignons'],
                'price': {
                    'klein': '6.00',
                    'gross': '6.50',
                    'familie': '12.50'
                },
                'description': 'Pizza mit Salami, Schinken und Champignons',
                'name': 'Pizza Capriciosa',
            }, {
                'id': '37',
                'ingredients': ['Tomaten', 'Käse', 'Salami', 'Schinken', 'Champignons'],
                'price': '7.50',
                'description': 'Pizzatasche gef&uuml;llt mit Salami, Schinken und Champignons',
                'name': 'Pizza Calzone'
            }, {
                'id': '38',
                'ingredients': ['Tomaten', 'Käse', 'Meeresfrüchte'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.5',
                    'familie': '14.0'
                },
                'description': 'Pizza mit Meeresfrüchten',
                'name': 'Pizza Mare'
            }, {
                'id': '39',
                'ingredients': ['Tomaten', 'Käse', 'Scampi', 'Rucula'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.5',
                    'familie': '14.0'
                },
                'description': 'Pizza mit Scampi und Rucola',
                'name': 'Pizza Scampi'
            }, {
                'id': '40',
                'incredients': ['Tomaten', 'Käse', 'Spinat', 'Mozzarella'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.50'
                },
                'description': 'Pizza mit Spinat und Mozarella',
                'name': 'Pizza Spinaci'
            }, {
                'id': '41',
                'ingredients': ['Tomaten', 'Käse', ''],
                'price': {
                    'klein': '6.50',
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Pizza Quattro Formaggio',
                'name': 'Pizza Quattro Formaggio'
            }, {
                'id': '42',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Salami', 'Peperoniwurst'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Schinken, Salami und Peperoniwurst',
                'name': 'Pizza Schinken, Salami und Peperoniwurst'
            }, {
                'id': '43',
                'ingredients': ['Tomaten', 'Käse', 'Hackfleisch', 'Mais', 'Peperoni'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '12.50'
                },
                'description': 'Pizza mit Hackfleisch, Mais und Peperoni, scharf',
                'name': 'Pizza Hackfleisch, Mais und Peperoni'
            }, {
                'id': '44',
                'ingredients': ['Tomaten', 'Käse', 'Kapern', 'Sadellen', 'Knoblauch'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.00'
                },
                'description': 'Pizza mit Kapern, Sardellen und Knoblauch',
                'name': 'Pizza Kapern, Sardellen und Knoblauch'
            }, {
                'id': '45',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Champignons'],
                'price': {
                    'klein': '5.00',
                    'gross': '6.00',
                    'familie': '11.00'
                },
                'description': 'Pizza Schinken und Champignons',
                'name': 'Pizza Schinken und Champignons'
            }, {
                'id': '46',
                'ingredients': ['Tomaten', 'Käse', 'Putenfleisch', 'Champignons', 'Mais'],
                'price': {
                    'klein': null,
                    'gross': '8.0',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Putenfleisch, Champignons, Mais',
                'name': 'Pizza Pollo'
            }, {
                'id': '216',
                'ingredients': ['Tomaten', 'Käse', 'Schinken', 'Salami', 'Pilze', 'Paprika', 'Zwiebeln', 'Öl'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.5',
                    'familie': '14.00'
                },
                'description': 'Pizza Schinken, Salami, Pilze, Paprika, Zwiebeln + extra scharfes Öl',
                'name': 'Pizza Diavola'
            }, {
                'id': '217',
                'ingredients': ['Tomaten', 'Käse', 'Sahne-Soße', 'Schinken', 'Ei'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.50'
                },

                'description': 'Pizza Sahne-Soße, Schinken, Ei, extra Käse',
                'name': 'Pizza Carbonara'
            }, {
                'id': '218',
                'ingredients': ['Tomaten', 'Käse', 'Tomaten', 'Parmaschinken', 'Parmesan'],
                'price': {
                    'klein': null,
                    'gross': '7.5',
                    'familie': '14.50'
                },
                'description': 'Pizza mit frischen Tomaten, Parmaschinken, frischer Parmesan',
                'name': 'Pizza Italia'
            }, {
                'id': '219',
                'ingredients': ['Tomaten', 'Käse', 'Mozzarella', 'Basilikum', 'Schinken', 'Oliven', 'Ei'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Mozzarella, Basilikum, Schinken, Oliven und Ei.',
                'name': 'Pizza Toni'
            }, {
                'id': '220',
                'ingredients': ['Tomaten', 'Käse', 'Barbecue-Soße', 'Hackfleisch', 'Zwiebeln'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.50'
                },
                'description': 'Pizza Venezia mit Barbecue-Soße, Hackfleisch, Zwiebeln, Scharf.',
                'name': 'Pizza Venezia'
            }, {
                'id': '221',
                'ingredients': ['Tomaten', 'Käse', 'Hollandaise-Soße', 'Schinken'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.50'
                },
                'description': 'Pizza mit Hollondaise-Soße und Schinken.',
                'name': 'Pizza Hollondaise (Schinken)'
            }, {
                'id': '221a',
                'ingredients': ['Tomaten', 'Käse', 'Hollandaise-Soße', 'Peperoniwurst'],
                'price': {
                    'klein': '6.00',
                    'gross': '7.00',
                    'familie': '13.50'
                },
                'description': 'Pizza mit Hollondaise-Soße und2 Peperoniwurst.',
                'name': 'Pizza Hollondaise (Peperoniwurst)'
            }, {
                'id': '222',
                'ingredients': ['Tomaten', 'Käse', 'Chili-Soße', 'Schinken', 'Kartoffeln', 'Broccoli'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.5',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Chili-Soße, Schinken, Kartoffeln und Broccoli.',
                'name': 'Pizza Chili'
            }, {
                'id': '223',
                'ingredients': ['Tomaten', 'Käse', 'Crème-fraîche', 'Speck', 'Zwiebeln', 'Mais', 'Ei'],
                'price': {
                    'klein': '6.50',
                    'gross': '8.0',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Crème-fraîche, Speck, Zwiebeln, Mais, Ei',
                'name': 'Pizza Tramonto'
            }, {
                'id': '224',
                'ingredients': ['Tomaten', 'Käse', 'Crème-fraîche', 'Lachs', 'Zwiebeln', 'extra Käse'],
                'price': {
                    'klein': '7.00',
                    'gross': '8.0',
                    'familie': '14.50'
                },
                'description': 'Pizza mit Käse, Crème-fraîche, Lachs, Zwiebeln und extra Käse',
                'name': 'Pizza Salmone'
            }, {
                'id': '225',
                'ingredients': ['Tomaten', 'Käse', 'Peperoniwurst', 'Schinken', 'Salami', 'und Zwiebel'],
                'price': {
                    'klein': '6.5',
                    'gross': '7.5',
                    'familie': '14.50'
                },
                'description': 'Pizza mit Hackfleisch, Peperoniwurst, Schinken, Salami u. Zwiebeln',
                'name': 'Pizza Parma'
            }, {
                'id': '226',
                'ingredients': ['Tomaten', 'Käse', 'Rucola', 'Tomatenscheiben', 'Mozzarella', 'Parmesankäse', 'Knoblauch'],
                'price': {
                    'klein': null,
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Rucola, Tomatenscheiben, Mozzarella, Knoblauch und Parmesankäse',
                'name': 'Pizza Rucola'
            }, {
                'id': '227',
                'ingredients': ['Tomaten', 'Käse', 'Putenfleisch', 'Tomatenscheiben', 'Zwiebeln', 'grüne Peperoni', 'Knoblauch'],
                'price': {
                    'klein': null,
                    'gross': '7.5',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Tomatenscheiben, Putenfleisch, Zwiebeln, grüne Peperoni und Knoblauch',
                'name': 'Pizza mit Putenfleisch, grünen Peperoni, Zwiebeln und Knoblauch'
            }, {
                'id': '228',
                'ingredients': ['Tomaten', 'Käse', 'Crème-fraîche', 'Schinken', 'Peperoniwurst', 'Zwiebeln'],
                'price': {
                    'klein': '6.50',
                    'gross': '7.5',
                    'familie': '14.00'
                },
                'description': 'Pizza mit mit Crème-fraîche, Schinken, Peperoniwurst und Zwiebeln',
                'name': 'Pizza Roma'
            }, {
                'id': '229',
                'ingredients': ['Tomaten', 'Käse', 'Hähnchenbrust', 'Barbecue', 'Paprika'],
                'price': {
                    'klein': null,
                    'gross': '7.50',
                    'familie': '14.00'
                },
                'description': 'Pizza mit Hähnchenbrust, Barbecue, Paprika',
                'name': 'Pizza Barbecue'
            }, {
                'id': '230a',
                'ingredients': ['Tomaten', 'Käse', 'Rindersalami "Sucuk"', 'Schafskäse', 'grüne Peperoni', 'Zwiebeln', 'Knoblauch'],
                'price': {
                    'klein': null,
                    'gross': '7.00',
                    'familie': '13.50'
                },
                'description': 'Pizza mit Sucuk-Rindersalami, Schafskäse, grünen Peperoni, Zwiebeln und Knoblauch',
                'name': 'Pizza Sucuk'
            }, {
                'id': '215',
                'ingredients': ['Tomaten', 'Käse', 'Crème-fraîche', 'Hackfleisch', 'Zwiebeln'],
                'price': {
                    'klein': 6.0,
                    'gross': '7.50',
                    'familie': '13.00'
                },

                'description': 'Pizza mit Crème-fraîche, Hackfleisch und Zwiebeln',
                'name': 'Pizza Crème-fraîche'
            },
        ],



        'VegetarischePizza': [{
                'id': '47',
                'ingredients': ['Tomaten', 'Käse', 'Champignons'],
                'price': {
                    'klein': 4.5,
                    'gross': '5.50',
                    'familie': '10.00'
                },

                'description': 'Pizza mit Käse und Champignons',
                'name': 'Pizza mit Käse und Champignons'
            }, {
                'id': '48',
                'ingredients': ['Tomaten', 'Broccoli', 'Käse', 'Paprika', 'Champignons', 'Zwiebeln', 'Mozzarella'],
                'price': {
                    'klein': 6.5,
                    'gross': '7.50',
                    'familie': '13.50'
                },

                'description': 'Pizza mit Käse, Broccoli, Paprika, Champignons, Zwiebeln und Mozzarella',
                'name': 'Pizza Broccoli'
            }, {
                'id': '49',
                'ingredients': ['Tomaten', 'Käse', 'Paprika', 'Champignons', 'Zwiebeln', 'Mozzarella'],
                'price': {
                    'klein': 6.5,
                    'gross': '7.5',
                    'familie': '13.50'
                },
                'description': 'Pizza mit Tomaten, Käse, frische Paprika, frische Champignons, Zwiebeln, Mozzarella',
                'name': 'Pizza Vegetaria'
            }, {
                'id': '50',
                'ingredients': ['Tomaten', 'Käse', 'Spinat', 'Gorgonzola'],
                'price': {
                    'klein': 6.5,
                    'gross': '7.5',
                    'familie': '14.00'
                },

                'description': 'Pizza mit Tomaten, Käse, Spinat und Gorgonzola',
                'name': 'Pizza Spinaci'
            }, {
                'id': '52',
                'ingredients': ['Tomaten', 'Käse', 'Mozzarella', 'Basilikum'],
                'price': {
                    'klein': 6.5,
                    'gross': '7.50',
                    'familie': '13.50'
                },

                'description': 'Pizza, Käse, Mozzarella, frischen Tomaten und Basilikum',
                'name': 'Pizza Caprese'
            }, {
                'id': '53',
                'ingredients': ['Tomaten', 'Käse', 'Crème-fraîche', 'Krabben', 'Zwiebeln', 'Peperoni', 'Artischocken', 'Knoblauch', 'Basilikum', 'Parmesan'],
                'price': {
                    'klein': 6.5,
                    'gross': '7.5',
                    'familie': '14.00'
                },

                'description': 'Pizza mit Käse, Crème-fraîche, Krabben, Zwiebeln, Peperoni, Artischocken, Knoblauch, Basilikum, Parmesan',
                'name': 'Pizza Molise'
            },

        ],


        'Ueberbackenes': [{
            'id': '55',
            'ingredients': ['Hackfleisch', 'Tomatensoße'],
            'price': '6.50',

            'description': 'Hausgemachte Lasagne alla Toni',
            'name': 'Hausgemachte Lasagne alla Toni'
        }, {
            'id': '56',
            'ingredients': ['Rigatoni', 'Tomatensoße', 'Schinken', 'Erbsen', 'Champignons', 'Hackfleischsoße'],
            'price': '6.50',

            'description': 'Überbackene Rigatoni mit Schinken, Erbsen, Champignons und Hackfleischsoße',
            'name': 'Rigatoni al Forno nach Art des Hauses'
        }, {
            'id': '57',
            'ingredients': ['Schinken', 'Sahne-Soße'],
            'price': '6.50',

            'description': 'Überbackene  Tortellini mit Schinken und Sahne-Soße überbacken',
            'name': 'Tortellini alla Panna'
        }, {
            'id': '58',
            'ingredients': ['Rigatoni', 'Tomatensoße', 'Hackfleischsoße'],
            'price': '6.50',

            'description': 'Rigatoni mit Hackfleischsoße überbacken',
            'name': 'Rigatoni Bolognese'
        }, {
            'id': '59',
            'ingredients': ['Spaghetti', 'Tomatensoße', 'Hackfleischsoße'],
            'price': '6.50',

            'description': 'Spaghetti mit Hackfleischsoße überbacken',
            'name': 'Spaghetti Bolognese'
        }, {
            'id': '60',
            'ingredients': ['Spaghetti', 'Tomatensoße'],
            'price': '6.00',

            'description': 'Spaghetti mit Tomatensoße überbacken',
            'name': 'Spaghetti Napoli'
        }, {
            'id': '61',
            'ingredients': ['Rigatoni', 'Tomatensoße'],
            'price': '6.00',

            'description': 'Rigatoni mit Tomatensoße überbacken',
            'name': 'Rigatoni Napoli'
        }, {
            'id': '62',
            'ingredients': ['Spaghetti', 'Schinken', 'Sahne-Soße'],
            'price': '6.50',

            'description': 'Spaghetti mit Schinken Sahne-Soße überbacken',
            'name': 'Spaghetti Carbonara'
        }, {
            'id': '63',
            'ingredients': ['Tomatensoße'],
            'price': '6.50',

            'description': 'Drei verschiedene Nudeln mit Käse überbacken',
            'name': 'Combinazione'
        }, {
            'id': '242',
            'ingredients': ['Schinken', 'Pilze'],
            'price': '6.50',

            'description': 'Kartoffelauflauf mit Schinken und Pilzen überbacken',
            'name': 'Kartoffel-Schinken-Auflauf',
            'displaySubGroup': 'Kartoffelaufläufe'
        }, {
            'id': '243',
            'ingredients': ['Broccoli'],
            'price': '6.50',

            'description': 'Kartoffelauflauf mit Broccoli überbacken',
            'name': 'Kartoffel-Broccoli-Auflauf',
        }, {
            'id': '244',
            'ingredients': ['Blumenkohl', 'Tomatensoße'],
            'price': '6.50',

            'description': 'Kartoffelauflauf mit Blumenkohl überbacken',
            'name': 'Kartoffel-Blumenkohl-Auflauf',
        }, {
            'id': '245',
            'ingredients': ['Zwiebeln', 'Schinken', 'Tomaten', 'Knoblauch'],
            'price': '6.50',

            'description': 'Kartoffelauflauf mit Zwiebeln, Schinken, Tomaten und Knoblauch überbacken',
            'name': 'Kartoffel-Zwiebel-Auflauf',
        }, {
            'id': '246',
            'ingredients': ['Spinat', 'Schinken', 'Tomaten', 'Knoblauch'],
            'price': '6.50',

            'description': 'Kartoffelauflauf mitSpinat, Broccoli und Mozzarella überbacken',
            'name': 'Kartoffel-Mozarella-Auflauf',
        }, ],
        'Nudelgerichte': [{
                'id': '65',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.00',

                'description': 'Spaghetti mit Hackfleischsoße',
                'name': 'Spaghetti Bolognese',
                'displaySubGroup': 'Spaghetti'
            }, {
                'id': '66',
                'ingredients': ['Tomatensoße'],
                'price': '5.50',

                'description': 'Spaghetti mit Tomatensoße',
                'name': 'Spaghetti Napoli'
            }, {
                'id': '67',
                'ingredients': ['Oliven', 'Knoblauch', 'Kapern', 'Sardellen'],
                'price': '6.50',

                'description': 'Spaghetti mit Oliven, Knoblauch, Kapern und Sardellen - pikant.',
                'name': 'Spaghetti Putanese'
            }, {
                'id': '68',
                'ingredients': ['Olivenöl', 'Knoblauch', 'Peperoni'],
                'price': '5.50',

                'description': 'Spaghetti mit Olivenöl, Knoblauch und Peperoni, scharf.',
                'name': 'Spaghetti Aglio Olio e Peperoncini'
            }, {
                'id': '69',
                'ingredients': ['Schinken', 'Sahne-Soße'],
                'price': '6.00',

                'description': 'Spaghetti mit Schinken und Sahne-Soße',
                'name': 'Spaghetti Carbonara'
            }, {
                'id': '70',
                'ingredients': ['Thunfisch', 'Knoblauch', 'Tomatensoße'],
                'price': '6.50',

                'description': 'Spaghetti mit Thunfisch und Knoblauch.',
                'name': 'Spaghetti Tonno'
            }, {
                'id': '71',
                'ingredients': ['Meeresfrüchten', 'Knoblauch', 'Tomatensoße'],
                'price': '6.50',

                'description': 'Spaghetti mit Meeresfrüchten und Knoblauch.',
                'name': 'Spaghetti Frutti di Mare'
            }, {
                'id': '72',
                'ingredients': ['Shrimps', 'Knoblauch', 'Tomatensoße'],
                'price': '6.50',

                'description': 'Spaghetti alla Toni.',
                'name': 'Spaghetti alla Toni'
            }, {
                'id': '73',
                'ingredients': ['Basilikumsauce', 'Schafskäse'],
                'price': '6.50',

                'description': 'Spaghetti mit Basilikumsauce garniert mit Schafskäse.',
                'name': 'Spaghetti al Pesto'
            }, {
                'id': '74',
                'ingredients': ['Basilikumsauce', 'Schafskäse'],
                'price': '6.50',

                'description': 'Spaghetti mit Olivenöl, Knoblauch und Scampi, scharf',
                'name': 'Spaghetti Aglio Olio e Scampi'
            }, {
                'id': '75',
                'ingredients': ['Tomatensoße', 'Putenfleisch', 'Knoblauch', ''],
                'price': '6.50',

                'description': 'Spaghetti mit Tomatensoße, Putenfleisch, Knoblauch',
                'name': 'Spaghetti al Pollo'
            },
            // tagliatelle
            {
                'id': '230',
                'ingredients': ['Sahne-Soße', 'Schinken'],
                'price': '6.50',
                'displaySubGroup': 'Tagliatelle',
                'description': 'Tagliatelle mit Schinken Sahne-Soße',
                'name': 'Spaghetti al Pollo'
            }, {
                'id': '231',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.00',
                'description': 'Tagliatelle Bolognese mit Hackfleischsoße',
                'name': 'Tagliatelle Bolognese'
            }, {
                'id': '232',
                'ingredients': ['Broccoli', 'Tomaten-Sahnesauce'],
                'price': '6.50',
                'description': 'Tagliatelle frischem Broccoli in Tomaten-Sahnesauce',
                'name': 'Tagliatelle Broccoli'
            }, {
                'id': '233',
                'ingredients': ['Broccoli', 'Tomaten-Sahnesauce'],
                'price': '6.50',
                'description': 'Tagliatelle frischen Champignons in Jäger-Sahnesauce',
                'name': 'Tagliatelle Boscaiola'
            }, {
                'id': '234',
                'ingredients': ['Krabbenfleisch', 'Zwiebeln', 'Tomaten-Sahnesauce'],
                'price': '6.50',
                'description': 'Tagliatelle mit Krabbenfleisch und Zwiebeln in Tomaten-Sahnesauce',
                'name': 'Tagliatelle Surimi'
            }, {
                'id': '235',
                'ingredients': ['Lachs', 'Tomaten-Sahnesauce'],
                'price': '7.00',
                'description': 'Tagliatelle mit Lachs in Tomaten-Sahnesauce',
                'name': 'Tagliatelle Salmone'
            }, {
                'id': '79',
                'ingredients': ['Tomatensoße'],
                'price': '5.50',
                'displaySubGroup': 'Penne/Rigatoni',
                'description': 'Penne mit Tomaten-Sahnesauce (pikant)',
                'name': 'Penne al Arrabiata'
            }, {
                'id': '80',
                'ingredients': ['Broccoli', 'Knoblauch', 'Tomaten-Sahnesauce'],
                'price': '6.50',
                'description': 'Penne mit frischem Broccoli, Knoblauch und Tomaten-Sahnesauce',
                'name': 'Penne al Broccoli'
            }, {
                'id': '81',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.00',
                'description': 'Penne mit Hackfleischsoße',
                'name': 'Penne Bolognese'
            }, {
                'id': '82',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.50',
                'description': 'Penne mit Hackfleischsoße',
                'name': 'Penne al Rucola'
            }, {
                'id': '83',
                'ingredients': ['Käse'],
                'price': '6.50',
                'description': 'Penne mit vier verschiedenen Käsesorten',
                'name': 'Penne Quatro Formaggi'
            }, {
                'id': '84',
                'ingredients': ['Gorgonzola-Sahnesauce'],
                'price': '6.50',
                'description': 'Penne mit Gorgonzola-Sahnesauce',
                'name': 'Penne Gorgonzola'
            }, {
                'id': '85',
                'ingredients': ['Gorgonzola-Sahnesauce'],
                'price': '6.50',
                'description': 'Penne mit Thunfisch und Knoblauch in Sahne-Soße',
                'name': 'Penne all Tonno'
            }, {
                'id': '86',
                'ingredients': ['Putenfleisch', 'Spinat', 'Knoblauch', 'Tomatensoße'],
                'price': '6.50',
                'description': 'Penne mit Putenfleisch, Spinat und Knoblauch in Tomatensoße',
                'name': 'Penne alla Toni'
            }, {
                'id': '87',
                'ingredients': ['Schinken', 'Sahne-Soße'],
                'price': '6.50',
                'description': 'Penne mit Schinken in Sahne-Soße',
                'name': 'Penne alla Panna'
            }, {
                'id': '88',
                'ingredients': ['Zucchini', 'Knoblauch', 'Basilikum', 'Tomatensoße'],
                'price': '6.50',
                'description': 'Penne mit Schinken in Sahne-Soße',
                'name': 'Penne alla Zucchini'
            },
            // tortellini
            {
                'id': '94',
                'ingredients': ['Schinken', 'Champignons', 'Erbsen', 'Tomaten-Sahnesauce'],
                'price': '6.50',
                'description': 'Tortellini mit Schinken, Champignons, Erbsen, Tomaten-Sahnesauce',
                'name': 'Tortellini alla Paesane',
                'displaySubGroup': 'Tortellini'
            }, {
                'id': '95',
                'ingredients': ['Schinken', 'Sahnesauce'],
                'price': '6.00',
                'description': 'mit Schinken und Sahnesauce',
                'name': 'Tortellini Panna',

            }, {
                'id': '96',
                'ingredients': ['Gorgonzola'],
                'price': '6.50',
                'description': 'Tortellini Gorgonzola-Sahnesauce',
                'name': 'Tortellini Gorgonzola',
            },

            {
                'id': '97',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.00',
                'description': 'Tortellini Hackfleischsoße',
                'name': 'Tortellini Bolognese',
            }, {
                'id': '98',
                'ingredients': [''],
                'price': '6.50',
                'description': 'Tortellini mit vier Käsesorten',
                'name': 'Tortellini Quatro Formaggio',
            }, {
                'id': '104',
                'ingredients': ['Gorgonzola'],
                'price': '6.50',
                'description': 'Gnocchi mit Gorgonzola-Sahnesauce',
                'name': 'Gnocchi',
                'displaySubGroup': 'Gnocchi'
            }, {
                'id': '105',
                'ingredients': ['Basilikum', 'Sahne-Soße'],
                'price': '6.50',
                'description': 'Gnocchi mit Basilikum-Sahnesauce',
                'name': 'Gnocchi al Pesto',
            }, {
                'id': '106',
                'ingredients': ['Basilikum', 'Sahne-Soße'],
                'price': '6.50',
                'description': 'Gnocchi mit Mozzarella, Basilikum in Tomatensoße',
                'name': 'Gnocchi al Pomodoro e Mozzarella',
            }, {
                'id': '107',
                'ingredients': ['Hackfleischsoße'],
                'price': '6.50',
                'description': 'Gnocchi mit Hackfleischsoße',
                'name': 'Gnocchi Bolognese',
            }, {
                'id': '108',
                'ingredients': ['Spinat', 'Gorgonzola'],
                'price': '6.50',
                'description': 'Gnocchi mit Gorgonzolasauce',
                'name': 'Gnocchi Spinaci',
            },


        ],



        'DeutscheKueche': [{
            'id': '115',
            'ingredients': [],
            'price': '7.50',
            'description': '',
            'name': 'Schnitzel "Wiener Art"',
            'displaySubGroup': 'Schweineschnitzel',
        }, {
            'id': '116',
            'ingredients': [],
            'price': '8.5',
            'description': '',
            'name': 'Jägerschnitzel',
        }, {
            'id': '117',
            'ingredients': ['Rahmsoße'],
            'price': '8.0',
            'description': '',
            'name': 'Rahmschnitzel',

        }, {
            'id': '118',
            'ingredients': [],
            'price': '8.5',
            'description': '',
            'name': 'Zigeunerschnitzel',
        }, {
            'id': '119',
            'ingredients': ["Champignons", "Rahmsoße"],
            'price': '8.5',
            'description': 'Schweineschnitzel in Rahmsoße mit Champignons',
            'name': 'Schweineschnitzel',
        }, {
            'id': '120',
            'ingredients': ["Schinken", "Ananas", "Käse", "Sahne-Soße"],
            'price': '8.5',
            'description': 'Hawaiischnitzel mit Schinken, Ananas und Sahne-Soße überbacken mit Käse',
            'name': 'Hawaiischnitzel',
        }, {
            'id': '121',
            'ingredients': ["Schinken", "Käse"],
            'price': '8.5',
            'description': 'Schnitzel "Schweizer Art" mit Schinken und Käse überbacken',
            'name': 'Schnitzel "Schweizer Art"',
        }, {
            'id': '122',
            'ingredients': ["Schinken", "Käse", "Bolognese"],
            'price': '8.5',
            'description': 'Schnitzel "Bolognese" mit Schinken, Käse und Bolognesesoße überbacken',
            'name': 'Schnitzel "Bolognese"',
        }, {
            'id': '123',
            'ingredients': ["Pommes"],
            'price': '5.00',
            'description': 'Kinderschnitzel mit Pommes Frites',
            'name': 'Rumpelstilzchen - Kinderschnitzel',
        }, {
            'id': '124',
            'ingredients': ["Pommes"],
            'price': '8.50',
            'description': 'Zwiebel-Schnitzel',
            'name': 'Zwiebel-Schnitzel',
        }, {
            'id': '130',
            'ingredients': [],
            'price': '7.50',
            'description': 'Putenschnitzel (paniert)',
            'name': 'Putenschnitzel',
            'displaySubGroup': 'Putenschnitzel'
        }, {
            'id': '131',
            'ingredients': ['Champignons', 'Sahne-Soße'],
            'price': '8.0',
            'description': 'Putenschnitzel mit frischen Champignons in Sahne-Soße',
            'name': 'Putenschnitzel',

        }, {
            'id': '131',
            'ingredients': ['Champignons', 'Sahne-Soße'],
            'price': '8.0',
            'description': 'Putenschnitzel mit frischen Champignons in Sahne-Soße',
            'name': 'Putenschnitzel',

        }, {
            'id': '132',
            'ingredients': [],
            'price': '8.0',
            'description': 'Putenschnitzel mit Jägersoße',
            'name': 'Putenschnitzel Jägersoße',

        }, {
            'id': '133',
            'ingredients': ['Ananas', 'Sahne'],
            'price': '8.0',
            'description': 'Putenschnitzel in Curry mit Ananas-Sahne-Soße',
            'name': 'Putenschnitzel in Curry',

        }, {
            'id': '134',
            'ingredients': [],
            'price': '8.0',
            'description': 'Putengeschnetzeltes mit Bandnudeln',
            'name': 'Putengeschnetzeltes mit Bandnudeln',

        }],

        'Desserts': [{
            'id': '140',
            'ingredients': [],
            'price': '3.00',
            'flags': ['weekendOnly'],
            'description': 'Hausgemachtes Tiramisu alla Toni',
            'name': 'Tiramisu alla Toni',

        }, {
            'id': '141',
            'ingredients': [],
            'price': '2.50',
            'description': 'Hausgemachtes Panacotta',
            'name': 'Tiramisu',

        }],

        'Getraenke': [{
            'id': '145',
            'ingredients': [],
            'price': '1.50',
            'liter': '0,33l',
            'description': 'Coca Cola, Coca Cola Light, Sprite, Mezzo Mix, Fanta',
            'name': '0,33 Liter Dose',

        }, {
            'id': '146',
            'ingredients': [],
            'price': '2.50',
            'liter': '1,0l',
            'description': 'Coca Cola, Coca Cola Light, Sprite, Mezzo Mix, Fanta',
            'name': '1 Liter Flasche',

        }, {
            'id': '147',
            'ingredients': [],
            'price': '1.50',
            'liter': '0,7l',
            'description': '',
            'name': 'Mineralwasser',

        }, {
            'id': '150', // BESTELLEN
            'ingredients': [],
            'price': '2.00',
            'liter': '0,5l',
            'description': '',
            'name': 'Bier',
        }, {
            'id': '',
            'ingredients': [],
            'price': '7.00',
            'liter': '0,75l',
            'description': 'Hauswein (rot und weiß)',
            'displaySubGroup': 'Wein',
            'name': 'Wein',
        }, ],
    };
    this.all = function() {
        return this;
    };
    return this;
};