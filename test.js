// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get the application server module
var connect = require('connect');
var serveStatic = require('serve-static');
var Browser = require('zombie');
var assert = require('assert');

describe('contact page', function() {
    before(function() {
        connect().use(serveStatic(__dirname)).listen(8080);
    });
    it('description', function(done) {
        // Load the page from localhost
        browser = new Browser();
        browser.visit("http://localhost:8080/", function() {
            assert.ok(!browser.query("head"));
            done();
        });
    });

    after(function(done) {
        done();
    });
});
