/**
 * This configuration module is responsible for loading different
 * environment configurations based on the current application
 * running mode('test', 'dev', or 'prod').
 *
 * @class config
 * @module resources.config
 */
(function () {
    'use strict';

    var _ = require('underscore');

    // load different configurations based on the running mode.
    module.exports = _.extend(
        require('../env/all'),
        require('../env/' + process.env.NODE_ENV + '.js') || {});
})();