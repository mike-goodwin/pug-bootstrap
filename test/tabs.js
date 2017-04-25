var pug = require("pug");
var assert = require("assert");
var path = require("path");

describe('Tabs', function () {

    var items = ['item1', 'item2', 'item3'];

    it('should render nav tabs without content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-list-empty.pug'));
        var expected = '<ul class="nav nav-tabs" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content"></div>';
        var locals = {
            tabs: items,
            active: 1
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav tabs headers with custom styles without content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-list-empty.pug'));
        var expected = '<ul class="nav nav-tabs test" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content"></div>';
        var locals = {
            tabs: items,
            active: 1,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav tabs with content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-list.pug'));
        var expected = '<ul class="nav nav-tabs" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content"><div class="tab-pane active" id="tabitem1"></div><div class="tab-pane" id="tabitem2"></div><div class="tab-pane test" id="tabitem3"></div></div>';
        var locals = {
            tabs: items,
            active: 1
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav tabs headers with custom styles and content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-list.pug'));
        var expected = '<ul class="nav nav-tabs test" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content"><div class="tab-pane active" id="tabitem1"></div><div class="tab-pane" id="tabitem2"></div><div class="tab-pane test" id="tabitem3"></div></div>';
        var locals = {
            tabs: items,
            active: 1,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav pills headers without content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-pills-empty.pug'));
        var expected = '<ul class="nav nav-pills" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content clearfix"></div>';
        var locals = {
            tabs: items,
            active: 1
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav pills headers with custom styles without content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-pills-empty.pug'));
        var expected = '<ul class="nav nav-pills test" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content clearfix"></div>';
        var locals = {
            tabs: items,
            active: 1,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav pills with content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-pills.pug'));
        var expected = '<ul class="nav nav-pills" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content clearfix"><div class="tab-pane active" id="tabitem1"></div><div class="tab-pane" id="tabitem2"></div><div class="tab-pane test" id="tabitem3"></div></div>';
        var locals = {
            tabs: items,
            active: 1
        };
        assert.equal(fn(locals), expected);
    });

    it('should render nav pills headers with custom styles and content', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab-pills.pug'));
        var expected = '<ul class="nav nav-pills test" role="tablist"><li><a href="#tabitem1" role="tab" data-toggle="tab">item1</a></li><li class="active"><a href="#tabitem2" role="tab" data-toggle="tab">item2</a></li><li><a href="#tabitem3" role="tab" data-toggle="tab">item3</a></li></ul><div class="tab-content clearfix"><div class="tab-pane active" id="tabitem1"></div><div class="tab-pane" id="tabitem2"></div><div class="tab-pane test" id="tabitem3"></div></div>';
        var locals = {
            tabs: items,
            active: 1,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });

    it('should render active tab', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab.pug'));
        var expected = '<div class="tab-pane active" id="tabtest"></div>';
        var locals = {
            id: 'test',
            active: true
        };
        assert.equal(fn(locals), expected);
    });

    it('should render tab with custom styles', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab.pug'));
        var expected = '<div class="tab-pane test" id="tabtest"></div>';
        var locals = {
            id: 'test',
            active: false,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });

    it('should render active tab with custom styles', function () {
        var fn = pug.compileFile(path.join(__dirname, "fixtures/tabs", 'tab.pug'));
        var expected = '<div class="tab-pane test active" id="tabtest"></div>';
        var locals = {
            id: 'test',
            active: true,
            options: { style: "test" }
        };
        assert.equal(fn(locals), expected);
    });
});
