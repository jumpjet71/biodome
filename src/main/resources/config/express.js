/**
 * Express configuration module
 *
 * @class express
 * @module resources.config
 */
(function () {
    'use strict';

    var express = require('express'),
        MongoStore = require('connect-mongo')(express),
        connect = require('connect'),
        flash = require('connect-flash'),
        helpers = require('view-helpers'),
        path = require('path'),
        config = require('./config');

    module.exports = function (app, mongoDb, rootDirectoryName) {

        app.configure(function () {

            var port = config.port,
                srcMain = '/src/main',
                buildMain = '/dist/main',
                srcClient = srcMain + '/webapp',
                buildClient = buildMain + '/webapp';

            app.set('port', port);
            app.set('views', rootDirectoryName + srcClient + '/views');
            app.set('view engine', 'jade');

            //Don't use logger for test env
            if (process.env.NODE_ENV !== 'test') {
                app.use(express.logger('dev'));
            }

            app.use(connect.urlencoded());
            app.use(connect.json());
            app.use(express.methodOverride());
            app.use(express.cookieParser());

            // express/mongo session storage
            app.use(express.session({
                secret: 'b051f23bf3944d92b026ed36a1d3e003',
                store: new MongoStore({
                    db: mongoDb.connection.db,
                    collection: 'sessions'
                })
            }));

            app.use(connect.compress());

            app.use(express.static(path.join(rootDirectoryName, srcClient)));
            app.use(express.static(path.join(rootDirectoryName, buildClient)));
            app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

            //dynamic helpers
            app.use(helpers(config.app.name));

            app.use(flash());

            app.use(app.router);
        });
    };
})();