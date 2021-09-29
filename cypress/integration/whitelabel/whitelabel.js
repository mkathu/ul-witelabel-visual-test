
let scrollToBottom = require("scroll-to-bottomjs");

describe("visual test of whitelabel site page",function(){

    before(() => {
        // Block newrelic js outright due to issues with Cypress networking code.
        cy.log("Blocking NewRelic scripts");
        //Will block 
        //  https://js-agent.newrelic.com/nr-spa-1208.js
        cy.intercept(/\.*newrelic.*$/, (req) => {
            console.log("NEW RELIC INTERCEPTED");
            req.reply("console.log('Fake New Relic script loaded');");
        });
    });

    beforeEach(function()
    {
        cy.fixture("/whitelabel/whitelabel-pages").then((data) =>{
            this.testdata=data
        }) 
    })

    it("open knorr homepage",function(){
        cy.visit(this.testdata.knorr);
        cy.window().then(cyWindow => scrollToBottom({frequency: 10, timing: 500 ,remoteWindow: cyWindow }));
        cy.percySnapshot("Lazy loading knorr images");
    })

    it("open page for visual validation for dove",function(){
     cy.visit(this.testdata.homepage)
     cy.document().then(doc => {
        // create a new style tag
        let $style = doc.createElement("style");
        // add percy-specific css
        $style.innerHTML = "@media only percy { .productcarousel__root { display: none !important; } };";
        // inject styles into the document
        doc.body.appendChild($style)
      });
    cy.window().then(cyWindow => scrollToBottom({frequency: 10, timing: 5000 ,remoteWindow: cyWindow }));
    cy.percySnapshot("Lazy loading homepage images");
    })

    it("open product page for visual validation for dove",function(){
        let arrayOsPage=this.testdata.productpage
        let i=0
        arrayOsPage.forEach(element => {
           cy.log(i)
            cy.visit(element)
        cy.document().then(doc => {
           // create a new style tag
           let $style = doc.createElement("style");
           // add percy-specific css
           $style.innerHTML = "@media only percy { .productcarousel__root { display: none !important; } };";
           // inject styles into the document
           doc.body.appendChild($style)
         });
         //cy.get("*[class^='accordion']").click()
       cy.window().then(cyWindow => scrollToBottom({frequency: 10, timing: 5000 ,remoteWindow: cyWindow }));
         i=i+1
         cy.log(i)
       cy.percySnapshot("product page "+i);
        });
       })

       it("open tresemme page for visual validation",function(){
        cy.visit(this.testdata.tresseme)
       cy.window().then(cyWindow => scrollToBottom({frequency: 20, timing: 5000 ,remoteWindow: cyWindow }));
       cy.percySnapshot("tresemme page");
       })
})