module.exports = function (grunt) {
    'use strict';

    var concatenation = grunt.file.readJSON('concatenation.json');

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            all: ['dist']
        },
        cssmin: {
            'dist/main/webapp/stylesheets/css/libs.css': concatenation.cssLibs.themes.standard.files
        },
        csslint: {
            strict: {
                options: {
                    csslintrc: '.csslintrc'
                },
                src: ['src/main/webapp/stylesheets/**/*.css']
            }
        },
        copy: {
            fonts: {
                files: [
                    {src: 'bower_components/font-awesome/font/**',
                        dest: 'dist/main/webapp/stylesheets/font', expand: true, flatten: true}
                ]
            },
            fontsImages: {
                files: [
                    {src: 'src/main/webapp/images/**',
                        dest: 'dist/main/webapp/images', expand: true, flatten: true}
                ]
            }
        },
        concat: {
            jsLibs: {
                src: concatenation.jsLibs.files,
                dest: 'dist/main/webapp/javascript/libs.js'
            },
            jsApp: {
                src: concatenation.jsApp.files,
                dest: 'dist/main/webapp/javascript/app.js'
            },
            cssLibs: {
                src: concatenation.cssLibs.themes.standard.files,
                dest: 'dist/main/webapp/stylesheets/css/libs.css'
            },
            cssApp: {
                src: concatenation.cssApp.themes.standard.files,
                dest: 'dist/main/webapp/stylesheets/standard/app.css'
            },
            htmlTemplates: {
                src: concatenation.htmlTemplates.files,
                dest: 'dist/main/webapp/templates.html'
            }
        },
        watch: {
            main: {
                files: [
                    'src/main/webapp/javascript/**/*.js',
                    'src/main/webapp/stylesheets/**/*.css',
                    'src/main/webapp/views/directives/**/*.html',
                    'concatenation.json'
                ],
                tasks: ['dist']
            }
        },
        jshint: {
            files: [
                'server.js',
                'gruntfile.js',
                'bower.json',
                'concatenation.json',
                'src/main/webapp/javascript/**/*.js',
                'src/main/javascript/**/*.js',
                'src/main/resources/**/*.js',
                'src/test/webapp/javascript/**/*.js',
                'src/test/javascript/**/*.js',
                'src/test/resources/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'server.js',
                    args: [],
                    ignoredFiles: ['README.md', 'node_modules/**', 'bower_components/**', '.DS_Store'],
                    watchedExtensions: ['js'],
                    watchedFolders: ['src/main/javascript', 'src/main/resources'],
                    debug: true,
                    delayTime: 1,
                    env: {
                        PORT: 3000
                    },
                    cwd: __dirname
                }
            }
        },
        concurrent: {
            tasks: ['nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        mocha: {
            // This variant auto-includes 'bridge.js' so you do not have
            // to include it in your HTML spec file. Instead, you must add an
            // environment check before you run `mocha.run` in your HTML.
            test: {
                // Test files
                src: ['src/test/webapp/views/pages/index.html'],
                options: {
                    // Pipe output console.log from your JS to grunt.
                    // False by default.
                    log: true,
                    // Mocha options
                    mocha: {
                        ignoreLeaks: false
                    },
                    reporter: 'Spec',
                    // Indicates whether 'mocha.run()' should be executed in
                    // 'bridge.js'. If you include `mocha.run()` in your html spec,
                    // check if environment is PhantomJS.
                    run: true
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec'
                },
                src: ['src/test/javascript/**/*.js', 'src/test/resources/**/*.js']
            }
        },
        env: {
            test: {
                NODE_ENV: 'test'
            }
        }
    });

    // load NPM tasks
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-mocha-test');

    // register NPM tasks.
    grunt.registerTask('check', 'Run csslint and jshint on all source files.', ['csslint', 'jshint']);
    grunt.registerTask('dist', 'Build the css,js, images, and fonts distribution directory.', ['concat', 'copy']);
    grunt.registerTask('minify', 'Minimize all css and js source code in the distribution directory', ['cssmin', 'uglify']);
    grunt.registerTask('test', 'Run all server js and client js unit tests.', ['env:test', 'dist', 'check', 'mocha', 'mochaTest']);
    grunt.registerTask('build', 'Build development distribution and run all unit tests.', ['test']);
    grunt.registerTask('deploy', 'Build production distribution and run all unit tests.', ['build', 'minify']);
    grunt.registerTask('default', 'The default grunt target is "build".', ['build']);
};
