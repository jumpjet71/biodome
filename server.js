/**
 * The main server side application entry file.
 *
 * NOTE: The order of module loading is important.
 * Randomly changing the order of the module loading could result in catastrophic exceptions.
 */
(function () {
    'use strict';

    // load module dependencies.
    var mongoose = require('mongoose'),
        fs = require('fs'),
        express = require('express'),
        http = require('http'),
        app = express();

    // load configurations.
    var config = require('./src/main/resources/config/config');

    // bootstrap mongoDB connection.
    var mongoDb = mongoose.connect(config.mongoDbUrl);

    // bootstrap mongoose domain models.
    var modelsPath = './src/main/javascript/models';

    var walk = function (path) {
        fs.readdirSync(path).forEach(function (file) {
            var newPath = path + '/' + file;
            var stat = fs.statSync(newPath);
            if (stat.isFile()) {
                if (/(.*)\.(js$|coffee$)/.test(file)) {
                    require(newPath);
                }
            } else if (stat.isDirectory()) {
                walk(newPath);
            }
        });
    };

    // load all of the domain model schemas.
    walk(modelsPath);

    // bootstrap express configuration.
    require('./src/main/resources/config/express')(app, mongoDb, __dirname);

    // bootstrap page routes.
    require('./src/main/resources/config/page-routes')(app);

    // create and run the node js web server instance
    http.createServer(app).listen(config.port,  function () {

        console.log("Express server listening on port " + config.port + ", running in " + config.mode + " mode.");
    });
})();