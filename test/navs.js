var assert = require("assert");
var jade = require("pug");
var fs = require("fs");
var path = require("path");

describe("Navs", function () {
    function generateItems(count) {
        var items = [];
        for (var i = 0; i < count; i++) {
            items[i] = {
                href: 'href' + i,
                text: 'text' + i
            }
        }
        return items;
    }

    var testData = [
        {
            title: 'nav with a specified class',
            file: 'nav',
            class: 'nav nav-default',
            locals: {
                type: 'nav-default',
                items: generateItems(3),
                active: 2
            }
        },
        {
            title: 'nav with tabs',
            file: 'nav-tabs',
            class: 'nav nav-tabs',
            locals: {
                items: generateItems(3),
                active: 2
            }
        },
        {
            title: 'justified nav with tabs',
            file: 'nav-tabs-justified',
            class: 'nav nav-tabs nav-justified',
            locals: {
                items: generateItems(3),
                active: 2
            }
        },
        {
            title: 'nav with pills',
            file: 'nav-pills',
            class: 'nav nav-pills',
            locals: {
                items: generateItems(3),
                active: 2
            }
        },
        {
            title: 'justified nav with pills',
            file: 'nav-pills-justified',
            class: 'nav nav-pills nav-justified',
            locals: {
                items: generateItems(3),
                active: 2
            }
        },
        {
            title: 'stacked nav with pills',
            file: 'nav-stacked',
            class: 'nav nav-pills nav-stacked',
            locals: {
                items: generateItems(3),
                active: 2
            }
        }
    ];

    testData.forEach(function(item) { 
        it("should generate a " + item.title, function () {
            var fn = jade.compileFile(path.join(__dirname, "fixtures/navs", item.file + ".pug"));
                    assert.equal('<ul class="' + item.class + '"><li role="presentation"><a href="href0">text0</a></li><li role="presentation"><a href="href1">text1</a></li><li class="active" role="presentation"><a href="href2">text2</a></li></ul>', fn(item.locals));
        });
    });
});