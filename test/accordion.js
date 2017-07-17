var pug = require("pug");
var fs = require("fs");
var assert = require("assert");
var path = require("path");

describe("Accordion",function() {

    var accordionTemplate = `include ../../../components/accordion
+accordion(id)
    +accordion-item(type,title,parent,expanded)`;
    fs.writeFileSync(path.join(__dirname,"fixtures/accordion","accordion.pug"),accordionTemplate);
    var fn = pug.compileFile(path.join(__dirname,"fixtures/accordion","accordion.pug"));
    var actual = '<div class="panel-group" id="accordionmyaccordion" role="tablist" aria-multiselectable="true"><div class="panel panel-primary"><div role="tab" id="headingMy Accordion Item" class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionmyaccordion" href="#collapseMy_Accordion_Item" aria-expanded="true" aria-controls="collapseOne">My Accordion Item</a></h4></div><div class="panel-collapse collapse" id="collapseMyAccordionItem" role="tabpanel" aria-labelledby="headingMy Accordion Item"><div class="panel-body"></div></div></div></div>';
    var locals = { id: "myaccordion",title:"My Accordion Item",type: "primary", parent: "myaccordion",expanded:false};
    it("should generate an accordion",function() {
        assert.equal(actual,fn(locals));
    });

    var accItemPrimary = `include ../../../components/accordion
+accordion-item-primary(title,parent,expanded)`;
    fs.writeFileSync(path.join(__dirname, "fixtures/accordion","accordion-item-primary.pug"),accItemPrimary);
    fn = pug.compileFile(path.join(__dirname,"fixtures/accordion","accordion-item-primary.pug"));
    actual = '<div class="panel panel-primary"><div class="panel-heading" role="tab" id="headingMy Accordion Item"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordionmyaccordion" href="#collapseMy_Accordion_Item" aria-expanded="true" aria-controls="collapseOne">My Accordion Item</a></h4></div><div class="panel-collapse collapse" id="collapseMy_Accordion_Item" role="tabpanel" aria-labelledby="headingMy Accordion Item"><div class="panel-body"></div></div></div>';
    it("should generate a primary accordion item", function() {
        assert.equal(actual, fn(locals));
    });
});
