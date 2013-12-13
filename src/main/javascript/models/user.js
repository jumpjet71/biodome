/**
 * Application user domain object definition.
 *
 * @class user
 * @module javascript.models
 */
(function () {
    'use strict';

    var mongoose = require('mongoose'),
        crypto = require('crypto'),
        Schema = mongoose.Schema;

    /**
     * Schema definition.
     * @type {Schema}
     */
    var UserSchema = new Schema({
        firstName: String,
        lastName: String,
        email: String,
        username: {
            type: String,
            unique: true
        },
        provider: String,
        hashedPassword: String,
        salt: String
    });

    /**
     * Virtuals
     */
    UserSchema.virtual('password').set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
    }).get(function () {
            return this._password;
        });

    /**
     * Methods
     */
    UserSchema.methods = {
        /**
         * Authenticate - check if the passwords are the same
         *
         * @param {String} plainText
         * @return {Boolean}
         * @api public
         */
        authenticate: function (plainText) {
            return this.encryptPassword(plainText) === this.hashedPassword;
        },

        /**
         * Make salt
         *
         * @return {String}
         * @api public
         */
        makeSalt: function () {
            return Math.round((new Date().valueOf() * Math.random())) + '';
        },

        /**
         * Encrypt password
         *
         * @param {String} password
         * @return {String}
         * @api public
         */
        encryptPassword: function (password) {
            if (!password) {
                return '';
            }

            return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        }
    };

    mongoose.model('User', UserSchema);
})();