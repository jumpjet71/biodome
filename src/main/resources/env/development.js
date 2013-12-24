/**
 * The development configuration contains all of the test application
 * environment variable settings.
 *
 * @class test
 * @module resources.env
 */
(function () {
    'use strict';

    module.exports = {
        mode: 'development',
        mongoDbUrl: "mongodb://localhost/biodome-development",
        port: 3000,
        app: { name: "Biodome - Development" },
        apiVersion: "/v1/api"
    };

})();