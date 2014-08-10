'use strict';


var CategoryModel = require('../models/category');


module.exports = function(app) {
    var cm = new CategoryModel();
    cm = cm.all();

    var renderMenu = function renderMenu(menu, title) {
        return function(req, res) {
            res.render('menu-item', {
                categories: cm.categories,
                title: title,
                products: cm.products[menu],
                image: cm.categories
            });
        };
    };

    app.get('/menu', function(req, res) {

        res.render('menu', {
            categories: cm.categories,
            title: 'Karte'
        });


    });

    app.get('/menu/print', function(req, res){
        var data = {
            salate: cm.products.Salate,
            vorspeisen: cm.products.Vorspeisen,
            pizza: cm.products.Pizza,
            vegetarischePizza: cm.products.VegetarischePizza,
            nudelgerichte: cm.products.Nudelgerichte,
            ueberbackenes: cm.products.Ueberbackenes,
            deutscheKueche: cm.products.DeutscheKueche,
            desserts: cm.products.Desserts,
            getraenke: cm.products.Getraenke,
            layout: false,
            title: 'Karte Drucken'
        };
        res.render('pages/print', data);
    });

    app.get('/menu/pdf', function(req, res){
        res.render('pages/pdf', { layout: false });
    });

    app.get('/menu/salate', renderMenu('Salate', 'Salate'));
    app.get('/menu/vorspeisen', renderMenu('Vorspeisen', 'Vorspeisen'));
    app.get('/menu/pizza', renderMenu('Pizza', 'Pizza'));
    app.get('/menu/vegetarische-pizza', renderMenu('VegetarischePizza', 'Vegatarische Pizza'));
    app.get('/menu/nudelgerichte', renderMenu('Nudelgerichte', 'Nudelgerichte'));
    app.get('/menu/ueberbackenes', renderMenu('Ueberbackenes', 'Überbackene Spezialitäten'));
    app.get('/menu/deutsche-kueche', renderMenu('DeutscheKueche', 'Deutsche Küche'));
    app.get('/menu/desserts', renderMenu('Desserts', 'Desserts'));
    app.get('/menu/getraenke', renderMenu('Getraenke', 'Getränke'));
};
