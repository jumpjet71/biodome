(function () {
    'use strict';

    describe('the user resource:', function () {

        var injector, mockHttpBackend, userResource;

        beforeEach(function () {

            injector = angular.injector(['ngMock', 'webApp.restResources']);
            mockHttpBackend = injector.get('$httpBackend');
            userResource = injector.get('userResource');
        });

        it('should return a status of 200 along with a valid resource when performing a valid GET request', function () {

            var id = 12;
            var user = userResource.createInstance(), response = {httpStatus: 200, data: {id: id, firstName: "Steve", lastName: "Austin"}};
            user.model.id = id;

            mockHttpBackend.expectGET("/v1/api/users/12").respond(200, response);

            user.getResource().then(function () {

                expect(user.model.id).to.equal(response.data.id);
                expect(user.httpStatus).to.equal(response.httpStatus);
                expect(user.model.firstName).to.equal(response.data.firstName);
            });
        });

        afterEach(function () {

            mockHttpBackend.flush();
            mockHttpBackend.verifyNoOutstandingExpectation();
            mockHttpBackend.verifyNoOutstandingRequest();
        });
    });
})();