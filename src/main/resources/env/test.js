/**
 * The test configuration contains all of the test application
 * environment variable settings.
 *
 * @class test
 * @module resources.env
 */
(function () {
    'use strict';

    module.exports = {
        mode: 'test',
        mongoDbUrl: "mongodb://localhost/biodome-test",
        port: 3000,
        app: {
            name: "Biodome - Test"
        }
    };

})();