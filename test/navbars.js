var assert = require("assert");
var jade = require("pug");
var fs = require("fs");
var path = require("path");

describe("Navbars", function () {
    it('should generate a navbar', function () {
        var locals = {
            name: 'navbar-name',
            id: 'navbar-id',
            style: 'style',
            href: 'href'
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "navbar.pug"));
        assert.equal('<nav class="navbar navbar-style" role="navigation"><div class="navbar-header"><button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-id" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="href">navbar-name</a></div><div class="collapse navbar-collapse" id="navbar-id"><ul class="nav navbar-nav"></ul></div></nav>', fn(locals));
    });
    it('should generate a static navbar', function () {
        var locals = {
            name: 'navbar-name',
            id: 'navbar-id',
            style: 'style',
            href: 'href'
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "navbar-static.pug"));
        assert.equal('<nav class="navbar navbar-static-top navbar-style" role="navigation"><div class="container"><div class="navbar-header"><button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-id" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="href">navbar-name</a></div><div class="collapse navbar-collapse" id="navbar-id"><ul class="nav navbar-nav"></ul></div></div></nav>', fn(locals));
    });
    it('should generate a fixed navbar', function () {
        var locals = {
            name: 'navbar-name',
            id: 'navbar-id',
            style: 'style',
            href: 'href'
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "navbar-fixed.pug"));
        assert.equal('<nav class="navbar navbar-fixed-top navbar-style" role="navigation"><div class="container"><div class="navbar-header"><button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar-id" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="href">navbar-name</a></div><div class="collapse navbar-collapse" id="navbar-id"><ul class="nav navbar-nav"></ul></div></div></nav>', fn(locals));
    });
    it('should generate a navbar item', function () {
        var locals = {
            href: 'href'
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "navbar-item.pug"));
        assert.equal('<li><a href="href">Test</a></li>', fn(locals));
    });
    it('should generate an active navbar item', function () {
        var locals = {
            href: 'href',
            active: true
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "navbar-item.pug"));
        assert.equal('<li class="active"><a href="href">Test</a></li>', fn(locals));
    });
    it('should generate a navbar divider', function () {
        var locals = {};
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "nav-divider.pug"));
        assert.equal('<li class="divider"></li>', fn(locals));
    });
    it('should generate a navbar dropdown', function () {
        var locals = {
            href: 'href'
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "nav-item-dropdown.pug"));
        assert.equal('<li class="dropdown"><a class="dropdown-toggle" href="href" data-toggle="dropdown" role="button" aria-expanded="false"><span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>', fn(locals));
    });
    it('should generate an active navbar dropdown', function () {
        var locals = {
            href: 'href',
            active: true
        };
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "nav-item-dropdown.pug"));
        assert.equal('<li class="dropdown active"><a class="dropdown-toggle" href="href" data-toggle="dropdown" role="button" aria-expanded="false"><span class="caret"></span></a><ul class="dropdown-menu" role="menu"></ul></li>', fn(locals));
    });
    it('should generate a navbar header', function () {
        var locals = {};
        var fn = jade.compileFile(path.join(__dirname, "fixtures/navbars", "nav-header.pug"));
        assert.equal('<li class="dropdown-header">Test Header</li>', fn(locals));
    });
});