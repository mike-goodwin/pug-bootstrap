var pug = require("pug");
var assert = require("assert");
var path = require("path");

var items = [
        {
        h1: 'heading 0',
        p: 'para 0',
        button: {
            url: 'button url 0',
            caption: 'button caption 0'
        }
    },
    {
        p: 'para 1',
        button: {
            url: 'button url 1',
            caption: 'button caption 1'
        }
    },
    {
        h1: 'heading 2',
        button: {
            url: 'button url 2',
            caption: 'button caption 2'
        }
    },
    {
        h1: 'heading 3',
        p: 'para 3'
    }
];

var locals = {
    id: 'carousel-id',
    items: items
};

describe("Carousel", function () {
    fn = pug.compileFile(path.join(__dirname,"fixtures/carousel/carousel.pug"));
    actual = '<div class="carousel slide" id="carousel-carousel-id" data-ride="carousel"><ol class="carousel-indicators"><li class="active" data-target="#carousel-carousel-id" data-slide-to="0"></li><li data-target="#carousel-carousel-id" data-slide-to="1"></li><li data-target="#carousel-carousel-id" data-slide-to="2"></li><li data-target="#carousel-carousel-id" data-slide-to="3"></li></ol><div class="carousel-inner" role="listbox"><div class="item active"><img/><div class="carousel-caption"><h1>heading 0</h1><p>para 0</p><p><a class="btn btn-lg btn-primary" href="button url 0" role="button">button caption 0</a></p></div></div><div class="item"><img/><div class="carousel-caption"><p>para 1</p><p><a class="btn btn-lg btn-primary" href="button url 1" role="button">button caption 1</a></p></div></div><div class="item"><img/><div class="carousel-caption"><h1>heading 2</h1><p><a class="btn btn-lg btn-primary" href="button url 2" role="button">button caption 2</a></p></div></div><div class="item"><img/><div class="carousel-caption"><h1>heading 3</h1><p>para 3</p></div></div></div><a class="left carousel-control" href="#carousel-carousel-id" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-carousel-id" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a></div>';
    it("should generate a carousel", function() {
        assert.equal(actual, fn(locals));
    });
});
