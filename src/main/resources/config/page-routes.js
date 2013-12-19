/**
 * Router description and settings for page
 * level controllers.
 *
 * @class pageRoutes
 * @module resources.config
 */
(function () {
    'use strict';

    module.exports = function (app) {

        app.get('/', function (request, response) {

            response.render('pages/home', { title: 'Home', pageMainMenuModel: { home: 'active' }});
        });

        app.get('/pages/home', function (request, response) {

            response.render('pages/home', { title: 'Home', pageMainMenuModel: { home: 'active' }});
        });

        app.get('/pages/reports', function (request, response) {

            response.render('pages/reports', { title: 'Reports', pageMainMenuModel: { reports: 'active' }});
        });

        app.get('/pages/admin', function (request, response) {

            response.render('pages/admin', { title: 'Admin', pageMainMenuModel: { admin: 'active' } });
        });
    };

})();