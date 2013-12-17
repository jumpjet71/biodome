(function () {
    'use strict';

    require('./../../../../server');

    var expect = require('chai').expect,
        mongoose = require('mongoose'),
        User = mongoose.model('User');

    describe('when using the User model:', function () {

        var firstUser, secondUser;

        beforeEach(function () {

            firstUser = new User({
                firstName: 'Bruce',
                lastName: 'Wayne',
                email: 'bwayne@wayneinc.com',
                username: 'batman',
                password: 'justice'
            });

            firstUser.save();

            secondUser = new User({
                firstName: 'Clark',
                lastName: 'Kent',
                email: 'ckent@dailyplanet.com',
                username: 'superman',
                password: 'hope'
            });

            secondUser.save();
        });

        describe('the save method', function () {

            it('should begin with two saved users', function() {

                User.find({}, function(error, users) {

                    expect(users.length).to.equal(2);
                });
            });
        });

        afterEach(function () {

            User.remove().exec();
        });
    });

})();