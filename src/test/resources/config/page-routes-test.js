(function () {
    'use strict';

    var expect = require('chai').expect,
        express = require('express'),
        app = express();

    describe('for the page router configuration:', function () {

        require('../../../main/resources/config/page-routes')(app);

        describe('the index page controller', function () {

            it('should have the route "/"', function () {

                expect(app.routes.get[0].path).to.equal('/');
            });
        });

        describe('the home page controller', function () {

            it('should have the route "/pages/home"', function () {

                expect(app.routes.get[1].path).to.equal('/pages/home');
            });
        });

        describe('the reports page controller', function () {

            it('should have the route "/pages/reports"', function () {

                expect(app.routes.get[2].path).to.equal('/pages/reports');
            });
        });

        describe('the admin page controller', function () {

            it('should have the route "/pages/admin"', function () {

                expect(app.routes.get[3].path).to.equal('/pages/admin');
            });
        });

    });

})();