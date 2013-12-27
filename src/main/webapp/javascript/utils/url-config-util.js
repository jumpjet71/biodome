/**
 *
 * The URL configuration utility. Used to determine the URL
 * prefixes for all of the REST resources.
 *
 * @class urlConfigUtil
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('urlConfigUtil', function () {

        return {

            /**
             * REST url prefix, and REST API version number.
             */
            rootUrl: "/v1/api",
            /**
             * The base URL path for the resource.
             */
            path: null,
            /**
             * Get a REST endpoint URL.
             * @method getUrl
             */
            getUrl: function () {

                return this.rootUrl  + this.path;
            }
        };
    });

})(appModules.utils);