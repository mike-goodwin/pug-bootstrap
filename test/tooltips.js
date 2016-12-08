var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

var types = ["left", "right", "top", "bottom"];

describe('Tooltips', function () {

    // Write fixture data    
    types.forEach(function (m) {
        var fileTemplate = `include ../../../components/tooltips.pug
+tooltip-${m}(text,tooltip,href)`;
        var fileName = `tooltip-${m}.pug`;
        fs.writeFileSync(path.join(__dirname, "fixtures/tooltips", fileName), fileTemplate);
    });

    // specs
    types.forEach(function (type) {
        var spec = `should render a ${type} tooltip (no href)`;
        it(spec, function () {
            var fixture = `tooltip-${type}.pug`;
            var locals = {
                text: `${type} tooltip text`,
                tooltip: `${type}-tooltip`
            };
            var actual = `<a href="#" data-toggle="${locals.tooltip}" data-placement="${type}" title="${locals.tooltip}">${locals.text}</a>`;
            var fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips", fixture));
            assert.equal(actual, fn(locals));
        });
        var spec = `should render a ${type} tooltip (supplied href)`;
        it(spec, function () {
            var fixture = `tooltip-${type}.pug`;
            var locals = {
                text: `${type} tooltip text`,
                tooltip: `${type}-tooltip`,
                href: `${type}-link`
            };
            var actual = `<a href="${locals.href}" data-toggle="${locals.tooltip}" data-placement="${type}" title="${locals.tooltip}">${locals.text}</a>`;
            var fn = pug.compileFile(path.join(__dirname, "fixtures/tooltips", fixture));
            assert.equal(actual, fn(locals));
        });
    });
});
