var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe("Modal", function() {
    it("should generate a modal",function() {
        var fn = pug.compileFile(path.join(__dirname,"fixtures/modal","modal.pug"));
    });
});
