var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe('Simple List Group', function () {

    var items = ['item1', 'item2', 'item3'];

    it('should render a simple list group', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/list-groups", 'list-group.pug'));
        var actual = '<ul class="list-group"><li class="list-group-item">item1</li><li class="list-group-item active">item2</li><li class="list-group-item">item3</li></ul>';
        var locals = {
            items: items,
            active: 1
        };
        assert.equal(actual, fn(locals));
    });
});

describe('Link List Group', function () {

    var items = [
        {
            text: 'item1',
            url: 'url1'
        },
        {
            text: 'item2',
            url: 'url2'
        },
        {
            text: 'item3',
            url: 'url3'
        }
    ];

    it('should render a link list group', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/list-groups", 'list-group-links.pug'));
        var actual = '<div class="list-group"><a class="list-group-item" href="url1">item1</a><a class="list-group-item active" href="url2">item2</a><a class="list-group-item" href="url3">item3</a></div>';
        var locals = {
            items: items,
            active: 1
        };
        assert.equal(actual, fn(locals));
    });
});

describe('Custom List Group', function () {
    it('should render a custom list group', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/list-groups", 'list-group-custom.pug'));
        var actual = '<div class="list-group"><a class="list-group-item active" href="url1"><h4 class="list-group-item-heading">heading1</h4><p class="list-group-item-text">text1</p></a><a class="list-group-item" href="url2"><h4 class="list-group-item-heading">heading2</h4><p class="list-group-item-text">text2</p></a><a class="list-group-item" href="url3"><h4 class="list-group-item-heading">heading3</h4><p class="list-group-item-text">text3</p></a></div>';
        assert.equal(actual, fn());
    });
});