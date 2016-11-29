var assert = require("assert");
var jade = require("pug");
var fs = require("fs");
var path = require("path");

describe("Dropdowns", function () {

    function generateItems(count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            items[i] = {
                url: 'url' + i,
                text: 'text' + i
            }
        }
        return items;
    }
    it("should generate a dropdown", function () {
        var locals = {
            caption: "dropdown caption",
            items: generateItems()
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/dropdowns/dropdown.pug"));
        assert.equal('<div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">dropdown caption&nbsp;<span class="caret"></span></button><ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1"></ul></div>', fn(locals));
    });
        it("should generate a dropup", function () {
        var locals = {
            caption: "dropup caption",
            items: generateItems()
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/dropdowns/dropup.pug"));
        assert.equal('<div class="dropup"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">dropup caption&nbsp;<span class="caret"></span></button><ul class="dropdown-menu" role="menu" aria-labelledby="dropupMenu1"></ul></div>', fn(locals));
    });
});