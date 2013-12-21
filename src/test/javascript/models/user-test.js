(function () {
    'use strict';

    require('./../../../../server');

    var expect = require('chai').expect,
        mongoose = require('mongoose'),
        User = mongoose.model('User');

    describe('when using the User model:', function () {

        var firstUser;

        before(function (done) {

            firstUser = new User({
                firstName: 'Bruce',
                lastName: 'Wayne',
                email: 'bwayne@wayneinc.com',
                username: 'batman',
                password: 'justice'
            });

            done();
        });

        describe('the save method', function () {

            it('should begin with no saved users', function (done) {

                User.find({}, function (error, users) {

                    expect(users.length).to.equal(0);
                    done();
                });
            });

            it('should be able to save a user without problems', function(done) {

                firstUser.save(done);
            });

            it('should fail to save an existing user again', function () {

                firstUser.save(function (error) {

                    expect(error);
                });
            });
        });

        after(function (done) {

            User.remove().exec();
            done();
        });
    });

})();