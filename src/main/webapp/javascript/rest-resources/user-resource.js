/**
 * The NAS resource class factory.
 *
 * @class userResource
 * @module webapp.javascript.restResources
 *
 */
(function (restResources) {
    'use strict';

    restResources.factory('userResource', function (baseResource) {

        var Resource = function () {

            baseResource.url.path = "/users";

            return baseResource;
        };

        return {

            createInstance: function () {

                return new Resource();
            }
        };
    });

})(appModules.restResources);