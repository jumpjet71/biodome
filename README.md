# Biodome

Informatics reporting and analysis web site.

## The Tech

The "glue code" libraries being used:

* [Node JS](http://nodejs.org/) for HTTP serving and server JS moduling.
* [Node Package Manager](https://npmjs.org/) for server JS package managing.
* [Git](http://git-scm.com/) for source controlling.
* [Express JS](http://www.expressjs.com/) for javascript web application structuring.
* [Jade](http://www.jade-lang.com/) for server side templating.
* [Angular JS](http://angularjs.org/) for client side MVCing.
* [Bootstrap](http://twitter.github.com/bootstrap/) for client side web developing.
* [Grunt](http://www.gruntjs.com/) for server and client JS building and tasking.
* [Bower](http://bower.io/) for web package managing.
* [Mocha](http://visionmedia.github.io/mocha/) for JS unit testing.
* [Chai](http://chaijs.com/) for unit test asserting.
* [MongoDB](http://www.mongodb.org/) for data storing.
* [MongGoose](http://mongoosejs.com/) for validation, casting and business logic boilerplating.

### Project Requirements

1) Install [Node JS](http://nodejs.org/) and [NPM](https://npmjs.org/) (NPM comes with node).

2) Install [Git](http://git-scm.com/).

3) Clone the `biodome` repository:

    git clone git@github.com:jumpjet71/biodome.git

4) [Download MongoDB]( http://www.mongodb.org/downloads/).

5) [Install MongoDB](http://docs.mongodb.org/manual/installation/).

### Project Setup

From the `biodome` project directory , run the following from the command line:

1) Install [Grunt CLI](https://github.com/gruntjs/grunt-cli/) and the [Bower CLI](http://sindresorhus.com/bower-components/) global dependencies:

	npm install grunt-cli bower -g

2) Install all of the local client side JavaScript dependencies:

	bower install

3) Install all of the local server side JavaScript dependencies:

	npm install

### Available Build, Test and Deploy Grunt Commands

There are a number of [Grunt](http://www.gruntjs.com/) based targets that are used for running different build tasks:

* `grunt build-debug` or `grunt`: To run tests locally and compile all of the CSS and JavaScript files into `/dist`.
* `grunt build`: To run tests locally ,compile and [UglifyJS](http://lisperator.net/uglifyjs/) the CSS and JavaScript into `/dist`.
* `grunt test`: Run all server js and all client JavaScript [Mocha](http://visionmedia.github.io/mocha/) unit tests headless in [PhantomJS](http://phantomjs.org/).
* `grunt watch`: This is a developer convenience method for watching JavaScript and CSS file and automatically building them whenever you save.

NOTE: [MongoDB](http://www.mongodb.org/) needs to be running in order to run test tasks.

### Available Application Run Grunt Commands

After successfully running `grunt`, `grunt build-debug`, or `grunt test` you are ready to run the application:

* `grunt run-test-mode`: To run the application in test mode. (The running application URL will be: [http://localhost:3000](http://localhost:3000))
* `grunt run-dev-mode`: To run the application in development mode. (The running application URL will be: [http://localhost:3000](http://localhost:3000))

NOTE: [MongoDB](http://www.mongodb.org/) needs to be running in order to run project.