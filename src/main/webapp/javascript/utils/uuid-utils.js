/**
 *
 * A wrapper for a fast, simple, RFC 4122 compliant UUID generator.
 *
 * @class uuidUtils
 * @module webapp.javascript.utils
 *
 */
(function (utils) {
    'use strict';

    utils.factory('uuidUtils', function () {

        return {

            /**
             * Generate and return a RFC4122 v1, timestamp-based, UUID.
             *
             * @method generate
             *
             * @param {Object} options [
             * node - (Array) Node id as Array of 6 bytes.
             * clockseq - (Number between 0 - 0x3fff) RFC clock sequence.
             * nsecs - (Number between 0-9999) additional time, in 100-nanosecond units
             * ].
             */
            generate: function (options) {

                return uuid.v4(options);
            }
        };
    });

})(appModules.utils);