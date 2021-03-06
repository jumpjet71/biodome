/**
 *
 * A wrapper for a fast, simple, RFC 4122 compliant UUID generator.
 *
 * @class uuidUtil
 * @module javascript.utils
 *
 */
exports.uuidUtil = (function () {
    'use strict';

    var uuid = require('node-uuid');

    return {

        /**
         * Generate and return a RFC4122 v1, timestamp-based, UUID.
         *
         * @method uuid
         *
         * @param {Object} options [
         * node - (Array) Node id as Array of 6 bytes.
         * clockseq - (Number between 0 - 0x3fff) RFC clock sequence.
         * nsecs - (Number between 0-9999) additional time, in 100-nanosecond units
         * ].
         *
         * @return {String} the UUID.
         */
        generate: function (options) {

            return uuid.v4(options);
        }
    };

})();