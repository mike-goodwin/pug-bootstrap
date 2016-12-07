var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

// Write fixture data
var mixins = ["panel-default", "panel-primary", "panel-success", "panel-info", "panel-warning", "panel-danger"];
mixins.forEach(function (m) {
    var fileTemplate = `include ../../../components/panels.pug
+${m}(title)`;
    var fileName = `${m}.pug`;
    fs.writeFileSync(path.join(__dirname, "fixtures/panels", fileName), fileTemplate);
});

var testData = [
    {
        suite: 'panel-default mixin',
        spec: 'should render a default panel',
        fixture: 'panel-default.pug',
        locals: { title: "Default Panel" },
        actual: '<div class="panel panel-default">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    },
    {
        suite: 'panel-danger mixin',
        spec: 'should render a danger panel',
        fixture: 'panel-danger.pug',
        locals: { title: "Danger Panel" },
        actual: '<div class="panel panel-danger">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    },
    {
        suite: 'panel-info mixin',
        spec: 'should render a info panel',
        fixture: 'panel-info.pug',
        locals: { title: "Info Panel" },
        actual: '<div class="panel panel-info">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    },
    {
        suite: 'panel-primary mixin',
        spec: 'should render a primary panel',
        fixture: 'panel-primary.pug',
        locals: { title: "Primary Panel" },
        actual: '<div class="panel panel-primary">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    },
    {
        suite: 'panel-success mixin',
        spec: 'should render a danger panel',
        fixture: 'panel-success.pug',
        locals: { title: "Success Panel" },
        actual: '<div class="panel panel-success">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    },
    {
        suite: 'panel-warning mixin',
        spec: 'should render a warning panel',
        fixture: 'panel-warning.pug',
        locals: { title: "Warning Panel" },
        actual: '<div class="panel panel-warning">[HEADING]<div class="panel-body"></div></div>',
        heading: '<div class="panel-heading"><h3 class="panel-title">[TITLE]</h3></div>'
    }
];

describe('Panels', function () {
    testData.forEach(function (item) {
        describe(item.suite, function () {
            it(item.spec + ' (with supplied title)', function () {
                var fn = pug.compileFile(path.join(__dirname, "fixtures/panels", item.fixture));
                var heading = item.heading.replace('[TITLE]', item.locals.title);
                var actual = item.actual.replace('[HEADING]', heading);
                assert.equal(actual, fn(item.locals));
            });
            it(item.spec + ' (with default title)', function () {
                var fn = pug.compileFile(path.join(__dirname, "fixtures/panels", item.fixture));
                var actual = item.actual.replace('[HEADING]', '');
                assert.equal(actual, fn());
            });
        });
    });
});
