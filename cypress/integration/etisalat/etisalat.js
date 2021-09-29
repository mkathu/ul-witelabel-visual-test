
let scrollToBottom = require("scroll-to-bottomjs");
describe("The is a suite for visual tests for etisalat",function(){
    beforeEach(function()
    {
        cy.fixture("/etisalat/etisalat").then((data) =>{
            this.testdata=data
        }) 
    })

    it.only("open etisalat page for visual validation",function(){
            cy.visit(this.testdata.etisalat)
           cy.window().then(cyWindow => scrollToBottom({frequency: 20, timing: 5000 ,remoteWindow: cyWindow }));
           cy.percySnapshot("etisalat page");
           })
           
    it.only("open tc page for visual validation",function(){
            cy.visit(this.testdata.etisalattc)
           cy.window().then(cyWindow => scrollToBottom({frequency: 20, timing: 5000 ,remoteWindow: cyWindow }));
           cy.percySnapshot("etisalat tc page");
           })
    
           
    it.only("open blog page for visual validation",function(){
            cy.visit(this.testdata.etisalatblog)
           cy.window().then(cyWindow => scrollToBottom({frequency: 20, timing: 5000 ,remoteWindow: cyWindow }));
           cy.percySnapshot("etisalat blog page");
           })
   })