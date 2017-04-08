var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

// Write fixture data
var mixins = ["table-striped", "table-bordered", "table-hover", "table-condensed"];
mixins.forEach(function (m) {
    var fileTemplate = `include ../../../components/tables
+${m}(header,data)`;
    var fileName = `${m}.pug`;
    fs.writeFileSync(path.join(__dirname, "fixtures/tables", fileName), fileTemplate);
});

var testData = [
    {
        suite: 'table-striped mixin',
        spec: 'should render a striped table',
        fixture: 'table-striped.pug',
        locals: {
            header: ["Header 1", "Header 2", "Header 3", "Header 4"],
            data: [
                ["Lorem", "ipsum", "dolor", "sit"],
                ["In", "eos", "melius", "omnesque"],
                ["Vel", "ne", "probo", "utamur"],
                ["Duo", "cu", "illum", "interesset"]
            ]
        },
        actual: '<table class="table table-striped"><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></thead><tbody><tr><td>Lorem</td><td>ipsum</td><td>dolor</td><td>sit</td></tr><tr><td>In</td><td>eos</td><td>melius</td><td>omnesque</td></tr><tr><td>Vel</td><td>ne</td><td>probo</td><td>utamur</td></tr><tr><td>Duo</td><td>cu</td><td>illum</td><td>interesset</td></tr></tbody></table>'
    },
    {
        suite: 'table-bordered mixin',
        spec: 'should render a bordered table',
        fixture: 'table-bordered.pug',
        locals: {
            header: ["Header 1", "Header 2", "Header 3", "Header 4"],
            data: [
                ["Lorem", "ipsum", "dolor", "sit"],
                ["In", "eos", "melius", "omnesque"],
                ["Vel", "ne", "probo", "utamur"],
                ["Duo", "cu", "illum", "interesset"]
            ]
        },
        actual: '<table class="table table-bordered"><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></thead><tbody><tr><td>Lorem</td><td>ipsum</td><td>dolor</td><td>sit</td></tr><tr><td>In</td><td>eos</td><td>melius</td><td>omnesque</td></tr><tr><td>Vel</td><td>ne</td><td>probo</td><td>utamur</td></tr><tr><td>Duo</td><td>cu</td><td>illum</td><td>interesset</td></tr></tbody></table>'
    },
    {
        suite: 'table-hover mixin',
        spec: 'should render a hover table',
        fixture: 'table-hover.pug',
        locals: {
            header: ["Header 1", "Header 2", "Header 3", "Header 4"],
            data: [
                ["Lorem", "ipsum", "dolor", "sit"],
                ["In", "eos", "melius", "omnesque"],
                ["Vel", "ne", "probo", "utamur"],
                ["Duo", "cu", "illum", "interesset"]
            ]
        },
        actual: '<table class="table table-hover"><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></thead><tbody><tr><td>Lorem</td><td>ipsum</td><td>dolor</td><td>sit</td></tr><tr><td>In</td><td>eos</td><td>melius</td><td>omnesque</td></tr><tr><td>Vel</td><td>ne</td><td>probo</td><td>utamur</td></tr><tr><td>Duo</td><td>cu</td><td>illum</td><td>interesset</td></tr></tbody></table>'
    },
    {
        suite: 'table-condensed mixin',
        spec: 'should render a condensed table',
        fixture: 'table-condensed.pug',
        locals: {
            header: ["Header 1", "Header 2", "Header 3", "Header 4"],
            data: [
                ["Lorem", "ipsum", "dolor", "sit"],
                ["In", "eos", "melius", "omnesque"],
                ["Vel", "ne", "probo", "utamur"],
                ["Duo", "cu", "illum", "interesset"]
            ]
        },
        actual: '<table class="table table-condensed"><thead><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th></tr></thead><tbody><tr><td>Lorem</td><td>ipsum</td><td>dolor</td><td>sit</td></tr><tr><td>In</td><td>eos</td><td>melius</td><td>omnesque</td></tr><tr><td>Vel</td><td>ne</td><td>probo</td><td>utamur</td></tr><tr><td>Duo</td><td>cu</td><td>illum</td><td>interesset</td></tr></tbody></table>'
    }
];


describe("Tables", function() {
    testData.forEach(function (item) {
        it(item.spec, function () {
            var fn = pug.compileFile(path.join(__dirname, "fixtures/tables", item.fixture));
            assert.equal(item.actual, fn(item.locals));
        });
    });
});
