(function () {
    'use strict';

    module.exports = {
        port: process.env.PORT || 3000,
        mongoUrl: process.env.MONGOHQ_URL
    };
})();