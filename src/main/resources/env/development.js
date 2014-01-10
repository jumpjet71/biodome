/**
 * The development configuration contains all of the test application
 * environment variable settings.
 *
 * @class development
 * @module resources.env
 */
(function () {
    'use strict';

    module.exports = {
        mode: 'development',
        mongoDbUrl: "mongodb://localhost/biodome-dev",
        port: 3000,
        app: { name: "Biodome - Development" },
        rootUrl: "/v1/api"
    };

})();