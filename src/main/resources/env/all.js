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
        port: process.env.PORT || 3000,
        mongoDbUrl: process.env.MONGOHQ_URL
    };

})();