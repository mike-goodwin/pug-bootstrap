var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

// Write fixture data
var mixins = ["btn-primary", "btn-info", "btn-warning", "btn-danger", "btn-success", "btn-lg-primary", "btn-lg-info", "btn-lg-warning", "btn-lg-danger", "btn-lg-success"];
mixins.forEach(function (m) {
    var fileTemplate = `include ../../../components/buttons
+${m}(name)`;
    var fileName = `${m}.pug`;
    fs.writeFileSync(path.join(__dirname, "fixtures/buttons", fileName), fileTemplate);
});



var testData = [
    {
        suite: 'btn-primary mixin',
        spec: 'should render a primary button',
        fixture: 'btn-primary.pug',
        locals: { name: "Primary Button" },
        actual: '<button class="btn btn-primary" type="button">Primary Button</button>'
    },
    {
        suite: 'btn-info mixin',
        spec: 'should render a info button',
        fixture: 'btn-info.pug',
        locals: { name: "Info Button" },
        actual: '<button class="btn btn-info" type="button">Info Button</button>'
    },
    {
        suite: 'btn-warning mixin',
        spec: 'should render a warning button',
        fixture: 'btn-warning.pug',
        locals: { name: "Warning Button" },
        actual: '<button class="btn btn-warning" type="button">Warning Button</button>'
    },
    {
        suite: 'btn-danger mixin',
        spec: 'should render a danger button',
        fixture: 'btn-danger.pug',
        locals: { name: "Danger Button" },
        actual: '<button class="btn btn-danger" type="button">Danger Button</button>'
    },
    {
        suite: 'btn-success mixin',
        spec: 'should render a success button',
        fixture: 'btn-success.pug',
        locals: { name: "Success Button" },
        actual: '<button class="btn btn-success" type="button">Success Button</button>'
    },
    {
        suite: 'btn-lg-primary mixin',
        spec: 'should render a large primary button',
        fixture: 'btn-lg-primary.pug',
        locals: { name: "Large Primary Button" },
        actual: '<button class="btn btn-primary btn-lg" type="button">Large Primary Button</button>'
    },
    {
        suite: 'btn-lg-info mixin',
        spec: 'should render a large info button',
        fixture: 'btn-lg-info.pug',
        locals: { name: "Large Info Button" },
        actual: '<button class="btn btn-info btn-lg" type="button">Large Info Button</button>'
    },
    {
        suite: 'btn-lg-warning mixin',
        spec: 'should render a large warning button',
        fixture: 'btn-lg-warning.pug',
        locals: { name: "Large Warning Button" },
        actual: '<button class="btn btn-warning btn-lg" type="button">Large Warning Button</button>'
    },
    {
        suite: 'btn-lg-danger mixin',
        spec: 'should render a large danger button',
        fixture: 'btn-lg-danger.pug',
        locals: { name: "Large Danger Button" },
        actual: '<button class="btn btn-danger btn-lg" type="button">Large Danger Button</button>'
    },
    {
        suite: 'btn-lg-success mixin',
        spec: 'should render a large success button',
        fixture: 'btn-lg-success.pug',
        locals: { name: "Large Success Button" },
        actual: '<button class="btn btn-success btn-lg" type="button">Large Success Button</button>'
    },
    {
        suite: 'input-btn-primary mixin',
        spec: 'should render a input primary button',
        fixture: 'input-btn-primary.pug',
        locals: { name: "Input Primary Button" },
        actual: '<input class="btn btn-primary" type="button" value="Input Primary Button"/>'
    },
    {
        suite: 'input-btn-info mixin',
        spec: 'should render a input info button',
        fixture: 'input-btn-info.pug',
        locals: { name: "Input Info Button" },
        actual: '<input class="btn btn-info" type="button" value="Input Info Button"/>'
    },
    {
        suite: 'input-btn-warning mixin',
        spec: 'should render a input warning button',
        fixture: 'input-btn-warning.pug',
        locals: { name: "Input Warning Button" },
        actual: '<input class="btn btn-warning" type="button" value="Input Warning Button"/>'
    },
    {
        suite: 'input-btn-danger mixin',
        spec: 'should render a input primary button',
        fixture: 'input-btn-primary.pug',
        locals: { name: "Input Danger Button" },
        actual: '<input class="btn btn-primary" type="button" value="Input Danger Button"/>'
    },
    {
        suite: 'input-btn-success mixin',
        spec: 'should render a input success button',
        fixture: 'input-btn-success.pug',
        locals: { name: "Input Success Button" },
        actual: '<input class="btn btn-success" type="button" value="Input Success Button"/>'
    },
    {
        suite: 'submit-btn-primary mixin',
        spec: 'should render a submit primary button',
        fixture: 'submit-primary.pug',
        locals: { name: "Submit Primary Button" },
        actual: '<input class="btn btn-primary" type="submit" value="Submit Primary Button"/>'
    },
    {
        suite: 'submit-btn-info mixin',
        spec: 'should render a submit info button',
        fixture: 'submit-info.pug',
        locals: { name: "Submit Info Button" },
        actual: '<input class="btn btn-info" type="submit" value="Submit Info Button"/>'
    },
    {
        suite: 'submit-btn-warning mixin',
        spec: 'should render a submit warning button',
        fixture: 'submit-warning.pug',
        locals: { name: "Submit Warning Button" },
        actual: '<input class="btn btn-warning" type="submit" value="Submit Warning Button"/>'
    },
    {
        suite: 'submit-btn-danger mixin',
        spec: 'should render a input primary button',
        fixture: 'submit-primary.pug',
        locals: { name: "Submit Danger Button" },
        actual: '<input class="btn btn-primary" type="submit" value="Submit Danger Button"/>'
    },
    {
        suite: 'submit-btn-success mixin',
        spec: 'should render a input success button',
        fixture: 'submit-success.pug',
        locals: { name: "Submit Success Button" },
        actual: '<input class="btn btn-success" type="submit" value="Submit Success Button"/>'
    }
];

testData.forEach(function (item) {
    describe(item.suite, function () {
        it(item.spec, function () {
            var fn = pug.compileFile(path.join(__dirname, "fixtures/buttons", item.fixture));
            assert.equal(item.actual, fn(item.locals));
        });
    });
});
