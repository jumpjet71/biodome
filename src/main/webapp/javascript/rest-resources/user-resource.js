/**
 * The NAS resource class factory.
 *
 * @class userResource
 * @module webapp.javascript.restResources
 *
 */
(function (restResources) {
    'use strict';

    restResources.factory('userResource', function (baseResourceUtils) {

        var Resource = function () {

            baseResourceUtils.url.path = "/users";

            return baseResourceUtils;
        };

        return {

            createInstance: function () {

                return new Resource();
            }
        };
    });

})(appModules.restResources);