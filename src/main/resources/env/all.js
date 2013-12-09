/**
 * This configuration module is responsible for setting all
 * of the default values of the application's environment variables.
 *
 * @class all
 * @module resources.env
 */
(function () {
    'use strict';

    module.exports = {
        mode: 'default',
        mongoDbUrl: process.env.MONGOHQ_URL || "mongodb://localhost/biodome-default",
        port: process.env.PORT || 4000,
        app: { name: "Biodome - Default" }
    };

})();