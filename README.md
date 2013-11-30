# Bio Dome

 Bio informatics web site.

## The Tech

The "glue code" libraries being used:

* [Node JS](http://nodejs.org/) for HTTP serving and server JS moduling.
* [Node Package Modules](https://npmjs.org/) for server JS package managing.
* [Git](http://git-scm.com/) for source controlling.
* [Express JS](http://www.expressjs.com/) for javascript web application structuring.
* [Jade](http://www.jade-lang.com/) for server side templating.
* [Angular JS](http://angularjs.org/) for client side MVCing.
* [Bootstrap](http://twitter.github.com/bootstrap/) for client side web developing.
* [Grunt](http://www.gruntjs.com/) for server and client JS building and tasking.
* [Bower](http://bower.io/) for web package managing.
* [Mocha](http://visionmedia.github.io/mocha/) for JS unit testing.
* [Chai](http://chaijs.com/) for unit test asserting.

### Requirements

1) Install [Node JS](http://nodejs.org/) and NPM (should come with Node).

2) Install [Git](http://git-scm.com/).

3) Clone the `biodome` repository:

    git clone git@github.com:jumpjet71/bidome.git

### Project Setup

From the `biodome` project directory , run the following from the command line:

1) Install [Grunt CLI](https://github.com/gruntjs/grunt-cli) and the [Bower CLI](http://sindresorhus.com/bower-components/) global dependencies:

	npm install grunt-cli bower -g

2) Install all of the local client side JavaScript dependencies:

	bower install

3) Install all of the local server side JavaScript dependencies:

	npm install

### Available Grunt commands

There are a number of [Grunt](http://www.gruntjs.com/) based targets that are used for running different build tasks:

* `grunt`: To run tests locally and compile the CSS and JavaScript into `/dist`.
* `grunt deploy`: To run tests locally ,compile and [UglifyJS](http://lisperator.net/uglifyjs/) the CSS and JavaScript into `/dist`.
* `grunt dist`: Only compile CSS and JavaScript into `/dist`.
* `grunt test`: Run all server js and all client JavaScript [Mocha](http://visionmedia.github.io/mocha/) unit tests headlessly in [PhantomJS](http://phantomjs.org/).
* `grunt watch`: This is a developer convenience method for watching JavaScript and CSS file and automatically building them whenever you save.