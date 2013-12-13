(function () {
    'use strict';

    require('../../../main/javascript/models/user');

    var expect = require('chai').expect,
        mongoose = require('mongoose'),
        User = mongoose.model('User');

    describe('when using the User model:', function () {

        var firstUser;

        beforeEach(function () {

            firstUser = new User({
                name: 'Full name',
                email: 'test@test.com',
                username: 'user',
                password: 'password'
            });
        });

        describe('the save method', function () {

            it('should begin with no users', function () {

                User.find({}, function (err, users) {

                    expect(users.length).to.equal();

                });
            });
        });
    });

})();