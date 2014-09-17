// force the test environment to 'test'
process.env.NODE_ENV = 'test';
// get the application server module
var connect = require('connect');
var serveStatic = require('serve-static');
var Browser = require('zombie');
var assert = require('assert');

var PORT = process.env.PORT || 8080;

describe('ISIS2', function () {
    before(function (done) {
        connect().use(serveStatic(__dirname)).listen(PORT);
        this.browser = new Browser({
            site: 'http://localhost:' + PORT
        });
        this.browser.visit('/', done);
    });

    it('should make sure head exists', function () {
        var browser = this.browser;
        assert.ok(browser.success);
        assert.ok(browser.query('head'));
    });

    it('should remove head succesfully', function () {
        var browser = this.browser;
        browser.evaluate('ISIS2.remove()');
        assert.ok(!browser.query('head'));
    });
});
