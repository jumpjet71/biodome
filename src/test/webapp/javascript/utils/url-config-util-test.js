(function () {
    'use strict';

    describe('for urlConfigUtil:', function () {

        var injector;

        beforeEach(function () {

            injector = angular.injector(['webApp.utils']);
        });

        describe('the getUrl method', function () {

            it('should return "/v1/api/test" using default settings and path set to "test" ', function () {

                var urlConfigUtil = injector.get('urlConfigUtil');

                urlConfigUtil.path = "/test";

                expect(urlConfigUtil.getUrl()).to.equal("/v1/api/test");
            });

            it('should return "http://localhost:9090/v42/test" using default settings and path set to "test" and version changed "v42" ', function () {

                var urlConfigUtil = injector.get('urlConfigUtil');

                urlConfigUtil.rootUrl = "http://localhost:9090/v42";
                urlConfigUtil.path = "/test";

                expect(urlConfigUtil.getUrl()).to.equal("http://localhost:9090/v42/test");
            });
        });

        afterEach(function () {

            injector = null;
        });
    });
})();