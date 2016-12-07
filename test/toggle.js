var assert = require('assert');
var pug = require('pug');
var fs = require('fs');
var path = require('path');

var types = ["default", "primary", "success", "info", "warning", "danger"];

describe('Single Toggles', function () {

    // Write fixture data    
    types.forEach(function (m) {
        var fileTemplate = `include ../../../components/toggle.pug
+toggle-${m}(caption)`;
        var fileName = `toggle-${m}.pug`;
        fs.writeFileSync(path.join(__dirname, "fixtures/toggles", fileName), fileTemplate);
    });

    // specs
    types.forEach(function (type) {
        var spec = `should render a ${type} toggle`;
        it(spec, function () {
            var fixture = `toggle-${type}.pug`;
            var locals = { caption: `${type} toggle caption` };
            var actual = `<button class="btn btn-${type}" type="button" data-toggle="button" aria-pressed="false" autocomplete="off">${type} toggle caption</button>`;
            var fn = pug.compileFile(path.join(__dirname, "fixtures/toggles", fixture));
            assert.equal(actual, fn(locals));
        });
    });
});

describe('Group Toggles', function () {

    var items = [
        {
            caption: 'caption0'
        },
        {
            caption: 'caption1'
        },
        {
            caption: 'caption2'
        },
    ];
    describe('Radio Toggles', function () {
        // Write fixture data    
        types.forEach(function (m) {
            var fileTemplate = `include ../../../components/toggle.pug
+radio-toggle-${m}(name,items,active)`;
            var fileName = `radio-toggle-${m}.pug`;
            fs.writeFileSync(path.join(__dirname, "fixtures/toggles", fileName), fileTemplate);
        });
        //specs
        types.forEach(function (type) {
            var spec = `should render a ${type} radio toggle group`;
            it(spec, function () {
                var fixture = `radio-toggle-${type}.pug`;
                var locals = {
                    items: items,
                    active: 1,
                    name: `${type} radio toggle`
                };
                var actual = `<div class="btn-group" data-toggle="buttons"><label class="btn btn-${type}"><input type="radio" name="${locals.name}" autocomplete="off"/> caption0</label><label class="btn active btn-${type}"><input type="radio" name="${locals.name}" autocomplete="off" checked="checked"/> caption1</label><label class="btn btn-${type}"><input type="radio" name="${locals.name}" autocomplete="off"/> caption2</label></div>`;
                var fn = pug.compileFile(path.join(__dirname, "fixtures/toggles", fixture));
                assert.equal(actual, fn(locals));
            });
        });
    });

    describe('Checkbox Toggles', function () {
        // Write fixture data    
        types.forEach(function (m) {
            var fileTemplate = `include ../../../components/toggle.pug
+checkbox-toggle-${m}(items,active)`;
            var fileName = `checkbox-toggle-${m}.pug`;
            fs.writeFileSync(path.join(__dirname, "fixtures/toggles", fileName), fileTemplate);
        });
        //specs
        types.forEach(function (type) {
            var spec = `should render a ${type} checkbox toggle group`;
            it(spec, function () {
                var fixture = `checkbox-toggle-${type}.pug`;
                var locals = {
                    items: items,
                    active: 1
                };
                var actual = `<div class="btn-group" data-toggle="buttons"><label class="btn btn-${type}"><input type="checkbox" autocomplete="off"/> caption0</label><label class="btn active btn-${type}"><input type="checkbox" autocomplete="off" checked="checked"/> caption1</label><label class="btn btn-${type}"><input type="checkbox" autocomplete="off"/> caption2</label></div>`;
                var fn = pug.compileFile(path.join(__dirname, "fixtures/toggles", fixture));
                assert.equal(actual, fn(locals));
            });
        });
    });
});