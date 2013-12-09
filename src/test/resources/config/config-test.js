(function () {
    'use strict';

    var expect = require('chai').expect,
        config = require('../../../main/resources/config/config');

    describe('if the environment variable NODE_ENV is set to "test"', function () {

        var port = 3000;

        it('then the config port value should be ' + port, function () {

            process.env.NODE_ENV = 'test';

            expect(config.port).to.equal(port);
        });
    });

})();