(function () {
    'use strict';

    var _ = require('underscore'),
        mode = process.env.NODE_ENV || 'test';

    // load different configurations based on the running mode.

    module.exports = _.extend(
        require('../env/all'),
        require('../config/config/' + mode) || {});
})();